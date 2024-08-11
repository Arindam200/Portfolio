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
import { ArrowIcon } from "../components/icons";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";

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
}: {
  image: any;
  name: string;
  link: string;
  AuthorDescription: string;
  content: string;
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
        <p className="text-foreground-muted text-base pl-2 mt-2">{content}</p>
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
        content="We've been working with Arindam on multiple content pieces for the last couple of months, and his work is astonishing. One of his strengths is his ability and willingness to learn and improve. He never gave up on this and made sure the content was always accurate and exact to the required point. We also love his network of writers, where he can scale the workload when needed. So far, 10/10 experience!"
      />
      <TestimonialCard
        image={Julia}
        name="Julia Machado"
        link="https://testimonial.to/arindam-s-blog/all"
        AuthorDescription="Founder & CEO, Webcrumbs"
        content="Arindam gave us a masterclass on how to launch on Product Hunt and I dare to say if it wasn't that we wouldn't have achieved 3rd in our first launch ever and with almost zero preparation. He's also a super nice guy, and really smart. Write great technical texts that reach an impressive audience. We'll definitely work with him again!"
      />
      <TestimonialCard
        image={Alexandr}
        name="Alexandr"
        link="https://testimonial.to/arindam-s-blog/all"
        AuthorDescription="Lead at OneEntry Portal Co"
        content="I had the pleasure of working with Arindam on a article for our company. From our initial conversation to the final submission, Arindam's professionalism and expertise, for their craft were evident. Communication was seamless and enjoyable. He fully understood the nuances of the project. The entire collaboration process not only productive but genuinely pleasant. The article was not only informative and engaging but also aligned with our vision."
      />
      <TestimonialCard
        image={Eddie}
        name="Eddie Jaoude"
        link="https://x.com/eddiejaoude"
        AuthorDescription="GitHub Star & DevRel"
        content="Arindam is a great DevRel and is always super supportive to everyone in the community, his content is insightful and I always enjoy reading his blogs"
      />
      <TestimonialCard
        image={Sophia}
        link="https://x.com/sophiairoegbu_"
        name="Sophia Iroegbu"
        AuthorDescription="Dev Advocate at LeadDevRel"
        content="Arindam is an amazing friend and colleague, we worked on some campaigns while at Pieces and Lead DevRel. 
        Also, he helped me improve my writing skills as he gave me feedback on some articles I wrote.."
      />
      <TestimonialCard
        image={Debajyati}
        link="https://x.com/ddebajyati/status/1762896523963326884"
        name="Debajyati Dey"
        AuthorDescription="@ddebajyati"
        content="You're a gift to the community. You were the one who inspired me to write blogs. Your blogs are awesome 🚀. 
        You deserve appreciation. 😊🤓"
      />
      <TestimonialCard
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        image={Dani}
        name="Dani Passos"
        AuthorDescription="DevRel at Shopify"
        content="@Arindam_1729 That is amazing, I love reading your articles 🔥"
      />
      <TestimonialCard
        image={Suhas}
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        name="Suhas Sumukh"
        AuthorDescription="@suhasasumukh"
        content="@Arindam_1729 writes awesome blogs on Hashnode"
      />
      <TestimonialCard
        image={Debajyati}
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        name="Debajyati Dey"
        AuthorDescription="@ddebajyati"
        content="You're a great blogger brother. 🙌🏻
        What I admire most is that you're highly consistent!"
      />
    </div>
  );
}
