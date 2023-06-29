
import { getServerSession } from 'next-auth';
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server'




export async function POST(request) {


    const json = await request.json()

    const club = await prisma.bookclub.create({
        data: json
    })
    return new NextResponse(JSON.stringify(club), { status: 201 })
}