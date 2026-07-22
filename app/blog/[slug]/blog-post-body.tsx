"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

type TableOfContentsItem = {
  id: string;
  level: 2 | 3;
  text: string;
};

async function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back for browsers that block the Clipboard API.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Unable to copy code");
  }
}

export function BlogPostBody({ html }: { html: string }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>(
    [],
  );

  useEffect(() => {
    const body = bodyRef.current;

    if (!body) {
      return;
    }

    body.querySelectorAll("pre").forEach((pre) => {
      if (pre.parentElement?.classList.contains("blog-code-wrapper")) {
        return;
      }

      pre.classList.add("blog-code-block");

      const wrapper = document.createElement("div");
      wrapper.className = "blog-code-wrapper";
      pre.before(wrapper);
      wrapper.appendChild(pre);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "blog-copy-button";
      button.dataset.copyCode = "";
      button.setAttribute("aria-label", "Copy code to clipboard");
      button.setAttribute("aria-live", "polite");
      button.textContent = "Copy";
      wrapper.appendChild(button);
    });

    body.querySelectorAll("table").forEach((table) => {
      if (table.parentElement?.classList.contains("blog-table-wrapper")) {
        return;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "blog-table-wrapper";
      table.before(wrapper);
      wrapper.appendChild(table);
    });

    const headings = Array.from(
      body.querySelectorAll<HTMLHeadingElement>("h2, h3"),
    )
      .map((heading) => {
        const anchor = heading.querySelector<HTMLAnchorElement>('a[href^="#"]');
        const id = heading.id || anchor?.hash.slice(1) || "";

        if (!id) {
          return null;
        }

        heading.id = id;

        return {
          id,
          level: heading.tagName === "H2" ? (2 as const) : (3 as const),
          text: heading.textContent?.replace(/\s+/g, " ").trim() || id,
        };
      })
      .filter((heading): heading is TableOfContentsItem => heading !== null);

    setTableOfContents(headings);

    const tweetFrames = Array.from(
      body.querySelectorAll<HTMLIFrameElement>("iframe.tweet-embed"),
    );

    tweetFrames.forEach((frame) => {
      if (!frame.title) {
        frame.title = "Embedded post on X";
      }
    });

    function handleTweetResize(event: MessageEvent) {
      if (
        event.origin !== "https://platform.twitter.com" &&
        event.origin !== "https://platform.x.com"
      ) {
        return;
      }

      const message = event.data?.["twttr.embed"];
      const height = message?.params?.[0]?.height;

      if (
        message?.method !== "twttr.private.resize" ||
        typeof height !== "number"
      ) {
        return;
      }

      const frame = tweetFrames.find(
        (candidate) => candidate.contentWindow === event.source,
      );

      if (frame) {
        frame.style.height = `${Math.ceil(height)}px`;
      }
    }

    window.addEventListener("message", handleTweetResize);

    return () => {
      window.removeEventListener("message", handleTweetResize);
    };
  }, [html]);

  async function handleClick(event: MouseEvent<HTMLDivElement>) {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const button = target.closest<HTMLButtonElement>("[data-copy-code]");

    if (!button || !event.currentTarget.contains(button)) {
      return;
    }

    const code = button.parentElement?.querySelector("pre code");

    if (!code) {
      return;
    }

    try {
      await copyText(code.textContent || "");
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      if (button.isConnected) {
        button.textContent = "Copy";
      }
    }, 2000);
  }

  return (
    <div className="xl:grid xl:w-[60rem] xl:grid-cols-[minmax(0,42rem)_15rem] xl:gap-12">
      <div
        ref={bodyRef}
        className="blog-post-body min-w-0"
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <aside className="blog-table-of-contents">
        <nav
          aria-label="Table of contents"
          className="sticky top-8 border-l border-neutral-200 pl-5 dark:border-neutral-800"
        >
          <p className="mb-3 text-sm font-medium text-neutral-950 dark:text-neutral-50">
            On this page
          </p>
          <ol className="blog-toc-list m-0 space-y-2 p-0">
            {tableOfContents.map((item) => (
              <li
                key={item.id}
                className={item.level === 3 ? "pl-3" : undefined}
              >
                <a
                  href={`#${item.id}`}
                  className="block text-sm leading-5 text-neutral-500 no-underline transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
    </div>
  );
}
