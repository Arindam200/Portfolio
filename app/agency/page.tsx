import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency",
  description: "Studio1 is an agency",
};

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Studio1HQ
      </h1>
      Studio1 is an agency, and we focus on providing technical blogs, Growth Content, DevRel, Technical Documentations to software companies. 
    </div>
  );
}
