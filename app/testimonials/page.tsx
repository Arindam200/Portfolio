import React from "react";
import Image from "next/image";
import Alexandr from "./assets/Alexandr.png";
import Dani from "./assets/Dani.png";
import Suhas from "./assets/Suhas.png";
import Debajyati from "./assets/debajyati.png";
import Sophia from "./assets/sophiya.png";
import Gabriel from "./assets/Gabriel.png";
import Julia from "./assets/Julia.png";
import Eddie from "./assets/Eddie.png";
import David from "./assets/David.png";
import { ArrowIcon } from "../components/icons";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";
import { highlight } from "sugar-high";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what people thinks about me.",
};

function TestimonialCard({
  image,
  name,
  link,
  AuthorDescription,
  content,
  highlights = [],
}: {
  image: any;
  name: string;
  link: string;
  AuthorDescription: string;
  content: string;
  highlights?: string[];
}): React.JSX.Element {
  return (
    <div className="">
      <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 my-5">
        <div className="relative">
          <Link href={link} className="flex items-center gap-2">
            <div className="h-14 w-14 overflow-hidden rounded-full border border-control">
              <Image
                alt="Author Image"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                data-nimg="1"
                src={image}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                {name}
              </p>
              <div className="text-xs"> {AuthorDescription}</div>
            </div>
            <div className="transform absolute right-0 top-2 text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </Link>
        </div>
        <div className="text-foreground-muted text-base pl-2 mt-2">
          {content.split("\n").map((line, index) => (
            <p key={index} className="mb-2">
              {highlights.reduce(
                (acc, highlight) =>
                  acc.flatMap((part, i) =>
                    typeof part === "string" && part.includes(highlight)
                      ? part.split(highlight).flatMap((subPart, j) =>
                          j < part.split(highlight).length - 1
                            ? [
                                subPart,
                                <span
                                  key={`${highlight}-${j}`}
                                  className="text-green-800 dark:text-green-300"
                                >
                                  {highlight}
                                </span>,
                              ]
                            : [subPart],
                        )
                      : [part],
                  ),
                [line],
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Testimonials
      </h1>
      <p className="">Here's what people are saying about me:</p>

      <TestimonialCard
        image={Gabriel}
        name="Gabriel L. Manor"
        link="https://testimonial.to/arindam-s-blog/all"
        AuthorDescription="Director of DevRel, Permit.io"
        content={`We've been working with Arindam on multiple content pieces for the last couple of months, and his work is astonishing. 
          One of his strengths is his ability and willingness to learn and improve. He never gave up on this and made sure the content was always accurate and exact to the required point.
          We also love his network of writers, where he can scale the workload when needed. 
          
          So far, 10/10 experience!`}
        highlights={[
          "his work is astonishing",
          "his ability and willingness to learn and improve",
          "We also love his network of writers",
          "So far, 10/10 experience!",
        ]}
      />
      <TestimonialCard
        image={Julia}
        name="Julia Machado"
        link="https://testimonial.to/arindam-s-blog/all"
        AuthorDescription="Founder & CEO, Webcrumbs"
        content={`Arindam gave us a masterclass on how to launch on Product Hunt and I dare to say if it wasn't that we wouldn't have achieved 3rd in our first launch ever and with almost zero preparation. 
          
          He's also a super nice guy, and really smart. Write great technical texts that reach an impressive audience.
          
          We'll definitely work with him again!`}
        highlights={[
          "Arindam gave us a masterclass on how to launch on Product Hunt",
          "3rd in our first launch ever",
          "super nice guy",
          "Write great technical texts",
          "We'll definitely work with him again!",
        ]}
      />
      <TestimonialCard
        image={Alexandr}
        name="Alexandr"
        link="https://testimonial.to/arindam-s-blog/all"
        AuthorDescription="Lead at OneEntry Portal Co"
        content={`I had the pleasure of working with Arindam on a article for our company. From our initial conversation to the final submission, Arindam's professionalism and expertise, for their craft were evident. Communication was seamless and enjoyable. 
          He fully understood the nuances of the project. The entire collaboration process not only productive but genuinely pleasant. 
          The article was not only informative and engaging but also aligned with our vision.`}
        highlights={[
          "Arindam's professionalism and expertise",
          "Communication was seamless and enjoyable",
          "The entire collaboration process not only productive but genuinely pleasant",
          "informative and engaging",
          "aligned with our vision.",
        ]}
      />
      <TestimonialCard
        image={David}
        name="David Mytton"
        link="https://davidmytton.blog/"
        AuthorDescription="CEO of Arcjet"
        content={`We worked with Arindam on a writeup of the Arcjet beta release. The goal was to introduce the SDK to developers and show off how you can use Arcjet to protect an interesting application. 
          Arindam was responsive to feedback and helped us achieve those goals`}
        highlights={["Arindam was responsive", "helped us achieve those goals"]}
      />
      <TestimonialCard
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        image={Dani}
        name="Dani Passos"
        AuthorDescription="DevRel at Shopify"
        content={`Working with Ari has been an absolute pleasure and a truly enriching experience. His passion shines through in the enthusiasm he brings to each task, no matter how big or small. 

          What sets him apart is his exceptional attention to detail; he always ensures that every aspect of his work is polished to perfection.

          Ari consistently goes above and beyond what is expected of him, setting a new standard for professionalism and commitment. His proactive approach means that he not only meets deadlines but often exceeds expectations, delivering results that are truly impressive. 
          
          Managing Ari at Lead DevRel has been inspiring, as his drive and determination motivate those around him to elevate their own performance. His dedication, combined with his meticulous nature and willingness to go the extra mile, makes Ari an invaluable asset to any team or project he's involved with.`}
        highlights={[
          "absolute pleasure and a truly enriching experience",
          "enthusiasm",
          "exceptional attention to detail",
          "polished to perfection",
          "goes above and beyond",
          "often exceeds expectations",
          "Managing Ari at Lead DevRel has been inspiring",
          "dedication, combined with his meticulous nature and willingness to go the extra mile",
        ]}
      />
      <TestimonialCard
        image={Eddie}
        name="Eddie Jaoude"
        link="https://x.com/eddiejaoude"
        AuthorDescription="GitHub Star & DevRel"
        content={`Arindam is a great DevRel and is always super supportive to everyone in the community, his content is insightful and I always enjoy reading his blogs`}
        highlights={[
          "great DevRel",
          "super supportive",
          "content is insightful",
        ]}
      />
      <TestimonialCard
        image={Sophia}
        name="Sophia Iroegbu"
        link="https://x.com/sophiairoegbu_"
        AuthorDescription="Dev Advocate at LeadDevRel"
        content={`Arindam is an amazing friend and colleague. 
          We worked on some campaigns while at Pieces and Lead DevRel. 
          Also, he helped me improve my writing skills as he gave me feedback on some articles I wrote.`}
        highlights={[
          "Arindam is an amazing friend",
          "improve my writing skills",
        ]}
      />

      <TestimonialCard
        image={Debajyati}
        link="https://x.com/ddebajyati/status/1762896523963326884"
        name="Debajyati Dey"
        AuthorDescription="@ddebajyati"
        content={`You're a gift to the community. 
          You were the one who inspired me to write blogs.
          Your blogs are awesome 🚀. 
          You deserve appreciation. 😊🤓`}
        highlights={["inspired me", "Your blogs are awesome"]}
      />
    </div>
  );
}
