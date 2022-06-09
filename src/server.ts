import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import apiRoutes from './routes/api'

dotenv.config

const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: true }))

server.use(apiRoutes)


server.listen(process.env.PORT)