import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, email, passWord } = body;

  if (!name || !email || !passWord) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    throw new Error("Email already exists");
  }

  const password = await bcrypt.hash(passWord, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return NextResponse.json(user);
}
