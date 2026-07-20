import type { Metadata } from "next";
import Image from "next/image";
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "app/components/icons";

export const metadata: Metadata = {
  title: "Collaborations",
  description:
    "Partner with Arindam Majumder on developer-first content for AI, SaaS, and DevTools audiences across YouTube, LinkedIn, X, and Instagram.",
};

const customers = [
  { name: "HeyGen", logo: "/customer-logos/heygen.png" },
  { name: "CodeRabbit", logo: "/customer-logos/coderabbit.png" },
  { name: "Graphite", logo: "/customer-logos/graphite.png" },
  { name: "MiniMax", logo: "/customer-logos/minimax.png" },
  { name: "Cline", logo: "/customer-logos/cline.png" },
  { name: "ScrapeGraphAI", logo: "/customer-logos/scrapegraphai.png" },
  { name: "Bright Data", logo: "/customer-logos/brightdata.png" },
  { name: "SerpApi", logo: "/customer-logos/serpapi.png" },
  { name: "TestSprite", logo: "/customer-logos/testsprite.png" },
  { name: "APILayer", logo: "/customer-logos/apilayer.png" },
  { name: "Airtap", logo: "/customer-logos/airtap.png" },
  { name: "EverOS", logo: "/customer-logos/everos.png" },
];

const emailHref =
  "mailto:arindammajumder2020@gmail.com?subject=Collaboration%20inquiry";

export default function CollaborationsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Collaborations
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I work with AI, SaaS, and DevTools companies to create practical
          content for developers and people building with AI. I publish
          hands-on tutorials and product stories across{" "}
          <a
            href="https://ggl.link/arindam-youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            YouTube
          </a>
          ,{" "}
          <a
            href="https://dub.sh/arindam-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://dub.sh/arindam-x"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            X (Twitter)
          </a>
          , and{" "}
          <a
            href="https://www.instagram.com/arindam.1729/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Instagram
          </a>
          .
        </p>
        <p>
          I don&apos;t publish generic ads. I use the product, find a useful
          story, and create original content that shows my audience what the
          product does and why it matters.
        </p>
        <ul>
          <li>
            11K+ followers on{" "}
            <a
              href="https://dub.sh/arindam-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            150K+ views on{" "}
            <a
              href="https://ggl.link/arindam-youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              YouTube
            </a>
          </li>
          <li>1M+ blog views across platforms</li>
          <li>95+ practical AI and agent demos built</li>
        </ul>

        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />

        <h2>Ways to collaborate</h2>
        <p>
          Every package includes product research, an original angle, and
          content made specifically for the platform where it appears.
        </p>
      </div>

      <div className="mt-6">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="flex min-h-[23rem] flex-col border border-neutral-200 p-5 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="flex shrink-0 items-center gap-1.5">
                <TwitterIcon />
                <LinkedInIcon />
              </span>
              <h3 className="font-medium">Social Post</h3>
            </div>
            <p className="mt-7 flex flex-wrap items-baseline gap-x-1 font-medium tracking-tight">
              <span className="text-3xl">$500</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                USD / 5 posts
              </span>
            </p>
            <p className="mt-6 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              I&apos;ll create five original posts and adapt them for X and
              LinkedIn.
            </p>
            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Want to start smaller? Single-post options start at $100.
            </p>
            <div className="mt-auto pt-8">
              <a
                href={emailHref}
                className="flex w-full items-center justify-center rounded bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
              >
                Get started
              </a>
            </div>
          </article>

          <article className="flex min-h-[23rem] flex-col border border-neutral-300 p-5 dark:border-neutral-700">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <YoutubeIcon />
                <h3 className="font-medium">YouTube</h3>
              </div>
              <span className="shrink-0 rounded bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                Most popular
              </span>
            </div>
            <p className="mt-7 text-3xl font-medium tracking-tight">
              $1,000{" "}
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                USD
              </span>
            </p>
            <p className="mt-6 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              I&apos;ll create a hands-on video showing your product in action.
            </p>
            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Includes your link, a pinned comment, and two promo posts across X
              and LinkedIn.
            </p>
            <div className="mt-auto pt-8">
              <a
                href={emailHref}
                className="flex w-full items-center justify-center rounded bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
              >
                Get started
              </a>
            </div>
          </article>

          <article className="flex min-h-[23rem] flex-col border border-neutral-200 p-5 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <InstagramIcon />
              <h3 className="font-medium">Instagram Reels</h3>
            </div>
            <p className="mt-7 flex flex-wrap items-baseline gap-x-1 font-medium tracking-tight">
              <span className="text-3xl">$350</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                USD / 5 Reels
              </span>
            </p>
            <p className="mt-6 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              I&apos;ll create five short Reels that bring your product to life
              through demos, use cases, or feature highlights.
            </p>
            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Want to try one first? A single Reel is available for $100.
            </p>
            <div className="mt-auto pt-8">
              <a
                href={emailHref}
                className="flex w-full items-center justify-center rounded bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
              >
                Get started
              </a>
            </div>
          </article>
        </div>

        <article className="mt-3 border border-neutral-200 p-5 dark:border-neutral-800">
          <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_auto]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">Complete package</h3>
                <span className="rounded bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  Best value
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Five posts across X and LinkedIn, one dedicated YouTube video,
                and two dedicated Reels.
              </p>
            </div>
            <p className="text-2xl font-medium tracking-tight">
              $1,500{" "}
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                USD
              </span>
            </p>
            <a
              href={emailHref}
              className="flex items-center justify-center rounded bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
            >
              Get started
            </a>
          </div>
        </article>
      </div>

      <div className="prose prose-neutral mt-10 dark:prose-invert">
        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
        <h2>Previous customers</h2>
        <p>
          Some of the companies I&apos;ve created content and developer
          education for:
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {customers.map((customer) => (
          <div
            key={customer.name}
            className="flex min-h-16 items-center gap-3 rounded border border-neutral-200 bg-neutral-50 px-3 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded bg-white p-1 dark:bg-neutral-800">
              <Image
                src={customer.logo}
                alt=""
                width={24}
                height={24}
                className="size-6 object-contain"
              />
            </div>
            <span className="text-sm font-medium">{customer.name}</span>
          </div>
        ))}
      </div>

      <div className="prose prose-neutral mt-10 dark:prose-invert">
        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
        <h2>What to expect</h2>
        <p>
          If your product is a good fit, I&apos;ll learn how it works and
          propose the strongest content angle. You can review technical details
          for accuracy before the content is published.
        </p>
        <p>
          Prices are in USD. Final scope, timeline, and pricing are confirmed
          before work begins. Custom and recurring packages are also available.
        </p>

        <h2>Let&apos;s work together</h2>
        <p>
          Send me your product, preferred platforms, goals, and ideal timeline
          at{" "}
          <a href={emailHref} className="underline">
            arindammajumder2020@gmail.com
          </a>
          . You can also find all my profiles on{" "}
          <a
            href="https://linktr.ee/arindam_1729"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Linktree
          </a>
          .
        </p>
      </div>
    </section>
  );
}
