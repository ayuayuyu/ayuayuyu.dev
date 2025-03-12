const POST_DEFAULT_THUMBNAIL = '/default/icon.webp';
const FIRST_IMAGE_REGEX = /\s*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;

export function getThumbnail(content: string): string {
  const match = content.match(FIRST_IMAGE_REGEX);
  return (match && (match[2] || match[3])) ?? POST_DEFAULT_THUMBNAIL;
}
