import React from "react";
import type { Metadata } from "next";
import Meeting from "app/components/cal";

export const metadata: Metadata = {
  title: "Studio1 | Technical Content and Advocacy Agency",
  description:
    "Studio1 is a technical content and developer advocacy agency helping startups, SaaS, and devtool companies scale with impactful developer-focused strategies.",
};

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Studio1HQ
      </h1>
      <p className="mb-4">
        Studio1 is a technical content and developer advocacy agency dedicated
        to helping startups, SaaS companies, and devtool platforms engage with
        developers, improve onboarding, and drive growth through high-quality,
        developer-focused strategies.
      </p>
      <h2 className="font-medium text-xl mb-4 tracking-tight">What We Do</h2>
      <p className="mb-4">
        Our work bridges the gap between complex tools and the developers who
        use them. We specialize in:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          <b>Technical Blogs and Growth Content:</b> High-quality content that
          showcases your product's value, boosts engagement, and improves SEO.
        </li>
        <li>
          <b>Developer Advocacy:</b> Helping you build authentic connections
          with developers through tailored advocacy programs and community
          engagement.
        </li>
        <li>
          <b>Technical Documentation:</b> Clear, actionable docs that enhance
          onboarding and reduce support tickets.
        </li>
        <li>
          <b>SEO for Developer Search Intent:</b> Creating content optimized for
          the way developers search—solving problems, debugging, and integrating
          tools.
        </li>
      </ul>
      <h2 className="font-medium text-xl mb-4 tracking-tight">Our Impact</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Partnered with YC-backed startups and NASDAQ-listed companies,
          delivering results that matter.
        </li>
        <li>
          Scaled to $50K+ ARR in just 6 months, building trust with our clients
          through consistent quality.
        </li>
        <li>
          Helped multiple clients rank in the Top 3 on Product Hunt, driving
          thousands of visits, downloads, and engagement.
        </li>
        <li>
          Improved developer onboarding workflows with tailored documentation
          and technical content.
        </li>
        <li>
          Built a team of 18 experts in technical writing, developer advocacy,
          and content strategy.
        </li>
      </ul>
      <h2 className="font-medium text-xl mb-4 tracking-tight">Why Studio1?</h2>
      <p className="mb-4">
        We understand developers because we’ve been there. Our team combines
        deep technical knowledge with a passion for storytelling, making sure
        every piece of content is actionable, engaging, and aligned with your
        goals.
      </p>
      <p className="mb-2">
        Whether you’re launching a new product, improving developer onboarding,
        or scaling your community, we’re here to help.
      </p>
      <h2 className="font-medium text-xl mb-4 tracking-tight">
        Let’s Work Together
      </h2>
      <p className="mb-2">
        Whether you're a startup looking to scale or a company aiming to engage
        more deeply with developers, Studio1 is ready to help you achieve your
        goals.{" "}
      </p>
      <p className="mb-4">
        <a href="https://studio1hq.com/contact" className="underline">
          Get in touch with us
        </a>{" "}
        to learn more about how we can help your team succeed.
      </p>
      <Meeting />
    </div>
  );
}
