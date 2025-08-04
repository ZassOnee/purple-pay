// app/api/logout/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const res = NextResponse.redirect('/login')
  res.cookies.set('auth_token', '', {
    maxAge: 0,
    path: '/', // penting biar ngehapus dari semua path
  })
  return res
}