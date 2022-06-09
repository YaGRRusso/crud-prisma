import { UserService } from './../services/UserService';
import { Request, Response } from 'express'

export const all = async (req: Request, res: Response) => {
   let users = await UserService.findAll()

   return res.json({ users })
}

export const create = async (req: Request, res: Response) => {
   const { email, name, age } = req.body

   if (email && name) {
      let user = await UserService.create(email, name, parseInt(age))

      return res.json({ user })
   }

   return res.json({})
}