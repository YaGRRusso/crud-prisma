import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
   await prisma.user.deleteMany({})
   await prisma.post.deleteMany({})

   const user = await prisma.user.create({
      data: {
         email: 'yagrrusso@gmail.com',
         name: 'Yago',
         age: 20
      }
   })

   const post = await prisma.post.create({
      data: {
         title: 'Title',
         body: 'Lorem Ipsum...',
         authorId: user.id
      }
   })
}

main()