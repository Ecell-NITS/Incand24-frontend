import { NextResponse } from "next/server";
const { blogs1 } = require("@/models/Blog");

export async function GET() {
  console.log("Request to fetch data has been made.");
  try {
    return NextResponse.json(await blogs1.find({}));
  } catch (err) {
    return NextResponse.json(err);
  }
}
