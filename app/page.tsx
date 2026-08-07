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
  InstagramIcon,
  SubstackIcon,
} from "./components/icons";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

function SocialLink({ href, ariaLabel, children }: SocialLinkProps) {
  return (
    <a
      className="flex h-12 w-[4.5rem] flex-none items-center justify-center rounded border border-neutral-200 bg-neutral-50 transition-all hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Arindam 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm an AI engineer and developer advocate who turns fast-moving AI ideas into practical tools, tutorials, and demos. I co-founded `}
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
              className="!mr-1 rounded-[3px]"
            />
            Studio1
          </Link>
        </span>
        , where we help SaaS, DevTools, and AI startups with technical content,
        agent demos, and developer advocacy.
      </p>

      <div className="my-8 flex flex-row items-start gap-2 md:items-center">
        <Image
          src={ab}
          alt="Arindam's image"
          width={120}
          height={120}
          className="size-[120px] shrink-0 rounded-full object-cover max-sm:size-24"
        />
        <div className="ml-0 mt-2 grid min-w-0 gap-y-2 text-sm text-neutral-500 sm:text-base md:ml-6 md:mt-0 dark:text-neutral-400">
          <p className="flex min-h-5 items-center gap-2 leading-5">
            <span className="flex size-5 shrink-0 items-center justify-center">
              <GitHubIcon />
            </span>
            100+ Agentic Examples built
          </p>
          <p className="flex min-h-5 items-center gap-2 leading-5">
            <span className="flex size-5 shrink-0 items-center justify-center">
              <YoutubeIcon />
            </span>
            150K+ views on YouTube
          </p>
          <p className="flex min-h-5 items-center gap-2 leading-5">
            <span className="flex size-5 shrink-0 items-center justify-center">
              <ViewsIcon />
            </span>
            1M+ blog views across platforms
          </p>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          AI moves quickly; I make it practical. I create hands-on{" "}
          <a
            href="https://ggl.link/arindam-youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            YouTube tutorials
          </a>
          , and build in the open. I shipped{" "}
          <a
            href="https://www.formaly.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Formaly
          </a>
          , a SaaS for conversational forms, alongside open source projects like{" "}
          <a
            href="https://github.com/Arindam200/awesome-ai-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            awesome-ai-apps
          </a>{" "}
          (13K+ stars),{" "}
          <a
            href="https://github.com/Arindam200/cc-lens"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CC-Lens
          </a>{" "}
          for real-time Claude Code monitoring, and{" "}
          <a
            href="https://github.com/Arindam200/termui"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            termui
          </a>
          .
        </p>
        <p>
          Through Studio1, I help AI, SaaS, and DevTools teams earn developer
          trust through clear docs, technical content, launches, and developer
          education. I also help shape developer advocacy strategies that turn
          interest into lasting adoption.{" "}
          <Link href="/work" className="underline">
            See my work
          </Link>{" "}
          or{" "}
          <Link href="/agency" className="underline">
            reach out
          </Link>{" "}
          if that sounds useful.
        </p>
        <p>
          You can read my{" "}
          <Link href="/blog" className="underline">
            writing
          </Link>
          , explore my{" "}
          <Link href="/videos" className="underline">
            demos
          </Link>
          , browse my{" "}
          <Link href="/projects" className="underline">
            projects
          </Link>
          , check out my{" "}
          <Link href="/events" className="underline">
            talks
          </Link>
          , or follow me online.
        </p>
      </div>

      <div className="my-6 flex w-full flex-row flex-wrap gap-2">
        <SocialLink href="https://git.new/Arindam" ariaLabel="GitHub Profile">
          <GitHubIcon />
        </SocialLink>
        <SocialLink href="https://dub.sh/arindam-x" ariaLabel="Twitter Profile">
          <TwitterIcon />
        </SocialLink>
        <SocialLink href="https://dub.sh/arindam-devto" ariaLabel="DevTo Blog">
          <DevToIcon />
        </SocialLink>
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
        <SocialLink
          href="https://arindam1729.substack.com/"
          ariaLabel="Substack Newsletter"
        >
          <SubstackIcon />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/arindam.1729/"
          ariaLabel="Instagram Profile"
        >
          <InstagramIcon />
        </SocialLink>
      </div>
    </section>
  );
}
