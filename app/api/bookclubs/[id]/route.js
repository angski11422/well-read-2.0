// get patch and delete 
import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server'

export async function GET(request, {params}) {
    const id = params.id
    const bookclub = await prisma.bookclub.findUnique({
        where: {
            id: parseInt(id, 10),
        }
    })
    return NextResponse.json(bookclub)
}