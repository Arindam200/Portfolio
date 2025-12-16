import type { Metadata } from "next";
import { YouTubeEmbed } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Videos",
  description: "A collection of my video content and tutorials.",
};

interface VideoSection {
  title: string;
  videos: string[];
}

const videoSections: VideoSection[] = [
  {
    title: "Technical tutorials",
    videos: ["gqCZ_sFha7E", "pdsk6yldZGI", "9ryQ4Nb32zk", "zNTWmw72BDs"],
  },
  {
    title: "Ai Insights",
    videos: ["LzLcvlwM64g", "UiYc8Nd38tI", "nItVDeJZCRo", "6pcBBLXxOEc"],
  },
  //   {
  //     title: "Talks",
  //     videos: [
  //       "VIDEO_ID_5",
  //       "VIDEO_ID_6",
  //     ],
  //   },
];

export default function VideosPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Videos</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here's a collection of my video content, tutorials, and talks. Feel
          free to explore and learn!
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {videoSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-12">
            <h2 className="font-medium text-xl tracking-tighter mb-6">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.videos.map((videoId) => (
                <div
                  key={videoId}
                  className="w-full aspect-video rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900"
                >
                  <YouTubeEmbed
                    videoid={videoId}
                    height={400}
                    params="modestbranding=1&rel=0"
                  />
                </div>
              ))}
            </div>
            {sectionIndex < videoSections.length - 1 && (
              <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
            )}
          </div>
        ))}

        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />

        <p className="mb-4">
          I create hands-on tutorials and demos focused on AI agents, modern web
          tooling, and developer workflows. These videos are designed to be
          practical and actionable, so you can follow along and build something
          real.
        </p>
        <p className="mb-4">
          For more content, check out my{" "}
          <a
            href="https://ggl.link/arindam-youtube"
            target="_blank"
            className="underline"
          >
            YouTube channel
          </a>{" "}
          where I regularly publish new tutorials and insights. You can also
          explore my{" "}
          <a
            href="https://dub.sh/arindam-devto"
            target="_blank"
            className="underline"
          >
            blog posts
          </a>{" "}
          for written deep-dives on similar topics.
        </p>
      </div>
    </section>
  );
}
