import assert from "node:assert/strict";
import test from "node:test";

const siteUrl = "https://arindamm.dev";

test("llms.txt provides specific agent usage guidance", async () => {
  const llms = await import("node:fs/promises").then(({ readFile }) =>
    readFile(new URL("../public/llms.txt", import.meta.url), "utf8"),
  );

  assert.match(llms, /## When to use this site/);
  assert.match(llms, /Accept: text\/markdown/);
  assert.match(llms, new RegExp(`${siteUrl}/contact`));
});

test("trust anchor pages are substantial public content", async () => {
  const { readFile } = await import("node:fs/promises");
  for (const page of ["about", "contact", "privacy"]) {
    const source = await readFile(
      new URL(`../app/${page}/page.tsx`, import.meta.url),
      "utf8",
    );
    assert.ok(source.length > 500, `${page} should exceed 500 source chars`);
    assert.match(source, /<h1>/);
  }
});
