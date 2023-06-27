
import prisma from '../../lib/prisma';





export default async function getBookclubs() {
    const allBookclubs = await prisma.bookclub.findMany()

    const bookclubs = allBookclubs.map((bookclub) => ({
        ...bookclub
    }))

    return bookclubs    
  
}