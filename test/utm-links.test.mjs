import assert from "node:assert/strict";
import test from "node:test";
import {
  UTM_SOURCE,
  withUtmSource,
  withUtmSourceInHtml,
} from "../app/utils/utm.ts";

test("adds the portfolio UTM source to external links", () => {
  assert.equal(
    withUtmSource("https://example.com/path"),
    `https://example.com/path?utm_source=${UTM_SOURCE}`,
  );
});

test("preserves existing query parameters and replaces stale UTM sources", () => {
  assert.equal(
    withUtmSource("https://example.com/path?ref=profile&utm_source=old"),
    `https://example.com/path?ref=profile&utm_source=${UTM_SOURCE}`,
  );
});

test("leaves internal, hash, and email links unchanged", () => {
  for (const href of ["/work", "#overview", "mailto:hello@example.com"]) {
    assert.equal(withUtmSource(href), href);
  }
});

test("adds tracking to external links inside rendered blog HTML", () => {
  assert.equal(
    withUtmSourceInHtml(
      '<p><a href="https://example.com/post?ref=dev">Read</a> <a href="#more">More</a></p>',
    ),
    `<p><a href="https://example.com/post?ref=dev&amp;utm_source=${UTM_SOURCE}">Read</a> <a href="#more">More</a></p>`,
  );
});
