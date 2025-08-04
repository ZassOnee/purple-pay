'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  const [form, setForm] = useState({ nama: '', norek: '', bank: '' })
  const [status, setStatus] = useState('')

  const handleLogout = async () => {
    await fetch('/api/logout')
    router.push('/login')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Menyimpan...')
    try {
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('✅ Data berhasil disimpan!')
      } else {
        setStatus('❌ Gagal menyimpan data.')
      }
    } catch (err) {
      setStatus('❌ Terjadi kesalahan jaringan.')
    }
  }

  useEffect(() => {
    const token = document.cookie.includes('auth_token=admin123')
    if (!token) router.push('/login')
  }, [])

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={updateForm}
          required
        />
        <br /><br />
        <input
          name="norek"
          placeholder="No Rekening"
          value={form.norek}
          onChange={updateForm}
          required
        />
        <br /><br />
        <input
          name="bank"
          placeholder="Bank"
          value={form.bank}
          onChange={updateForm}
          required
        />
        <br /><br />
        <button type="submit">💾 Simpan</button>
      </form>

      {status && (
        <p style={{ marginTop: 20, color: status.startsWith('✅') ? 'green' : 'red' }}>
          {status}
        </p>
      )}

      <hr style={{ margin: '30px 0' }} />

      <button onClick={handleLogout}>🔒 Logout</button>
    </div>
  )
      }
