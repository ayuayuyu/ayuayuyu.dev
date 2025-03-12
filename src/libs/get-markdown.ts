import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getThumbnail } from './get-thumbanail';
import { StaticImageData } from 'next/image';

type MarkdownData = {
  title?: string;
  tag?: string;
  date?: string;
  thumbnail?: StaticImageData;
  category?: string;
};

export const getMarkdown = (
  filePath: string,
): { data: MarkdownData; content: string } | null => {
  if (path.basename(filePath).startsWith('.')) {
    return null; // `.md` 以外のファイルは処理しない
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Markdown 本文から最初の画像を取得する正規表現
  data.thumbnail = getThumbnail(content);

  if (typeof data.tags === 'string') {
    const tagMatch = data.tags.match(/tag:([^,]+)/);
    const dateMatch = data.tags.match(/date:([\d.]+)/);

    data.tag = tagMatch ? tagMatch[1].trim() : null;
    data.date = dateMatch ? dateMatch[1].trim() : null;
  }

  return {
    data: {
      title: data.title || '無題', // title を定義
      tag: data.tag,
      date: data.date,
      thumbnail: data.thumbnail,
      category: data.category,
    },
    content,
  };
};
