'use client'

import { useEffect } from 'react'

export default function Modal({
  open,
  onClose,
  method,
}: {
  open: boolean
  onClose: () => void
  method: {
    nama: string
    nomor: string
    qr?: string
    bg?: string
  } | null
}) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [onClose])

  if (!open || !method) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[var(--card-bg)] p-6 rounded-2xl border border-[var(--accent)] max-w-sm w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-[var(--accent)] transition"
        >
          ✕
        </button>

        {method.qr ? (
          <div className="w-full aspect-square mb-4 bg-[#1a1a2e] rounded-xl flex items-center justify-center overflow-hidden">
            <img src={method.qr} alt="QR" className="w-full h-full object-contain" />
          </div>
        ) : null}

        <h2 className="text-xl font-bold text-[var(--neon)] text-center mb-2">
          {method.nama}
        </h2>
        <p className="text-sm text-center mb-3">Nomor akun untuk pembayaran:</p>

        <div className="account-number">{method.nomor}</div>

        <button
          className="btn copy-btn mt-4"
          onClick={() => {
            navigator.clipboard.writeText(method.nomor)
            const notif = document.getElementById('notification')
            notif?.classList.add('show')
            setTimeout(() => notif?.classList.remove('show'), 3000)
          }}
        >
          Salin Nomor
        </button>
      </div>
    </div>
  )
}
