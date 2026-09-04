import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { withUtmSource } from "app/utils/utm";

// Update this URL with your actual YouTube channel URL
const YOUTUBE_URL = "https://www.youtube.com/@Arindam_1729?sub_confirmation=1";

export function GET(_request: NextRequest) {
  return NextResponse.redirect(withUtmSource(YOUTUBE_URL), { status: 302 });
}
