import { Request, Response } from "express";
import { PostService } from "../services/PostService";
import { UserService } from "../services/UserService";

export const all = async (req: Request, res: Response) => {
   let posts = await PostService.findAll()

   return res.json({ posts })
}

export const one = async (req: Request, res: Response) => {
   const id = parseInt(req.params.id)

   let post = await PostService.findOne(id)

   return res.json({ post })
}

export const create = async (req: Request, res: Response) => {
   const { title, body, author } = req.body

   if (title && body && author) {
      let user = await UserService.findOne(parseInt(author))
      if (user) {
         let post = await PostService.createPost(title, body, parseInt(author))
         return res.json({ post })
      }
   }
   return res.json({})
}

export const toggle = async (req: Request, res: Response) => {
   const id = parseInt(req.params.id)

   let post = await PostService.findOne(id)
   if (post) {
      let updatedPost = await PostService.update(id, !post.published)
      return res.json({ updatedPost })
   }

   return res.json({})
}

export const exclude = async (req: Request, res: Response) => {
   const id = parseInt(req.params.id)

   await PostService.delete(id)

   return res.json({ post: 'deleted' })
}