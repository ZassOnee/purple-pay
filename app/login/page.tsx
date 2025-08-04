'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ user: '', pass: '' })
  const [msg, setMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (res.ok && data.success) {
        // ✅ Set cookie ke browser
        document.cookie = `auth_token=admin123; path=/`
        router.push('/admin')
      } else {
        setMsg('Login gagal! Username atau password salah.')
      }
    } catch (err) {
      console.error(err)
      setMsg('Terjadi kesalahan. Coba lagi nanti.')
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '15%' }}>
      <h2>🔐 Login Admin</h2>
      <form onSubmit={handleSubmit}>
        <input name="user" placeholder="Username" onChange={handleChange} required /><br /><br />
        <input type="password" name="pass" placeholder="Password" onChange={handleChange} required /><br /><br />
        <button type="submit">Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  )
}