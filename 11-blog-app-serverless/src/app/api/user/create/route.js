import { NextResponse } from "next/server";
import { createUser } from "../../controllers/user.controllers";

export const GET = async (req, res) => {
    console.log("GET");
    return NextResponse.json({ data: { message: "Hello World" } })
}

export const POST = async (req, res) => {

    const {name , email , password} = await req.json();
    const user = await createUser(name , email , password);

    return NextResponse.json(user);
}
