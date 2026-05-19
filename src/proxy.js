import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export default async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        const currentUrl = request.nextUrl.pathname + request.nextUrl.search;
        const callbackUrl = encodeURIComponent(currentUrl);

        return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, request.url))
    }
}

export const config = {
    matcher: ["/doctors/:path*", "/dashboard"],
}