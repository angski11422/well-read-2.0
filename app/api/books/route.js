import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";



export async function GET(request) {
    const books = await prisma.book.findMany()
    return NextResponse.json(books)
}

export async function POST(request) {
    const json = await request.json()

    const book = await prisma.book.create({
        data: json
    })
    return new NextResponse(JSON.stringify(book), { status: 201 })
}