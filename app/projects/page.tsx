import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Here are some projects that I have worked on.",
};

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      here are some project that I have worked on:
    </div>
  );
}
