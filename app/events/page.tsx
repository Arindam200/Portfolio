import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Events",
  description: "Events I've spoken at and participated in.",
};

interface Event {
  id: string;
  banner: string; // URL or path to event banner image
  title: string; // Event name
  talkTitle: string; // My talk title
  talkDescription: string; // Talk description
  place: string;
  date: string;
  link: string;
}

const events: Event[] = [
  {
    id: "event-1",
    banner: "/mongo-db-memori.jpg",
    title: "Vectors, Vibes & Victory: The MongoDB AI Revolution",
    talkTitle: "Understanding Agentic Memory with MongoDb Atlas and Memori",
    talkDescription:
      "In this talk, I talked about agentic memory, how it works, and how to use it in your agentic workflows using memori and mongodb atlas.",
    place: "Kolkata, India",
    date: "14th December, 2025",
    link: "https://www.meetup.com/kolkata-mongodb-user-group/events/312124427/",
  },
  {
    id: "event-2",
    banner: "/git-together-hyd.jpg",
    title: "Git Together Hyderabad: Git & GitHub Mastery Workshop",
    talkTitle:
      "Choosing the Right LLM for Your AI Agents (That Don't Break in Prod)",
    talkDescription:
      "In this talk, I talked about choosing the right LLM for your AI applications and how to choose the best model for your use case.",
    place: "Hyderabad, India",
    date: "8th August, 2025",
    link: "https://www.meetup.com/gittogether-hyderabad/events/308802946",
  },
  {
    id: "event-3",
    banner: "/react-kol.jpg",
    title: "React Kolkata Meetup",
    talkTitle: "Cracking the Code to Make AI Easy for Everyone",
    talkDescription:
      "In this talk, I talked about how to make AI easy for everyone using React and Next.js.",
    place: "Kolkata, India",
    date: "30th August, 2025",
    link: "https://luma.com/ze3qavyg",
  },
  //   {
  //     id: "event-4",
  //     banner: "/event-banner-4.jpg",
  //     title: "Event Title 4",
  //     talkTitle: "My Talk Title 4",
  //     talkDescription: "Description of your talk at this event.",
  //     place: "Location, City",
  //     date: "16th December, 2025",
  //     link: "https://example.com/event-3",
  //   },
];

export default function EventsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Events</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here are some of the events I've spoken at. Check them out to learn
          more!
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id}>
              <h2 className="font-medium text-xl tracking-tighter mb-4">
                {event.title}
              </h2>
              <div className="w-full aspect-video rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
                <Image
                  src={event.banner}
                  alt={event.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                <p>{event.place}</p>
                <p>{event.date}</p>
              </div>
              <h3 className="font-medium text-lg tracking-tighter mb-2">
                {event.talkTitle}
              </h3>
              <p className="mb-4">{event.talkDescription}</p>
              <Link
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Check it out →
              </Link>
              {index < events.length - 1 && (
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
              )}
            </div>
          ))}
        </div>

        <hr className="my-8 border-neutral-100 dark:border-neutral-800" />

        <p className="mb-4">
          I regularly speak at developer meetups, conferences, and workshops on
          topics around AI agents, modern web development, and developer
          workflows. My talks focus on practical, hands-on approaches that
          developers can apply immediately.
        </p>
        <p className="mb-4">
          If you're organizing events around AI, developer tools, or modern web
          technologies,{" "}
          <Link href="/contact-me" className="underline">
            hit me up
          </Link>
          . I'm happy to speak and share insights with your community.
        </p>
      </div>
    </section>
  );
}
