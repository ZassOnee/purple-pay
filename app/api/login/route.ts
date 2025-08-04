import { NextResponse } from 'next/server'
import { USERNAME, PASSWORD } from '@/lib/auth'

export async function POST(req: Request) {
  const { user, pass } = await req.json()

  if (user === USERNAME && pass === PASSWORD) {
    const res = NextResponse.json({ success: true })
    res.cookies.set('session', 'true', {
      httpOnly: true,
      maxAge: 60 * 60 * 6, // 6 jam
    })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}