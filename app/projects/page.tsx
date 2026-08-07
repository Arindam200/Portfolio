import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and products I've been building.",
};

interface Project {
  name: string;
  href?: string;
  closedSource?: boolean;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Formaly",
    href: "https://www.formaly.io/",
    closedSource: true,
    description: "Forms that feel like conversations.",
    tags: ["Product", "AI"],
  },
  {
    name: "awesome-ai-apps",
    href: "https://github.com/Arindam200/awesome-ai-apps",
    description:
      "A community collection of practical AI apps, agents, RAG examples, workflows, and MCP projects.",
    tags: ["Open source", "Agents"],
  },
  {
    name: "termui",
    href: "https://github.com/Arindam200/termui",
    description:
      "TypeScript terminal UI framework for building beautiful terminal interfaces with components you actually own.",
    tags: ["TypeScript", "TUI"],
  },
  {
    name: "cc-lens",
    href: "https://github.com/Arindam200/cc-lens",
    description: "Real-time monitoring dashboard for Claude Code.",
    tags: ["Claude", "Dashboard"],
  },
  {
    name: "gitpack",
    href: "https://github.com/Arindam200/gitpack",
    description:
      "AI-powered Git packaging CLI for planning commits, drafting PRs, and tracking reviews from the terminal.",
    tags: ["CLI", "Git"],
  },
  {
    name: "reddit-mcp",
    href: "https://github.com/Arindam200/reddit-mcp",
    description:
      "Model Context Protocol server for Reddit search, analytics, and posting workflows.",
    tags: ["MCP", "Reddit"],
  },
  {
    name: "nebius-skills",
    href: "https://github.com/Arindam200/nebius-skills",
    description:
      "Installable agent skills for Claude and Nebius Token Factory workflows.",
    tags: ["Skills", "Nebius"],
  },
  {
    name: "logo-ai",
    href: "https://github.com/Arindam200/logo-ai",
    description: "AI-powered logo generator built with Next.js and Nebius AI.",
    tags: ["Next.js", "AI"],
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A collection of open source projects and products I&apos;ve been
          building around AI agents, developer tools, and terminal UX.
        </p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium tracking-tight underline underline-offset-2"
                >
                  {project.name}
                </a>
              ) : (
                <span className="text-lg font-medium tracking-tight">
                  {project.name}
                </span>
              )}
              {project.closedSource && (
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  (closed source)
                </span>
              )}
            </div>
            <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-neutral-200 px-1.5 py-0.5 text-[11px] text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
