import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Arindam Majumder for developer advocacy, technical content, AI demos, and collaborations.",
};

export default function ContactPage() {
  return (
    <section className="prose prose-neutral dark:prose-invert">
      <h1>Contact Arindam Majumder</h1>
      <p>
        The best way to reach me is by email at{" "}
        <a href="mailto:arindammajumder2020@gmail.com">
          arindammajumder2020@gmail.com
        </a>. I welcome inquiries about developer advocacy, technical content,
        AI and agent demos, tutorials, open-source education, workshops,
        speaking, collaborations, freelance work, and full-time roles.
      </p>
      <p>
        To make a conversation productive, please include a short description
        of your product, the developer audience you want to reach, the outcome
        you are aiming for, your timeline, and any links that explain the
        current experience. If you are considering Studio1, it is also helpful
        to say whether you need a focused launch, an ongoing content program,
        developer onboarding improvements, or an agent demonstration.
      </p>
      <p>
        I read inquiries personally and use the details above to determine
        whether I can help directly, through Studio1, or by pointing you to a
        more suitable resource. You can review relevant examples first on the
        work, projects, writing, videos, and talks pages. Email is preferred
        for new requests because it provides a clear, durable record of the
        scope and lets me respond with useful next steps.
      </p>
    </section>
  );
}
