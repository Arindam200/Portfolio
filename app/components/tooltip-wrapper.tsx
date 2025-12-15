"use client";

import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("./tooltip"), {
  ssr: false,
});

export default Tooltip;
