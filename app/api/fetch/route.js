import { NextResponse } from "next/server";
import connectToDb from "@/lib/db";

export async function GET() {
  connectToDb();
  return NextResponse.json({ message: "get working" });
}
