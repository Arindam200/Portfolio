export const UTM_SOURCE = "arindamm.dev";

export function withUtmSource(href: string): string {
  if (!/^https?:\/\//i.test(href)) {
    return href;
  }

  const url = new URL(href);
  url.searchParams.set("utm_source", UTM_SOURCE);
  return url.toString();
}

export function withUtmSourceInHtml(html: string): string {
  return html.replace(
    /(<a\b[^>]*\bhref\s*=\s*)(["'])(https?:\/\/[^"'<>]+)\2/gi,
    (_match, prefix: string, quote: string, href: string) => {
      const decodedHref = href.replace(/&amp;/g, "&");
      const trackedHref = withUtmSource(decodedHref).replace(/&/g, "&amp;");

      return `${prefix}${quote}${trackedHref}${quote}`;
    },
  );
}
