import React from "react";
import Alexandr from "./Alexandr.png";
import Image from "next/image";
import Dani from "./Dani.png";
import Suhas from "./Suhas.png";
import Debajyati from "./debajyati.png";
import { ArrowIcon } from "../components/icons";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what people thinks about me.",
};

function CustomTweet({
  image,
  name,
  link,
  tweeterId,
  content,
}: {
  image: any;
  name: string;
  link: string;
  tweeterId: string;
  content: string;
}): React.JSX.Element {
  return (
    <div className="">
      <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 my-5">
        <div className="relative">
          <Link href={link} className="flex items-center gap-2">
            <div className="h-14 w-14 overflow-hidden rounded-full border border-control">
              <Image
                alt="@Arindam twitter image"
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
              <div className="text-xs"> {tweeterId}</div>
            </div>

            <div className="absolute -left-1 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black">
              <svg
                className="h-[12px] w-[12px]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
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
      <CustomTweet
        image={Alexandr}
        name="Alexandr"
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        tweeterId="marketing@oneentry.cloud"
        content="I had the pleasure of working with Arindam on a article for our company. From our initial conversation to the final submission, Arindam's professionalism and expertise, for their craft were evident. Communication was seamless and enjoyable. He fully understood the nuances of the project. The entire collaboration process not only productive but genuinely pleasant. The article was not only informative and engaging but also aligned with our vision."
      />
      <CustomTweet
        image={Debajyati}
        link="https://x.com/ddebajyati/status/1762896523963326884"
        name="Debajyati Dey"
        tweeterId="@ddebajyati"
        content="You're a gift to the community. You were the one who inspired me to write blogs. Your blogs are awesome 🚀. 
        You deserve appreciation. 😊🤓"
      />
      <CustomTweet
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        image={Dani}
        name="Dani Passos"
        tweeterId="@danizeres"
        content="@Arindam_1729 That is amazing, I love reading your articles 🔥"
      />
      <CustomTweet
        image={Suhas}
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        name="Suhas Sumukh"
        tweeterId="@suhasasumukh"
        content="@Arindam_1729 writes awesome blogs on Hashnode"
      />
      <CustomTweet
        image={Debajyati}
        link="https://x.com/Arindam_1729/status/1762092650780578240"
        name="Debajyati Dey"
        tweeterId="@ddebajyati"
        content="You're a great blogger brother. 🙌🏻
        What I admire most is that you're highly consistent!"
      />
    </div>
  );
}
