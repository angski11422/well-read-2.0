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

export async function PATCH(request, {params}) {
    const id = params.id
    const json = await request.json()

    const updateBook = await prisma.book.update({
        where: {
            id: parseInt(id, 10),
        }, 
        data: json
    })
    return NextResponse.json(updateBook)
}

export async function DELETE(request, {params}) {
    const id = params.id
    const deleteBook = await prisma.bookclub.delete({
        where: {
            id: parseInt(id, 10),
        }
    })
    return NextResponse.json(deleteBook)
}