import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const PostService = {

   findAll: async () => {
      return await prisma.post.findMany({
         where: { published: true },
         orderBy: { id: 'desc' }
      })
   },
   findOne: async (id: number) => {
      return await prisma.post.findUnique({
         where: { id }
      })
   },
   createPost: async (title: string, body: string, authorId: number) => {
      return await prisma.post.create({
         data: {
            title,
            body,
            authorId
         }
      })
   },
   update: async (id: number, published: boolean) => {
      return await prisma.post.update({
         where: { id },
         data: { published }
      })
   },
   delete: async (id: number) => {
      await prisma.post.delete({
         where: { id }
      })
   }

}