import { timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { BLOG_POSTS_CACHE_TAG, getBlogPostCacheTag } from "app/blog/cache";

function isAuthorized(request: Request, expectedSecret: string): boolean {
  const authorization = request.headers.get("authorization");
  const suppliedSecret = authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : "";
  const suppliedBuffer = Buffer.from(suppliedSecret);
  const expectedBuffer = Buffer.from(expectedSecret);

  return (
    suppliedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(suppliedBuffer, expectedBuffer)
  );
}

export async function POST(request: Request) {
  const expectedSecret = process.env.BLOG_REVALIDATE_SECRET;

  if (!expectedSecret) {
    return Response.json(
      { error: "Blog revalidation is not configured." },
      { status: 503 },
    );
  }

  if (!isAuthorized(request, expectedSecret)) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body: unknown = await request.json().catch(() => ({}));
  const slug =
    typeof body === "object" &&
    body !== null &&
    "slug" in body &&
    typeof body.slug === "string"
      ? body.slug.trim()
      : "";

  revalidateTag(BLOG_POSTS_CACHE_TAG, { expire: 0 });

  if (slug) {
    revalidateTag(getBlogPostCacheTag(slug), { expire: 0 });
  }

  revalidatePath("/blog");
  revalidatePath("/");

  return Response.json({
    revalidated: true,
    paths: ["/blog", "/"],
    tags: [BLOG_POSTS_CACHE_TAG, ...(slug ? [getBlogPostCacheTag(slug)] : [])],
  });
}
