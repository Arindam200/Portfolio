import type { Metadata } from "next";

const resumeUrl = "/arindam-resume.pdf";

export const metadata: Metadata = {
  title: "Resume",
  description: "Arindam Majumder's resume.",
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M2.071 11.349.963 10.242 9.202 1.989H2.838L2.852.455h8.992V9.46h-1.548l.014-6.364-8.239 8.253Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 1.5v8m0 0 3-3m-3 3-3-3M2.5 11v2.5h11V11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export default function ResumePage() {
  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tighter">Resume</h1>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Arindam Majumder · Developer Advocate and AI Engineer
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          >
            Open PDF
            <ArrowIcon />
          </a>
          <a
            href={resumeUrl}
            download="Arindam-Majumder-Resume.pdf"
            className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          >
            <DownloadIcon />
            Download
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900">
        <iframe
          src={`${resumeUrl}#view=FitH&toolbar=1&navpanes=0`}
          title="Arindam Majumder resume"
          className="h-[calc(100svh-12rem)] min-h-[36rem] w-full bg-white"
        />
      </div>

      <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
        If the embedded preview is unavailable in your browser, use Open PDF
        above.
      </p>
    </section>
  );
}
