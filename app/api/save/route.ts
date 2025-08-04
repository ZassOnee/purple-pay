import { writeFile } from 'fs/promises'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nama, norek, bank } = body

    if (!nama || !norek || !bank) {
      return NextResponse.json({ message: 'Field tidak lengkap' }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'public', 'data.json')
    await writeFile(filePath, JSON.stringify(body, null, 2))

    return NextResponse.json({ message: 'Berhasil disimpan!' })
  } catch (err: any) {
    console.error('Error saat menyimpan:', err.message)
    return NextResponse.json({ message: 'Gagal menyimpan!' }, { status: 500 })
  }
}
