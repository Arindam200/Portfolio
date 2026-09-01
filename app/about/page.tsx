import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Arindam Majumder, an AI engineer, developer advocate, and technical writer.",
};

export default function AboutPage() {
  return (
    <section className="prose prose-neutral dark:prose-invert">
      <h1>About Arindam Majumder</h1>
      <p>
        I&apos;m Arindam Majumder, an AI engineer, developer advocate, and
        technical writer. I make fast-moving AI ideas concrete: useful tools,
        clear documentation, hands-on tutorials, and demonstrations that help
        developers decide what to build next. My work sits at the intersection
        of product, engineering, education, and community.
      </p>
      <p>
        I co-founded Studio1, where we partner with AI, SaaS, and DevTools
        companies on technical content, developer advocacy, product launches,
        and developer education. We focus on the work that earns developer
        trust: explaining the hard parts accurately, showing real workflows,
        and creating examples people can adapt to their own products.
      </p>
      <p>
        I also build in the open. My projects include agentic examples,
        developer tools, and open-source resources; my writing and videos turn
        those lessons into practical guidance. Explore my <Link href="/work">client work</Link>,
        {" "}<Link href="/projects">projects</Link>, <Link href="/blog">writing</Link>, and{" "}
        <Link href="/videos">videos</Link> for the most useful starting
        points. For an engagement, speaking invitation, or collaboration,
        visit the <Link href="/contact">contact page</Link>.
      </p>
    </section>
  );
}
