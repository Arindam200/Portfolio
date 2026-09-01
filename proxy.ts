import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  acceptsMarkdown,
  getMarkdownPage,
  markdownNotFound,
} from "./app/agent-content";

const vary = "Accept, Accept-Encoding";

export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  if (acceptsMarkdown(request.headers.get("accept"))) {
    const markdown = getMarkdownPage(request.nextUrl.pathname);
    return new NextResponse(markdown ?? markdownNotFound, {
      status: markdown ? 200 : 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: vary,
      },
    });
  }

  const response = NextResponse.next();
  response.headers.append("Vary", "Accept");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
