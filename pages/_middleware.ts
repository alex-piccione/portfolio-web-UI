import type { NextFetchEvent, NextRequest } from 'next/server'
import { parseAcceptLanguageHeader } from '../common/utils';

export function middleware(request: NextRequest, ev: NextFetchEvent) {

  // to check the headers
  /*    
  const iterator = request.headers.keys();
  let result = iterator.next();
  while (!result.done) {
    result = iterator.next();
    //console.log(result.value);
  }*/

  /*
  accept-encoding
  accept-language
  cache-control
  connection
  cookie
  dnt
  host
  referer
  sec-fetch-dest
  sec-fetch-mode
  sec-fetch-site
  sec-fetch-user
  upgrade-insecure-requests
  user-agent
  undefined
  */

  console.log("accept-language", request.headers.get("accept-language"))

  //return parseAcceptLanguageHeader(req.headers.get("accept-language"))
  const locale = parseAcceptLanguageHeader(request.headers.get("accept-language"))[0]
  
  //return new Response('Hello, world!')
}


/*
export function middleware(req: NextRequest) {
  // Only rewrite requests to `/`, as _middleware on the `/pages` root will be executed in every request of the app.
  if (req.nextUrl.pathname === '/') {
    // Parse the cookie
    const isInBeta = JSON.parse(req.cookies['beta'] || 'false')

    // Rewrite to the correct page
    return NextResponse.rewrite(`/${isInBeta ? 'beta' : 'non-beta'}`)
  }
}
*/

/*
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const country = req.geo.country?.toLowerCase() || 'us'
  const locale = req.headers.get('accept-language')?.split(',')?.[0] || 'en-US'

  // Only rewrite files that don't have a file extension
  if (!PUBLIC_FILE.test(req.nextUrl.pathname)) {
    req.nextUrl.pathname = `/${locale}/${country}`
    return NextResponse.rewrite(req.nextUrl)
  }
}
*/