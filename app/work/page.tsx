import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "../components/tooltip-wrapper";
import Gabriel from "../testimonials/assets/Gabriel.png";
import Julia from "../testimonials/assets/Julia.png";
import Saurav from "../testimonials/assets/Saurav.png";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

const highlights = [
  {
    image: Gabriel,
    name: "Gabriel L. Manor",
    role: "Director of DevRel, Permit.io",
    quote:
      "We've been working with Arindam on multiple content pieces… his work is astonishing. So far, 10/10 experience!",
  },
  {
    image: Julia,
    name: "Julia Machado",
    role: "Founder & CEO, Webcrumbs",
    quote:
      "Arindam gave us a masterclass on how to launch on Product Hunt… Write great technical texts that reach an impressive audience.",
  },
  {
    image: Saurav,
    name: "Saurav Jain",
    role: "DevRel, Apify",
    quote:
      "Arindam and his team work really great with technical posts… deeply technical articles that reach the right developer audiences.",
  },
];

function favicon(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function CompanyChip({
  name,
  href,
  domain,
  logo,
}: {
  name: string;
  href: string;
  domain?: string;
  logo?: string;
}) {
  const src = logo ?? favicon(domain ?? new URL(href).hostname);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-0.5 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-1.5 py-0.5 align-baseline text-sm font-medium text-neutral-800 no-underline shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
    >
      <Image
        src={src}
        alt=""
        width={16}
        height={16}
        className="size-4 rounded-sm object-contain"
        unoptimized={src.includes("google.com/s2/favicons")}
      />
      <span>{name}</span>
    </a>
  );
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">My Work</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I&apos;ve worked across developer advocacy, AI engineering, and
          technical writing with startups, DevTools companies, and enterprise
          teams. Here&apos;s a summary of my work so far.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Studio1 */}
        <h2 className="text-xl font-medium tracking-tighter">Studio1</h2>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          Cofounder, 2024–Present
        </p>
        <p className="mb-2">
          At{" "}
          <Tooltip text="Studio1 is a technical content and developer advocacy agency helping startups, SaaS, and DevTool companies scale with developer-focused strategies.">
            <a
              href="https://studio1hq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Studio1
            </a>
          </Tooltip>
          , I&apos;ve led the growth of a specialized agency serving
          developer-centric companies. Here&apos;s what we&apos;ve accomplished:
        </p>
        <ul className="mb-4">
          <li>
            Partnered with 30+ startups, including YC-backed and NASDAQ-listed
            companies.
          </li>
          <li>Scaled to $100K+ revenue in the first year.</li>
          <li>Built and led a distributed team of engineers and writers.</li>
          <li>Delivered developer content with 65%+ client retention.</li>
          <li>Helped multiple products rank Top 3 on Product Hunt.</li>
          <li>
            Improved DX through better docs, tutorials, onboarding flows, and
            SEO for developer intent.
          </li>
          <li>Supported open-source projects and community initiatives.</li>
        </ul>

        <div className="not-prose mb-2 space-y-2">
          <div className="rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-base font-medium tracking-tight">
              Content creation & docs
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              <li>
                Shipped blogs, SDK guides, AI demos, and docs systems for{" "}
                <CompanyChip
                  name="Permit.io"
                  href="https://dub.sh/permit"
                  logo="/company-logos/permit.svg"
                />
                ,{" "}
                <CompanyChip
                  name="Bright Data"
                  href="https://dub.sh/brightdata"
                  logo="/company-logos/brightdata.png"
                />
                ,{" "}
                <CompanyChip
                  name="LiteLLM"
                  href="https://github.com/BerriAI/litellm"
                  domain="litellm.ai"
                />
                ,{" "}
                <CompanyChip
                  name="ForgeCode"
                  href="https://forgecode.dev"
                  domain="forgecode.dev"
                />
                ,{" "}
                <CompanyChip
                  name="Arcjet"
                  href="https://arcjet.com"
                  logo="/company-logos/arcjet.svg"
                />
                , and others.
              </li>
              <li>
                Led a full{" "}
                <CompanyChip
                  name="LiteLLM"
                  href="https://github.com/BerriAI/litellm"
                  domain="litellm.ai"
                />{" "}
                docs revamp across Learn, SDK, and Gateway paths.
              </li>
            </ul>
          </div>

          <div className="rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-base font-medium tracking-tight">
              Developer advocacy
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              <li>
                Helping scale adoption for{" "}
                <CompanyChip
                  name="Nebius Token Factory"
                  href="https://dub.sh/nebius"
                  domain="tokenfactory.nebius.com"
                />
                , and{" "}
                <CompanyChip
                  name="Jozu"
                  href="https://dub.sh/jozu-ml"
                  domain="jozu.com"
                />{" "}
                through demos, docs, and onboarding.
              </li>
            </ul>
          </div>

          <div className="rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-base font-medium tracking-tight">
              Product launch
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              <li>
                Supported Product Hunt launches for{" "}
                <CompanyChip
                  name="Permit.io"
                  href="https://dub.sh/permit"
                  logo="/company-logos/permit.svg"
                />{" "}
                and{" "}
                <CompanyChip
                  name="Webcrumbs"
                  href="https://dub.sh/webcrumbs"
                  domain="webcrumbs.ai"
                />{" "}
                with tutorials, demos, and launch content.
              </li>
              <li>
                Ran multi-channel growth for{" "}
                <CompanyChip
                  name="ScrapeGraph"
                  href="https://dub.sh/scrapegraph"
                  logo="/company-logos/scrapegraph.png"
                />{" "}
                with agent demos and product feedback.
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Pieces */}
        <h2 className="text-xl font-medium tracking-tighter">
          Pieces for Developers
        </h2>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          Developer Advocate, 2024
        </p>
        <p className="mb-2">
          At{" "}
          <span className="not-prose">
            <CompanyChip
              name="Pieces"
              href="https://pieces.app/"
              logo="/company-logos/pieces.png"
            />
          </span>
          , I was instrumental in driving community engagement and product
          adoption. My contributions include:
        </p>
        <ul className="mb-2">
          <li>
            Developed a CLI tool &quot;
            <Tooltip text="pieces-cli is a command-line interface that helps developers interact with the Pieces SDK.">
              <a
                href="https://www.npmjs.com/package/pieces-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                pieces-cli
              </a>
            </Tooltip>
            &quot; using the Pieces SDK.
          </li>
          <li>
            <Tooltip text="We received 900+ upvotes, 250+ feedbacks, 8k+ website visits, 1k+ downloads, and also became #4 for the week.">
              Contributed to Pieces becoming the{" "}
              <a
                href="https://www.producthunt.com/posts/pieces-copilot-2"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Product Hunt Product of the Day
              </a>
            </Tooltip>
            .
          </li>
          <li>
            Created a &quot;
            <Tooltip text="This is a Sample Nextjs Chatbot with the integration of Pieces npm package.">
              <a
                href="https://github.com/Arindam200/example-Nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Pieces × Next.js Chatbot
              </a>
            </Tooltip>
            &quot; leveraging the Pieces SDK.
          </li>
          <li>
            Authored educational articles detailing the development process and
            usage of these tools.
          </li>
          <li>
            Improved the{" "}
            <Tooltip text="I created Glossary and improved the SDK documentations to improve Developer Experience">
              <a
                href="https://docs.pieces.app/build/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                SDK documentation
              </a>
            </Tooltip>{" "}
            to make it more accessible and user-friendly.
          </li>
          <li>Maintained and contributed to their open-source project.</li>
          <li>
            Hosted numerous sessions and events to engage with the developer
            community.
          </li>
        </ul>
        <p>
          Through these efforts, I significantly enhanced the visibility and
          usability of Pieces for Developers&apos; tools, fostering a vibrant
          and engaged community.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Keploy */}
        <h2 className="text-xl font-medium tracking-tighter">Keploy</h2>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          DevRel Engineer Intern, 2023–2024
        </p>
        <p className="mb-2">
          During my tenure at{" "}
          <span className="not-prose">
            <CompanyChip
              name="Keploy"
              href="https://keploy.io/"
              logo="/company-logos/keploy.png"
            />
          </span>
          , I played a key role in various initiatives. My responsibilities
          included:
        </p>
        <ul className="mb-2">
          <li>
            Authored{" "}
            <a
              href="https://keploy.io/blog/authors/Arindam"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              technical articles
            </a>{" "}
            to educate and inform the community.
          </li>
          <li>
            Helped host events such as{" "}
            <Tooltip text="GitTogether is an in-person Open Source Event hosted by Keploy on 29 February 2024 at Google RMZ, Bengaluru.">
              <a
                href="https://keploy.io/gittogether"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitTogether
              </a>
            </Tooltip>{" "}
            to foster collaboration and knowledge sharing.
          </li>
          <li>
            Managed and contributed to their{" "}
            <Tooltip text="I managed Keploy's Blog Site, sample applications, Created Good First Issues and reviewed PRs.">
              <a
                href="https://github.com/keploy/keploy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                open-source projects
              </a>
            </Tooltip>
            .
          </li>
          <li>Delivered demos of Keploy to showcase its capabilities.</li>
          <li>
            Expanded and engaged the Slack community, making it a hub for active
            discussions and support.
          </li>
        </ul>
        <p>
          My work at Keploy not only helped in expanding the community but also
          in establishing a strong foundation for future growth and
          collaboration.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Showwcase */}
        <h2 className="text-xl font-medium tracking-tighter">Showwcase</h2>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          Chief Creative Officer, 2022–2023
        </p>
        <p className="mb-2">
          At{" "}
          <span className="not-prose">
            <CompanyChip
              name="Showwcase"
              href="https://www.showwcase.com/"
              logo="/company-logos/showwcase.png"
            />
          </span>
          , I was pivotal in enhancing community engagement and content quality.
          My contributions included:
        </p>
        <ul className="mb-2">
          <li>
            Assisted in hosting a hackathon &quot;
            <Tooltip text="Showwcase HackFest is a 4 week long virtual hackathon organized by Showwcase, aimed at driving innovation and collaboration.">
              <a
                href="https://www.showwcase.com/article/34719/introducing-showwcase-hackfest-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                HackFest
              </a>
            </Tooltip>
            &quot;, driving innovation and collaboration.
          </li>
          <li>
            Organized multiple events in collaboration with various communities,
            such as &quot;
            <Tooltip text="Blog-a-Thon is a monthlong community-driven initiative by Showwcase in collaboration with GrowInCommunity to encourage content creation and sharing.">
              <a
                href="https://x.com/GrowInComm/status/1665233663645347841"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Blog-a-Thon
              </a>
            </Tooltip>
            &quot;.
          </li>
          <li>
            Contributed to improving the quality and reach of their content.
          </li>
        </ul>
        <p>
          These initiatives significantly boosted Showwcase&apos;s community
          presence and content impact, setting a new standard for engagement and
          quality.
        </p>
      </div>

      <hr className="my-8 border-neutral-100 dark:border-neutral-800" />

      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-xl font-medium tracking-tighter">
          What partners say
        </h2>
        <Link
          href="/testimonials"
          className="text-sm underline underline-offset-2"
        >
          More testimonials →
        </Link>
      </div>
      <div className="space-y-3">
        {highlights.map((item) => (
          <blockquote
            key={item.name}
            className="rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              “{item.quote}”
            </p>
            <footer className="mt-3 flex items-center gap-2.5">
              <Image
                src={item.image}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {item.role}
                </p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      <hr className="my-8 border-neutral-100 dark:border-neutral-800" />

      <p className="text-[15px] leading-7 text-neutral-600 dark:text-neutral-400">
        Want to work together?{" "}
        <Link href="/agency" className="underline underline-offset-2">
          Learn about Studio1
        </Link>{" "}
        or{" "}
        <Link href="/contact-me" className="underline underline-offset-2">
          get in touch
        </Link>
        .
      </p>
    </section>
  );
}
