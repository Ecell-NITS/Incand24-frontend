import { NextResponse } from "next/server";
export async function PUT() {
  return NextResponse.json({ message: "ok, put request working" });
}
