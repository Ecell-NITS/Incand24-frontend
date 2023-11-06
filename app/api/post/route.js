import { NextResponse, NextRequest } from "next/server";

const UserModel = require("@/models/Email");
export async function POST() {
  try {
    const user = NextRequest.body;
    const newUser = new UserModel(user);
    await newUser.save();
    return NextResponse.json({ message: "ok, email saved" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
