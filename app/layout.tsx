import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { ViewTransitions } from "next-view-transitions";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Arindam Majumder",
    template: "%s | Arindam Majumder",
  },
  description: "Developer, Technical Writer, Community Builder",
  openGraph: {
    title: "Arindam Majumder",
    description: "DevRel, Technical Writer, Community Builder",
    url: baseUrl,
    siteName: "Arindam Majumder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Arindam Majumder",
    card: "summary_large_image",
    description: "DevRel, Technical Writer, Community Builder",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={cx(
          "text-black bg-white dark:text-white dark:bg-black",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
