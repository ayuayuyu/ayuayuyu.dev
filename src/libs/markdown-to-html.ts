import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

/**
 * img タグに loading="lazy" と decoding="async" を付与し、
 * esa.io 画像には ?w= パラメータでリサイズを適用して軽量化する
 */
const optimizeImages = (html: string): string => {
  return html.replace(/<img([^>]*)>/g, (_match, attrs: string) => {
    // 既に loading 属性がなければ追加
    if (!/loading=/i.test(attrs)) {
      attrs += ' loading="lazy"';
    }
    // 既に decoding 属性がなければ追加
    if (!/decoding=/i.test(attrs)) {
      attrs += ' decoding="async"';
    }
    // esa.io 画像のリサイズ（元URLに ?w= がなければ付与）
    attrs = attrs.replace(
      /src=["'](https:\/\/img\.esa\.io\/[^"'?]+)["']/g,
      (_m, url: string) => `src="${url}?w=800"`,
    );
    return `<img${attrs}>`;
  });
};

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdownContent);
  const html = optimizeImages(result.toString());
  return `<div class="markdown-content">${html}</div>`;
};
