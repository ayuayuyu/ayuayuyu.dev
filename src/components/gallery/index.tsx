'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './index.module.scss';

type GalleryImage = {
  src: string;
  alt: string;
  postTitle: string;
  date: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const Gallery = ({ images }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1);
  }, [selectedIndex, images.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0);
  }, [selectedIndex, images.length]);

  // キーボード操作
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    // スクロール無効化
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, goToPrev, goToNext]);

  /**
   * esa.io 画像URLにリサイズパラメータを付与
   */
  const getThumbUrl = (src: string) => {
    if (src.includes('img.esa.io')) {
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}w=500`;
    }
    return src;
  };

  const getFullUrl = (src: string) => {
    if (src.includes('img.esa.io')) {
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}w=1400`;
    }
    return src;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Masonry Grid */}
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.gridItem}
            onClick={() => openLightbox(index)}
          >
            <img
              src={getThumbUrl(image.src)}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.overlay}>
              <span className={styles.overlayTitle}>{image.postTitle}</span>
              {image.date && (
                <span className={styles.overlayDate}>
                  {formatDate(image.date)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              ✕
            </button>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              ‹
            </button>

            <motion.div
              className={styles.lightboxContent}
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getFullUrl(images[selectedIndex].src)}
                alt={images[selectedIndex].alt}
                decoding="async"
              />
              <div className={styles.lightboxInfo}>
                {images[selectedIndex].postTitle}
                {images[selectedIndex].date && (
                  <span>{formatDate(images[selectedIndex].date)}</span>
                )}
              </div>
            </motion.div>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
