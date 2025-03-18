import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeAddClasses from 'rehype-add-classes';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeAddClasses, {
      iframe: 'embedded-content',
      img: 'markdown-image',
    })
    .use(rehypeStringify)
    .process(markdownContent);
  return `<div class="markdown-content">${result.toString()}</div>`;
};
