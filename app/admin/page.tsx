'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'

export default function AdminPage() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/logout') // Clear cookie
    router.push('/login') // Redirect manual
  }

  useEffect(() => {
    // Optional: client-side guard (misal page diakses via back button)
    const token = document.cookie.includes('auth_token=admin123')
    if (!token) router.push('/login')
  }, [])

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <form action="/api/save" method="POST">
        <input name="nama" placeholder="Nama" required />
        <br /><br />
        <input name="norek" placeholder="No Rekening" required />
        <br /><br />
        <input name="bank" placeholder="Bank" required />
        <br /><br />
        <button type="submit">Simpan</button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      {/* Tombol Logout interaktif */}
      <button onClick={handleLogout}>🔒 Logout</button>
    </div>
  )
}