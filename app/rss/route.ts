import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/blog/utils";

export async function GET() {
  let allBlogs = await getBlogPosts();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.datePublished) > new Date(b.metadata.datePublished)
      ) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${escapeXml(post.metadata.seoDescription || "")}</description>
          <pubDate>${new Date(post.metadata.datePublished).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Arindam's Portfolio</title>
        <link>${baseUrl}</link>
        <description>Stay updated with the latest articles, projects, and insights from Arindam</description>
        <language>en-us</language>
        <managingEditor>arindammajumder2020@gmail.com (Arindam)</managingEditor>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

// Function to escape special XML characters
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
      default:
        return c;
    }
  });
}
