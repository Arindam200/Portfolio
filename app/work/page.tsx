import type { Metadata } from "next";
import Tooltip from "../components/tooltip-wrapper";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’ve worked across developer advocacy, AI engineering, and technical
          writing with startups, devtool companies, and enterprise teams. Here's
          a summary of my work so far.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter">Studio1</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Cofounder, 2024-Present
        </p>
        <p className="mb-2">
          At{" "}
          <Tooltip text="Studio1 is a technical content and developer advocacy agency helping startups, SaaS, and devtool companies scale with impactful developer-focused strategies.">
            <a
              href="https://studio1hq.com/"
              target="_blank"
              className="underline"
            >
              Studio1
            </a>
          </Tooltip>
          , I’ve led the growth of a specialized agency serving
          developer-centric companies. Here’s what we’ve accomplished:
        </p>
        <ul className="mb-2">
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
        <p>
          Studio1 has grown from a small freelancing venture into a trusted
          partner for some of the biggest names in the devtools and SaaS space.
          Our focus on quality and developer engagement continues to drive
          meaningful results.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter">
          Pieces for Developers
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Developer Advocate, 2024
        </p>
        <p className="mb-2">
          At{" "}
          <Tooltip text="Pieces is an on-device AI coding assistant that boosts developer productivity by helping you solve complex development tasks through a contextual understanding of your entire workflow. ">
            <a href="https://pieces.app/" target="_blank" className="underline">
              {" "}
              Pieces for Developers
            </a>{" "}
          </Tooltip>
          , I have been instrumental in driving community engagement and product
          adoption. My contributions include:
        </p>
        <ul className="mb-2">
          <li>
            Developed a CLI tool "
            <Tooltip text="pieces-cli is a command-line interface that helps developers interact with the Pieces SDK.">
              <a
                href="https://www.npmjs.com/package/pieces-cli"
                target="_blank"
                className="underline"
              >
                pieces-cli
              </a>
            </Tooltip>
            " using the Pieces SDK.
          </li>
          <li>
            <Tooltip text="We received 900+ upvotes, 250+ feedbacks, 8k+ website visits, 1k+ downloads, and also became #4 for the week.">
              Contributed to Pieces becoming the{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.producthunt.com/posts/pieces-copilot-2"
              >
                {" "}
                Product Hunt Product of the Day{" "}
              </a>{" "}
              .
            </Tooltip>
          </li>
          <li>
            Created a "
            <Tooltip text="This is a Sample Nextjs Chatbot with the integration of Pieces npm package.">
              <a
                href="https://github.com/Arindam200/example-Nextjs"
                target="_blank"
                className="underline"
              >
                Pieces x Nextjs Chatbot
              </a>
            </Tooltip>
            " leveraging the Pieces SDK.
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
          Through these efforts, I have significantly enhanced the visibility
          and usability of Pieces for Developers' tools, fostering a vibrant and
          engaged community.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Keploy</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          DevRel Engineer Intern, 2023-2024
        </p>
        <p className="mb-2">
          During my tenure at Keploy, I played a key role in various
          initiatives. My responsibilities included:
        </p>
        <ul className="mb-2">
          <li>
            Authored{" "}
            <a
              href="https://keploy.io/blog/authors/Arindam"
              target="_blank"
              className="underline"
            >
              {" "}
              technical articles
            </a>{" "}
            to educate and inform the community.
          </li>
          <li>
            Helped in Hosting events such as{" "}
            <Tooltip text="GitTogether is an in-person Open Source Event hosted by Keploy on 29 February 2024 at Google RMZ, Bengaluru.">
              <a
                href="https://keploy.io/gittogether"
                target="_blank"
                className="underline"
              >
                {" "}
                "GitTogether"
              </a>{" "}
            </Tooltip>
            to foster collaboration and knowledge sharing.
          </li>
          <li>
            Managed and contributed to their{" "}
            <Tooltip text="I managed Keploy's Blog Site, sample applications, Created Good First Issues and reviewd PRs.">
              <a
                href="https://github.com/keploy/keploy"
                target="_blank"
                className="underline"
              >
                Open-source projects
              </a>
            </Tooltip>{" "}
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

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Showwcase</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Chief Creative Officer, 2022-2023
        </p>
        <p className="mb-2">
          At Showwcase, I was pivotal in enhancing community engagement and
          content quality. My contributions included:
        </p>
        <ul className="mb-2">
          <li>
            Assisted in hosting a hackathon "
            <Tooltip text="Showwcase Hackfest is a 4 week long virtual hackathon organized by Showwcase, aimed at driving innovation and collaboration.">
              <a
                className="underline"
                target="_blank"
                href="https://www.showwcase.com/article/34719/introducing-showwcase-hackfest-2023"
              >
                HackFest
              </a>
            </Tooltip>
            ", driving innovation and collaboration.
          </li>
          <li>
            Organized multiple events in collaboration with various communities,
            such as "
            <Tooltip text="Blog-a-Thon is a monthlong community-driven initiative by Showwcase in collaboration with GrowInCommunity to encourage content creation and sharing.">
              <a
                className="underline"
                target="_blank"
                href="https://x.com/GrowInComm/status/1665233663645347841"
              >
                Blog-a-Thon
              </a>
            </Tooltip>
            ".
          </li>
          <li>
            Contributed to improving the quality and reach of their content.
          </li>
        </ul>
        <p>
          These initiatives significantly boosted Showwcase's community presence
          and content impact, setting a new standard for engagement and quality.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Other Works (Part of Studio1)
        </h2>

        <h3 className="font-medium text-lg mb-1 tracking-tighter mt-4">
          Technical Content
        </h3>
        <p className="mb-2">
          I work with AI, DevTools, and SaaS teams to ship technical content
          that developers actually use.
        </p>
        <p className="mb-2">This includes:</p>
        <ul className="mb-2">
          <li>Technical blogs, deep dives, and SDK guides</li>
          <li>AI demos and agentic examples</li>
          <li>Documentation and content system management</li>
        </ul>
        <p className="mb-4">
          I've handled end to end technical content for teams like{" "}
          <a href="https://dub.sh/permit" target="_blank" className="underline">
            Permit.io
          </a>
          ,{" "}
          <a
            href="https://dub.sh/brightdata"
            target="_blank"
            className="underline"
          >
            BrightData
          </a>
          ,{" "}
          <a
            href="https://dub.sh/tensorlake"
            target="_blank"
            className="underline"
          >
            Tensorlake
          </a>
          , Apify, Tolgee, ForgeCode, Webcrumbs, Arcjet, LambdaTest,
          Entelligence and others.
        </p>
        <p className="mb-2">
          I've also supported Product Hunt launches for products like{" "}
          <a href="https://dub.sh/permit" target="_blank" className="underline">
            Permit
          </a>{" "}
          and Webcrumbs by creating launch-ready tutorials, demos, and docs that
          drive early adoption and organic traffic.
        </p>

        <h3 className="font-medium text-lg mb-1 tracking-tighter mt-4">
          Developer Relations
        </h3>
        <p className="mb-2">
          I help teams turn products into ecosystems developers want to build
          on.
        </p>
        <p className="mb-2">This includes:</p>
        <ul className="mb-2">
          <li>Building real-world demo projects and agentic workflows</li>
          <li>Developer onboarding and documentation flows</li>
          <li>Events, workshops, and community programs</li>
        </ul>
        <p className="mb-4">
          I currently help scale developer adoption for{" "}
          <a href="https://dub.sh/nebius" target="_blank" className="underline">
            Nebius Token Factory
          </a>
          ,{" "}
          <a
            href="https://dub.sh/memorilabs"
            target="_blank"
            className="underline"
          >
            MemoriLabs
          </a>
          ,{" "}
          <a
            href="https://dub.sh/ittybit"
            target="_blank"
            className="underline"
          >
            Ittybit
          </a>
          , and{" "}
          <a
            href="https://dub.sh/jozu-ml"
            target="_blank"
            className="underline"
          >
            Jozu
          </a>
          .
        </p>
        <p className="mb-2">
          This work spans technical content, community management, developer
          onboarding, documentation, and ongoing DevRel strategy.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <p>
        Overall, my journey across these roles has been marked by a consistent
        drive to enhance community engagement, foster collaboration, and deliver
        impactful contributions.
      </p>
    </section>
  );
}
