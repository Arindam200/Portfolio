import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  datePublished: string;
  seoDescription: string;
  image?: string;
  cover?: string;
  tags?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  content = removeAlignProperty(content);
  content = formatCallout(content);
  content = embedYouTubeLink(content);
  return { metadata: metadata as Metadata, content };
}

function removeAlignProperty(markdown: string): string {
  const regex = /(!\[.*?\]\(.*?\s+align=".*?"\))/g;

  return markdown.replace(regex, (match) => {
    return match.replace(/\s+align=".*?"/, "");
  });
}

function formatCallout(markdown) {
  const calloutRegex =
    /<div data-node-type="callout">\s*<div data-node-type="callout-emoji">(.*?)<\/div>\s*<div data-node-type="callout-text">([\s\S]*?)<\/div>\s*<\/div>/g;

  return markdown.replace(calloutRegex, (match) => {
    const emojiMatch = match.match(
      /<div data-node-type="callout-emoji">(.*?)<\/div>/,
    );
    const textMatch = match.match(
      /<div data-node-type="callout-text">([\s\S]*?)<\/div>/,
    );
    if (emojiMatch && textMatch) {
      const emoji = emojiMatch[1].trim();
      const text = textMatch[1].trim();
      return `<Callout emoji="${emoji}">${text}</Callout>`;
    }

    return match;
  });
}

function embedYouTubeLink(content: string) {
  const youtubeRegex = /%?\[?https?:\/\/(?:www\.)?youtu\.?be\/([\w-]{11})\]?/g;

  return content.replace(youtubeRegex, (match) => {
    const videoIdMatch = match.match(/(?:youtu\.?be\/)([\w-]{11})/);
    if (videoIdMatch) {
      const videoId = videoIdMatch[1];
      return `<YouTubeEmbed videoid="${videoId}" params="controls=0" />`;
    }
    return match;
  });
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function searchBlogPosts(query: string) {
  const blogPosts = getBlogPosts();
  const filteredPosts = blogPosts.filter((post) => {
    return post.metadata.title.toLowerCase().includes(query.toLowerCase());
  });

  return filteredPosts;
}

export function formatDate(date: string, includeRelative = true) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
