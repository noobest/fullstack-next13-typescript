import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//     const profession = await prisma.profession.create({
//     data: {
//       title: 'Software Engineer',
//       description: 'Sample description from db',
//     },
//   })
//   console.log(profession)
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