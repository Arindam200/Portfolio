"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import clsx from "clsx";

const navItems = {
  "/": {
    name: "Home",
  },
  "/work": {
    name: "Work",
  },
  // "/agency": {
  //   name: "Agency",
  // },
  "/blog": {
    name: "Blog",
  },
  "/videos": {
    name: "Videos",
  },
  "/projects": {
    name: "Projects",
  },
  "/events": {
    name: "Talks",
  },
  // "/testimonials": {
  //   name: "Testimonials",
  // },
  "/contact-me": {
    name: "Contact me",
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="mb-14 tracking-tight md:-ml-2 md:mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          aria-label="Primary navigation"
          className="fade relative -mx-1 px-1 pb-1"
          id="nav"
        >
          <div className="flex w-full flex-row items-center justify-between gap-1 sm:w-max sm:justify-start sm:gap-0 sm:space-x-2 sm:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  prefetch={true}
                  className={clsx(
                    "relative flex whitespace-nowrap py-1 text-xs transition-all hover:text-neutral-800 md:px-2 md:text-base dark:hover:text-neutral-200",
                    {
                      "underline underline-offset-4 transition-all transform-stroke":
                        pathname === path,
                    },
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
