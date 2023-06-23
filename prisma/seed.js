const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userData = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    password: 'password'

  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    password: 'password'
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    password: 'password'
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