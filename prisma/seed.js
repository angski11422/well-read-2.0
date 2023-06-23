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