import type { Metadata } from "next";

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
          I've worked for multiple companies as a DevRel Engineer, Developer
          Advocate, and Technical Writer. Here's a summary of my work so far.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter">
          Pieces for Developers
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Developer Advocate, 2024-Present
        </p>
        <p className="mb-2">
          At{" "}
          <a href="https://pieces.app/" target="_blank" className="underline">
            {" "}
            Pieces for Developers
          </a>{" "}
          , I have been instrumental in driving community engagement and product
          adoption. My contributions include:
        </p>
        <ul className="mb-2">
          <li>
            Developed a CLI tool "
            <a
              href="https://www.npmjs.com/package/pieces-cli"
              target="_blank"
              className="underline"
            >
              pieces-cli
            </a>
            " using the Pieces SDK.
          </li>
          <li>Created a Next.js chatbot leveraging the Pieces SDK.</li>
          <li>
            Authored educational articles detailing the development process and
            usage of these tools.
          </li>
          <li>
            Improved the SDK documentation to make it more accessible and
            user-friendly.
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
            <a
              href="https://keploy.io/gittogether"
              target="_blank"
              className="underline"
            >
              {" "}
              "GitTogether"
            </a>{" "}
            to foster collaboration and knowledge sharing.
          </li>
          <li>
            Managed and contributed to their{" "}
            <a
              href="https://github.com/keploy/keploy"
              target="_blank"
              className="underline"
            >
              Open-source projects
            </a>{" "}
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

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Permit.io</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Freelance Technical Writer, 2024-Present
        </p>
        <p className="mb-2">
          As a freelance writer for Permit.io, I have focused on creating
          technical articles centered around authorization. My contributions
          include:
        </p>
        <ul className="mb-2">
          <li>
            Authored an article on{" "}
            <a
              href="https://www.permit.io/blog/how-to-implement-rbac-in-supabase"
              target="_blank"
              className="underline"
            >
              integrating Supabase with Permit.io
            </a>{" "}
            .
          </li>
          <li>
            Wrote a detailed guide on{" "}
            <a
              href="https://www.permit.io/blog/how-to-implement-rbac-role-based-access-control-in-astro-framework"
              target="_blank"
              className="underline"
            >
              {" "}
              integrating Astro with Permit.io{" "}
            </a>
            .
          </li>
          <li>
            Continuing to write and contribute articles on a freelance contract
            basis.
          </li>
        </ul>
        <p>
          My work with Permit.io has allowed me to deepen my expertise in
          authorization and share valuable insights with the developer
          community.
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
            <a
              className="underline"
              target="_blank"
              href="https://www.showwcase.com/article/34719/introducing-showwcase-hackfest-2023"
            >
              HackFest
            </a>
            ", driving innovation and collaboration.
          </li>
          <li>
            Organized multiple events in collaboration with various communities,
            such as "
            <a
              className="underline"
              target="_blank"
              href="https://x.com/GrowInComm/status/1665233663645347841"
            >
              Blog-a-Thon
            </a>
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
          Other Experiences
        </h2>
        <p className="mb-2">
          In addition to my professional roles, I have also been involved in
          various other activities:
        </p>
        <ul className="mb-2">
          <li>
            Core team member for the Eastern India's largest hackathon community
            "
            <a
              className="underline"
              target="_blank"
              href="https://www.hack4bengal.tech/"
            >
              Hack4Bengal
            </a>
            ", where I played a key role in organizing and managing the event.
          </li>
          <li>
            Writing articles for{" "}
            <a
              className="underline"
              target="_blank"
              href="https://leaddevrel.com"
            >
              LeadDevRel
            </a>
            , sharing insights and knowledge on developer relations and
            community building.
          </li>
          <li>
            Hosting bi-weekly growth meetings with DevRels in the LeadDevRel
            community.
          </li>
        </ul>
        <p>
          These experiences have further enriched my skills and provided me with
          additional platforms to contribute to the developer community.
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
