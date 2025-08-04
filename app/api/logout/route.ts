// app/api/logout/route.ts
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // cegah prerender error

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL('/login', req.url)) // ✅ fix relative path
  res.cookies.set('auth_token', '', {
    maxAge: 0,
    path: '/', // tetap dipertahankan
  })
  return res
}
