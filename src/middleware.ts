import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {

  const cookiesStore = await cookies()
  const accesToken = cookiesStore.get('accesToken')?.value
  if(accesToken)
    return NextResponse.redirect(new URL('/store', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: [
    '/login/:path*',
    '/signup/:path*',

  ],
}