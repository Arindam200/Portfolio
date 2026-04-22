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
}

const projects: Project[] = [
  {
    name: "Formaly",
    href: "https://www.formaly.io/",
    closedSource: true,
    description: "Forms that feel like conversations.",
  },
  {
    name: "awesome-ai-apps",
    href: "https://github.com/Arindam200/awesome-ai-apps",
    description:
      "A community collection of practical AI apps, agents, RAG examples, workflows, and MCP projects.",
  },
  {
    name: "termui",
    href: "https://github.com/Arindam200/termui",
    description:
      "TypeScript terminal UI framework for building beautiful terminal interfaces with components you actually own.",
  },
  {
    name: "cc-lens",
    href: "https://github.com/Arindam200/cc-lens",
    description: "Real-time monitoring dashboard for Claude Code.",
  },
  {
    name: "gitpack",
    href: "https://github.com/Arindam200/gitpack",
    description:
      "AI-powered Git packaging CLI for planning commits, drafting PRs, and tracking reviews from the terminal.",
  },
  {
    name: "reddit-mcp",
    href: "https://github.com/Arindam200/reddit-mcp",
    description:
      "Model Context Protocol server for Reddit search, analytics, and posting workflows.",
  },
  {
    name: "nebius-skills",
    href: "https://github.com/Arindam200/nebius-skills",
    description:
      "Installable agent skills for Claude and Nebius Token Factory workflows.",
  },
  {
    name: "logo-ai",
    href: "https://github.com/Arindam200/logo-ai",
    description: "AI-powered logo generator built with Next.js and Nebius AI.",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A collection of open source projects and products I've been building
          around AI agents, developer tools, and terminal UX.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="space-y-6 not-prose">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="flex items-baseline gap-2 flex-wrap">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-lg tracking-tight underline"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span className="font-medium text-lg tracking-tight">
                    {project.name}
                  </span>
                )}
                {project.closedSource && (
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    (closed source)
                  </span>
                )}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
