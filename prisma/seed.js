const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userData = [
  {
    firstName: 'Alice',
    lastName: 'Doe',
    email: 'alice@prisma.io',
    username: 'alicedoe',
    password: 'password',
    
  },
  {
    firstName: 'Nilu',
    lastName: 'Doe',
    email: 'nilu@prisma.io',
    username: 'niludoe',
    password: 'password',
    
  },
  {
    firstName: 'Mahmoud',
    lastName: 'Doe',
    email: 'mahmoud@prisma.io',
    username: 'mahmouddoe',
    password: 'password',
   
  },
]


async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.upsert({
        where: {
            email: u.email
        },
        update: {},
        create: u
    })
    console.log(`Created user with id: ${user.id}`)
  }
    const bookclub = await prisma.bookclub.createMany({
        data: [
            {
                name: 'fakeclub',
                location: 'virtual',
                genre: 'romance',
                description: 'fake description',
                image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
             
            },
            {
                name: 'fakeclub2',
                location: 'virtual',
                genre: 'romance',
                description: 'fake description',
                image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
           
            }
        ]
    })
    console.log('Created bookclubs', bookclub.count)
  
    const book = await prisma.book.createMany({
        bookData: [
            {
                title: 'Fake Book',
                author: 'Angela P',
                coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
                subject: 'Romance'
            },
            {
                title: 'Fake Book 2',
                author: 'Nick P',
                coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
                subject: 'Romance'
            }
        ]
        })
        console.log('Created books', book.count)
    
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })