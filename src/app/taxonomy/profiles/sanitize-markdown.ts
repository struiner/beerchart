/** Removes raw HTML and executable link schemes before markdown reaches presentation. */
export function sanitizeMarkdown(markdown: string): string {
  return markdown
    .replace(/<\/?[a-z][^>]*>/gi, '')
    .replace(/\]\(\s*(?:javascript|data|vbscript):[^)]*\)/gi, '](#)');
}
