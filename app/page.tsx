import { Link } from "next-view-transitions";
import Image from "next/image";
import Pieces from "../assets/pieces.svg";
import ab from "./testimonials/assets/Arindam.png";
import {
  TwitterIcon,
  GitHubIcon,
  ViewsIcon,
  ArrowIcon,
  HashnodeIcon,
  YoutubeIcon,
  LinkedInIcon,
  HashnodeIconGrey,
} from "./components/icons";

function BlogLink({ slug, name, desc }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col py-1">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p>{desc}</p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  function Badge(props) {
    return (
      <a
        {...props}
        target="_blank"
        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      />
    );
  }
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Arindam 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a MERN stack developer, freelance technical writer, and community builder. I currently `}
        <Link className="underline" href="/work">
          work
        </Link>
        {` as developer advocate at `}
        <span className="not-prose">
          <Badge href="https://pieces.app">
            <Image
              src={Pieces}
              alt="Pieces Logo"
              width={14}
              height={14}
              className="!mr-1"
            />
            Pieces for Developers
          </Badge>
        </span>
        , where I create content, host events, and help the community to grow.
      </p>
      <div className="flex items-start md:items-center my-8 gap-2 flex-row md:flex-row ">
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
              <TwitterIcon />
            </span>
            18k+ tweets all time
          </p>
          <p className="flex items-center gap-2">
            <span>
              <HashnodeIconGrey />
            </span>
            60+ blog posts all time
          </p>
          <p className="flex items-center">
            <span>
              <ViewsIcon />
            </span>
            200k+ blog views all time
          </p>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a Open Source Contributer and recently got featured in{" "}
          <a
            target="_blank"
            href="https://nextjs.org/blog/next-15-rc"
            className="underline"
          >
            Next.js 15 RC release blog
          </a>{" "}
          for my Contribtion. I create educational content around web
          development, JavaScript, TypeScript, React, and Next.js.
        </p>
        <p>
          I love to write Technical articles and share about my learnings, Here
          are some of them:{" "}
        </p>
        <div className="my-4 flex w-full flex-col space-y-4">
          <BlogLink
            name="How to Use Google Gemini with Node.js App"
            slug="how-to-use-google-gemini-with-nodejs-app"
            desc="Learn how to integrate Google Gemini API into a Node.js application, including setup, environment configuration, and testing"
          />
          <BlogLink
            name="Create a Discord bot with NodeJS"
            slug="create-a-discord-bot-with-nodejs"
            desc="Learn how to create a Discord bot with NodeJS, add functionalities, and automate tasks for your server"
          />
          <BlogLink
            name="Create a CRUD App with Prisma ORM & Node Js"
            slug="create-a-crud-app-with-prisma-orm-node-js"
            desc="Learn to build a CRUD app using Prisma ORM, Node.js, and PostgreSQL with this comprehensive guide"
          />
        </div>
        <p>
          I also write about my journey as a developer and share my thoughts on
          Twitter. You can connect with me:
        </p>
      </div>
      <div className="my-8 flex h-12 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a
            target="_blank"
            href="https://Github.com/Arindam200"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a
            target="_blank"
            href="https://x.com/Arindam_1729"
            aria-label="Twitter Profile"
          >
            <TwitterIcon />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a
            target="_blank"
            href="https://arindam1729.hashnode.dev/"
            aria-label="Hashnode Blog"
          >
            <HashnodeIcon />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arindam2004/"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a
            target="_blank"
            href="https://www.youtube.com/@Arindam_1729"
            aria-label="YouTube Channel"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
