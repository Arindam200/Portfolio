import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice for arindamm.dev.",
};

export default function PrivacyPage() {
  return (
    <section className="prose prose-neutral dark:prose-invert">
      <h1>Privacy notice</h1>
      <p>
        Arindamm.dev is a personal portfolio and publishing website operated by
        Arindam Majumder. This page explains the limited information involved
        when you visit the site or contact me. The site is designed to share
        professional work, writing, videos, projects, and ways to start a
        conversation; it is not a service that requires an account or collects
        sensitive personal information to provide its public pages.
      </p>
      <p>
        Standard hosting and analytics services may process technical data such
        as IP address, browser type, referring page, approximate location,
        device information, and pages visited to operate, secure, and improve
        the site. If you choose to use a contact form, calendar, or email link,
        the information you provide—such as your name, email address, company,
        and message—is used to reply to your inquiry and assess a potential
        professional engagement.
      </p>
      <p>
        I do not sell personal data. Information is retained only as long as
        reasonably necessary for communication, record keeping, security, or
        legal obligations. Third-party links, embedded scheduling tools, and
        social platforms have their own privacy practices. For a privacy
        question, access or deletion request, or a concern about information
        you shared, email{" "}
        <a href="mailto:arindammajumder2020@gmail.com">
          arindammajumder2020@gmail.com
        </a>.
      </p>
    </section>
  );
}
