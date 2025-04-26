import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

// Update this URL with your actual YouTube channel URL
const YOUTUBE_URL = 'https://www.youtube.com/@Arindam_1729?sub_confirmation=1';

export function GET(request: NextRequest) {
  return NextResponse.redirect(YOUTUBE_URL, { status: 302 });
}