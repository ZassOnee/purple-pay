'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://xxxx.supabase.co', // GANTI DENGAN URL KAMU
  'public-anon-key' // GANTI DENGAN ANON PUBLIC KEY
)

export default function HomePage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('sites')
        .select('*')
        .eq('site_id', 'site1') // GANTI SESUAI ID WEBSITE INI
        .single()

      if (error) console.error('Gagal ambil data:', error)
      else setData(data.detail)
    }

    fetchData()
  }, [])

  if (!data) return <div className="loading">Memuat data...</div>

  return (
    <main>
      <div className="container">
        <header>
          <div className="profile-container">
            <div className="profile-avatar">
              <img src={data.avatar || '/default-avatar.jpg'} alt="Profile" />
            </div>
            <div className="glowing-border" />
          </div>
          <h1>{data.nama || 'LightSecret'}</h1>
          <p className="subtitle">
            {data.subjudul || 'Solusi pembayaran digital premium dengan keamanan terbaik dan proses instan untuk transaksi di LightSecret Hosting'}
          </p>
        </header>

        <div className="payment-methods">
          {Object.entries(data).map(([key, val]: [string, any]) => {
            if (['nama', 'avatar', 'subjudul'].includes(key)) return null
            return (
              <div className="method-card" key={key} onClick={() => showModal(key)}>
                <div className="method-logo" style={{ backgroundColor: val.bg || '#9d4edd' }}>
                  <i className={`fas ${val.icon || 'fa-wallet'}`} style={{ fontSize: '2.5rem', color: 'white' }} />
                </div>
                <h3 className="method-title">{val.nama || key}</h3>
                <p className="method-desc">{val.desc || 'Metode pembayaran tersedia'}</p>
                <button className="btn">Lihat Nomor Pembayaran</button>
              </div>
            )
          })}
        </div>

        <footer>
          <p>&copy; 2025 LightSecret. Layanan Pembayaran Digital Premium.</p>
        </footer>
      </div>

      {/* Modals (masih statis, nanti bisa dibuat dinamis juga jika kamu mau) */}
    </main>
  )
}

function showModal(id: string) {
  alert(`Buka modal untuk metode: ${id}`)
}
