import { NextResponse } from "next/server";
import { loginUser } from "../../controllers/user.controllers";

export const GET = async (req, res) => {
  const { email, password } = await req.json();
  const { token, user } = loginUser(email, password);
  return NextResponse.json({ status: "success", user: user });
};
