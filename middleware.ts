import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // if request if admin, check if the token in the search params is "ntunest-admin"
  if (request.nextUrl.pathname.startsWith("/admin") && request.nextUrl.searchParams.get("token") !== "ntunest-admin") {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
