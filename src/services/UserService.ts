import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const UserService = {

   findAll: async () => {
      return await prisma.user.findMany({})
   },
   findOne: async (id: number) => {
      return await prisma.user.findUnique({
         where: { id }
      })
   },
   create: async (name: string, email: string, age?: number) => {
      try {
         return await prisma.user.create({
            data: { email, name, age }
         })
      } catch (err) {
         return err
      }
   }
}