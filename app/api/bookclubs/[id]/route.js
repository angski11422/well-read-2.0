// get patch and delete 
import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server'




export async function PATCH(request, {params}) {
    const id = params.id
    const json = await request.json()

    const updateClub = await prisma.bookclub.update({
        where: {
            id: parseInt(id, 10),
        }, 
        data: json
    })
    return NextResponse.json(updateClub)
}

export async function DELETE(request, {params}) {
    const id = params.id
    const deleteClub = await prisma.bookclub.delete({
        where: {
            id: parseInt(id, 10),
        }
    })
    return NextResponse.json(deleteClub)
}