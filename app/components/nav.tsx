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
  "/agency": {
    name: "Agency",
  },
  "/blog": {
    name: "Blog",
  },
  "/testimonials": {
    name: "Testimonials",
  },
  "/contact-me": {
    name: "Contact me",
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="-ml-[8px] mb-14 md:mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 md:space-x-2 md:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-0.75 sm:px-1 md:px-2 m-1",
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
