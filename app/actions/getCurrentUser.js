"use server";

// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";

export async function getSession() {
  const { data: session, status } = useSession();
  return session;
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error) {
    return null;
  }
}
