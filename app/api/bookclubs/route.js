// rest api routes for get and post bookclubs
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request) {
    const bookclubs = await prisma.bookclub.findMany()
    return NextResponse.json(bookclubs)
}

export async function POST(request) {
    const json = await request.json()

    const club = await prisma.bookclub.create({
        data: json
    })
    return new NextResponse(JSON.stringify(club), { status: 201 })
}