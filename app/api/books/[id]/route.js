import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";



export async function GET(request, {params}) {
    const id = params.id
    const book = await prisma.book.findUnique({
        where: {
            id: parseInt(id, 10),
        }
    })
    return NextResponse.json(book)
}