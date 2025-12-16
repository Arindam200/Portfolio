import Meeting from "app/components/cal";
import Email from "app/components/email";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conctact Me",
  description: "Contact me for freelance work or full-time opportunities.",
};

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Work with me
      </h1>
      <p className="mb-4">
        I'm currently available for freelance work. I'm also open to full-time
        opportunities.
      </p>
      <p className="mb-4">
        You can reach out to me at{" "}
        <a href="mailto:arindammajumder2020@gmail.com" className="underline">
          arindammajumder2020@gmail.com
        </a>{" "}
        or by using the form below.
      </p>
      <Email />
      <p className="mb-4">
        If you're interested in working with me, please schedule a meeting with
        me using the calendar below.
      </p>
      <Meeting />
    </div>
  );
}
