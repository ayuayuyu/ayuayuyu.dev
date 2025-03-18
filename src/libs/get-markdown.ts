import fs from 'fs';
import matter from 'gray-matter';
import { getThumbnail } from './get-thumbanail';

export type MarkdownData = {
  title?: string;
  tag?: string;
  date?: string;
  thumbnail?: string;
  category?: string;
};

export const getMarkdown = (
  filePath: string,
): { data: MarkdownData; content: string } | null => {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    data.thumbnail = getThumbnail(content);
    if (typeof data.tags === 'string') {
      const tagMatch = data.tags.match(/tag:([^,]+)/);
      const dateMatch = data.tags.match(/date:([\d.]+)/);

      data.tag = tagMatch ? tagMatch[1].trim() : null;
      data.date = dateMatch ? dateMatch[1].trim() : null;
    }

    return {
      data: {
        title: data.title || '無題',
        tag: data.tag || '',
        date: data.date || '',
        thumbnail: data.thumbnail || '/default/icon.webp',
        category: data.category || '',
      },
      content,
    };
  } catch (error) {
    console.error(`Error loading markdown file: ${filePath}`, error);
    return null;
  }
};
