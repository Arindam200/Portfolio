import React from "react";
import type { Metadata } from "next";
import Meeting from "app/components/cal";

export const metadata: Metadata = {
  title: "Studio1 | Technical Content and Developer Relations Agency",
  description:
    "Studio1 is a technical content and developer relations agency helping AI, SaaS, and DevTools teams grow through clear documentation, real demos, and developer-first education.",
};

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Studio1</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          <a href="https://studio1hq.com" className="underline">
            Studio1
          </a>{" "}
          is a technical content and developer relations agency helping AI,
          SaaS, and DevTools teams grow through clear documentation, real demos,
          and developer-first education.
        </p>
        <p className="mb-4">
          We work with early-stage startups and large Enterprise teams to
          improve onboarding, adoption, and long-term developer engagement.
        </p>

        <h2 className="font-medium text-xl mb-4 tracking-tighter">
          What We Do
        </h2>
        <p className="mb-4">
          We help teams turn complex products into things developers can
          understand and build with.
        </p>

        <h3 className="font-medium text-lg mb-2 tracking-tighter mt-2">
          Technical Content and Growth
        </h3>
        <ul className="mb-4">
          <li>Deep technical blogs, guides, and tutorials</li>
          <li>AI demos and agentic examples tied to real use cases</li>
          <li>Content designed for developer search intent</li>
        </ul>

        <h3 className="font-medium text-lg mb-2 tracking-tighter mt-2">
          Developer Relations
        </h3>
        <ul className="mb-4">
          <li>Developer onboarding flows and first-use experience</li>
          <li>Events, workshops, and community programs</li>
          <li>Advocacy strategy and ongoing developer education</li>
        </ul>

        <h3 className="font-medium text-lg mb-2 tracking-tighter mt-2">
          Documentation and DX
        </h3>
        <ul className="mb-4">
          <li>API and SDK documentation</li>
          <li>Onboarding guides and integration walkthroughs</li>
          <li>Content systems that scale with the product</li>
        </ul>

        <h2 className="font-medium text-xl mb-4 tracking-tighter mt-6">
          Our Impact
        </h2>
        <ul className="mb-4">
          <li>
            Partnered with 30+ startups, including YC-backed and NASDAQ-listed
            companies
          </li>
          <li>Scaled to $100K+ revenue in the first year</li>
          <li>Helped multiple products rank Top 3 on Product Hunt</li>
          <li>
            Improved developer onboarding and activation through better docs and
            demos
          </li>
          <li>
            Built a distributed team of engineers, writers, and DevRel
            practitioners
          </li>
        </ul>

        <h2 className="font-medium text-xl mb-4 tracking-tighter mt-6">
          Why Studio1
        </h2>
        <p className="mb-4">
          We've built products, shipped open source, and worked as DevRels. We
          know what developers look for because we are the audience.
        </p>
        <p className="mb-4">
          Every blog, doc, or demo we create is practical, opinionated, and
          built to be used, not just read.
        </p>

        <h2 className="font-medium text-xl mb-4 tracking-tighter mt-6">
          Let's Work Together
        </h2>
        <p className="mb-4">
          If you're launching a product, improving developer onboarding, or
          scaling developer adoption, we can help.
        </p>
      </div>
      <Meeting />
    </div>
  );
}
