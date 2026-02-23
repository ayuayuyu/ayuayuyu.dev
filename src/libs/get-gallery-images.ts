import fs from 'fs';
import matter from 'gray-matter';

export type GalleryImage = {
  src: string;
  alt: string;
  postTitle: string;
  postSlug: string;
  postCategory: string;
  date: string;
};

const IMG_REGEX =
  /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/g;
const IMG_REGEX_ALT_FIRST =
  /<img[^>]+alt=["']([^"']*)["'][^>]+src=["']([^"']+)["'][^>]*>/g;

/**
 * 指定カテゴリのMDファイルから全画像を抽出する
 */
export const getGalleryImages = (
  dirPath: string,
  category: string = 'private',
): GalleryImage[] => {
  const files = fs.readdirSync(dirPath);
  const images: GalleryImage[] = [];

  for (const fileName of files) {
    if (!fileName.endsWith('.html.md')) continue;

    try {
      const filePath = `${dirPath}/${fileName}`;
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      if (data.category !== category) continue;

      const slug = fileName.replace(/\.html\.md$/, '');

      // タグからdateを抽出
      let date = '';
      if (typeof data.tags === 'string') {
        const dateMatch = data.tags.match(/date:(\d{4}-\d{2}-\d{2})/);
        date = dateMatch ? dateMatch[1].trim() : '';
      }

      // src="..." alt="..." パターン
      let match: RegExpExecArray | null;
      IMG_REGEX.lastIndex = 0;
      while ((match = IMG_REGEX.exec(content)) !== null) {
        images.push({
          src: match[1],
          alt: match[2] || data.title || '',
          postTitle: data.title || '無題',
          postSlug: slug,
          postCategory: data.category || '',
          date,
        });
      }

      // alt="..." src="..." パターン (esa.ioの形式)
      IMG_REGEX_ALT_FIRST.lastIndex = 0;
      while ((match = IMG_REGEX_ALT_FIRST.exec(content)) !== null) {
        const src = match[2];
        // 重複チェック
        if (!images.some((img) => img.src === src)) {
          images.push({
            src,
            alt: match[1] || data.title || '',
            postTitle: data.title || '無題',
            postSlug: slug,
            postCategory: data.category || '',
            date,
          });
        }
      }
    } catch (error) {
      console.error(`Error processing ${fileName}:`, error);
    }
  }

  // 日付で降順ソート
  images.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return images;
};

/**
 * esa.io画像URLにリサイズパラメータを付与して軽量化
 */
export const getOptimizedImageUrl = (
  src: string,
  width: number = 800,
): string => {
  if (src.includes('img.esa.io')) {
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}w=${width}`;
  }
  return src;
};
