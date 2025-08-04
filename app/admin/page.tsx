
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { ConfigSB } from '@/data/config'

const supabase = createClient(ConfigSB.supabase.url, ConfigSB.supabase.anonkey)

export default function AdminPage() {
  const router = useRouter()
  const [data, setData] = useState<any>({})
  const [status, setStatus] = useState('')
  const [newMethod, setNewMethod] = useState({ id: '', nama: '', norek: '', bg: '', icon: '', qr: '' })

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('sites')
      .select('*')
      .eq('site_id', ConfigSB.supabase.siteid)
      .single()
    if (!error) setData(data.detail || {})
  }

  useEffect(() => {
    const token = document.cookie.includes('auth_token=admin123')
    if (!token) router.push('/login')
    else fetchData()
  }, [])

  const saveData = async (updated: any) => {
    setStatus('Menyimpan...')
    const { error } = await supabase
      .from('sites')
      .update({ detail: updated })
      .eq('site_id', ConfigSB.supabase.siteid)

    if (!error) {
      setData(updated)
      setStatus('✅ Berhasil disimpan!')
    } else setStatus('❌ Gagal menyimpan.')
  }

  const handleAdd = async (e: any) => {
    e.preventDefault()
    if (!newMethod.id) return
    const updated = { ...data, [newMethod.id]: newMethod }
    await saveData(updated)
    setNewMethod({ id: '', nama: '', norek: '', bg: '', icon: '', qr: '' })
  }

  const handleDelete = async (id: string) => {
    const updated = { ...data }
    delete updated[id]
    await saveData(updated)
  }

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleAdd}>
        <h4>Tambah / Edit Metode</h4>
        <input placeholder="ID (cth: dana)" value={newMethod.id} onChange={e => setNewMethod({ ...newMethod, id: e.target.value })} required />
        <input placeholder="Nama" value={newMethod.nama} onChange={e => setNewMethod({ ...newMethod, nama: e.target.value })} required />
        <input placeholder="No Rek" value={newMethod.norek} onChange={e => setNewMethod({ ...newMethod, norek: e.target.value })} required />
        <input placeholder="Warna bg (opsional)" value={newMethod.bg} onChange={e => setNewMethod({ ...newMethod, bg: e.target.value })} />
        <input placeholder="Icon (fa-wallet)" value={newMethod.icon} onChange={e => setNewMethod({ ...newMethod, icon: e.target.value })} />
        <input placeholder="URL QR (opsional)" value={newMethod.qr} onChange={e => setNewMethod({ ...newMethod, qr: e.target.value })} />
        <br />
        <button type="submit">💾 Simpan</button>
      </form>

      <hr />

      <h4>Metode Pembayaran Tersimpan</h4>
      {Object.entries(data).map(([key, val]: any) => (
        <div key={key} style={{ marginBottom: 10 }}>
          <b>{val.nama || key}</b> - {val.norek}
          <button onClick={() => handleDelete(key)} style={{ marginLeft: 10, color: 'red' }}>❌ Hapus</button>
        </div>
      ))}

      {status && <p style={{ color: status.includes('✅') ? 'green' : 'red' }}>{status}</p>}

      <hr />
      <button onClick={async () => {
        await fetch('/api/logout')
        router.push('/login')
      }}>🔒 Logout</button>
    </div>
  )
}
