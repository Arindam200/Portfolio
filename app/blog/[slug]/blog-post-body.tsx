"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef } from "react";

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
    <div
      ref={bodyRef}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
