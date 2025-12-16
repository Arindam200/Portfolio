import { Link } from "next-view-transitions";
import Image from "next/image";
import Studio1Logo from "../assets/Studio1.png";
import ab from "./testimonials/assets/Arindam.png";
import {
  TwitterIcon,
  GitHubIcon,
  ViewsIcon,
  DevToIcon,
  YoutubeIcon,
  LinkedInIcon,
  HashnodeIconGrey,
} from "./components/icons";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

function SocialLink({ href, ariaLabel, children }: SocialLinkProps) {
  return (
    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-6 py-4 transition-all hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Arindam 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I’m a developer advocate, AI engineer, and technical writer. I’m the co-founder of `}
        <span className="not-prose">
          <Link
            href="/agency"
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          >
            <Image
              src={Studio1Logo.src}
              alt="Studio1 Logo"
              width={14}
              height={14}
              className="!mr-1 rounded-md"
            />
            Studio1
          </Link>
        </span>
        , where we help SaaS, DevTools, AI startups, and Enterprises with
        technical content, AI demos, and developer advocacy.
      </p>
      <div className="flex items-start md:items-center my-8 gap-2 flex-row md:flex-row">
        <Image
          src={ab}
          alt="Arindam's image"
          width={120}
          height={120}
          className="rounded-full max-sm:w-24 max-sm:h-24"
        />
        <div className="mt-2 sm:mt-6 md:mt-0 ml-0 md:ml-6 space-y-1 text-neutral-500 dark:text-neutral-400">
          <p className="flex items-center gap-2">
            <span>
              <GitHubIcon />
            </span>
            75+ Agentic Examples built
          </p>
          <p className="flex items-center gap-2">
            <span>
              <HashnodeIconGrey />
            </span>
            100+ blog posts all time
          </p>
          <p className="flex items-center">
            <span>
              <ViewsIcon />
            </span>
            1M+ blog views across platforms
          </p>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My work focuses on making fast moving AI systems easier to understand
          and easier to build with. I create hands on{" "}
          <a
            href="https://ggl.link/arindam-youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            YouTube tutorials
          </a>{" "}
          around AI agents and modern web tooling. I contribute to open source
          and was featured in the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/blog/next-15-rc"
            className="underline"
          >
            Next.js 15 RC release blog
          </a>{" "}
        </p>
        <p>
          I also help teams with developer education, content systems, and
          advocacy strategy.{" "}
          <Link href="/agency" className="underline">
            Reach out
          </Link>{" "}
          if that sounds useful. You can read my{" "}
          <a
            href="https://dub.sh/arindam-devto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            writing
          </a>
          , explore my{" "}
          <Link href="/videos" className="underline">
            demos
          </Link>
          , check out my{" "}
          <Link href="/events" className="underline">
            talks
          </Link>
          , or follow me online.
        </p>
      </div>
      <div className="my-8 flex h-12 w-full flex-row space-x-2 overflow-x-auto">
        <SocialLink href="https://git.new/Arindam" ariaLabel="GitHub Profile">
          <GitHubIcon />
        </SocialLink>
        <SocialLink href="https://dub.sh/arindam-x" ariaLabel="Twitter Profile">
          <TwitterIcon />
        </SocialLink>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-4 py-1 transition-all hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dub.sh/arindam-devto"
            aria-label="DevTo Blog"
          >
            <DevToIcon />
          </a>
        </div>
        <SocialLink
          href="https://dub.sh/arindam-linkedin"
          ariaLabel="LinkedIn Profile"
        >
          <LinkedInIcon />
        </SocialLink>
        <SocialLink
          href="https://ggl.link/arindam-youtube"
          ariaLabel="YouTube Channel"
        >
          <YoutubeIcon />
        </SocialLink>
      </div>
    </section>
  );
}
