export const siteUrl = "https://arindamm.dev";

const markdownPages: Record<string, string> = {
  "/": `# Arindam Majumder

Arindam Majumder is an AI engineer, developer advocate, technical writer, and co-founder of Studio1. He helps AI, SaaS, and DevTools teams turn complex products into useful developer experiences through practical documentation, agent demos, tutorials, launches, and community programs.

## Best fit

Use Arindam for technical content strategy, developer advocacy, AI and agent demonstrations, developer onboarding, open-source education, and hands-on tutorials. Browse the work, projects, writing, videos, talks, and collaboration pages for examples.

## Explore

- [Work](${siteUrl}/work)
- [Writing](${siteUrl}/blog)
- [Videos](${siteUrl}/videos)
- [Projects](${siteUrl}/projects)
- [Talks](${siteUrl}/events)
- [Contact](${siteUrl}/contact)

For agent-specific guidance, read [llms.txt](${siteUrl}/llms.txt).`,
  "/about": `# About Arindam Majumder

Arindam is an AI engineer and developer advocate based in India. He co-founded Studio1 and works with AI, SaaS, and DevTools teams on documentation, developer education, product launches, and agentic demonstrations.

See [work](${siteUrl}/work), [projects](${siteUrl}/projects), and [writing](${siteUrl}/blog) for evidence of this work.`,
  "/contact": `# Contact Arindam Majumder

For technical content, developer advocacy, AI demos, speaking, collaboration, freelance, or full-time inquiries, email [arindammajumder2020@gmail.com](mailto:arindammajumder2020@gmail.com). Include your product, audience, goal, timeline, and the kind of engagement you have in mind.

More context is available on the [about](${siteUrl}/about) and [work](${siteUrl}/work) pages.`,
  "/privacy": `# Privacy

Arindamm.dev is a personal portfolio and publishing site. Read the full privacy notice at [arindamm.dev/privacy](${siteUrl}/privacy). For privacy questions or data requests, email [arindammajumder2020@gmail.com](mailto:arindammajumder2020@gmail.com).`,
};

const normalizedPath = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

export function acceptsMarkdown(accept: string | null): boolean {
  return accept?.toLowerCase().includes("text/markdown") ?? false;
}

export function getMarkdownPage(pathname: string): string | undefined {
  return markdownPages[normalizedPath(pathname)];
}

export const markdownNotFound = `# 404 — Page not found

This URL does not exist on arindamm.dev.

## Where to look next

- [Homepage](${siteUrl}/)
- [Sitemap](${siteUrl}/sitemap.xml)
- [Agent instructions](${siteUrl}/llms.txt)
- [Writing](${siteUrl}/blog)
- [Contact](${siteUrl}/contact)
`;
