import TitleLayout from '@/components/title';
import Gallery from '@/components/gallery';
import { getGalleryImages } from '@/libs/get-gallery-images';

export default function GalleryPage() {
  const images = getGalleryImages('contents', 'private');

  const galleryData = images.map(({ src, alt, postTitle, date }) => ({
    src,
    alt,
    postTitle,
    date,
  }));

  return (
    <div>
      <TitleLayout>Gallery</TitleLayout>
      <Gallery images={galleryData} />
    </div>
  );
}
