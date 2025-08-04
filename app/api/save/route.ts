import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  const body = await req.json();
  const filePath = path.join(process.cwd(), "public", "data.json");

  try {
    await writeFile(filePath, JSON.stringify(body, null, 2));
    return Response.json({ message: "Berhasil disimpan!" });
  } catch (err) {
    return Response.json({ message: "Gagal menyimpan!" }, { status: 500 });
  }
}