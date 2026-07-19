export function sanitizeDevToMarkdown(markdown: string): string {
  return markdown
    .replace(/\{%[\s\S]*?%\}/g, (match) => `\`${match}\``)
    .replace(/<(?![a-zA-Z/!?])/g, "&lt;");
}
