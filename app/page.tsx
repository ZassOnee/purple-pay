"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>💰 Pembayaran</h1>
      <img src="/qr.png" alt="QR Code" width="200" />
      <p>
        <strong>Nama:</strong> {data.nama}
      </p>
      <p>
        <strong>No. Rekening:</strong> {data.norek}
      </p>
      <p>
        <strong>Bank:</strong> {data.bank}
      </p>
    </div>
  );
}