import prisma from '../../lib/prisma';


export default async function getBookclubsById({params}) {
    const id = params.id
    const bookclub = await prisma.bookclub.findUnique({
        where: {
            id: parseInt(id, 10),
        }
    })
    return bookclub
}