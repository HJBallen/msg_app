import { Router } from 'express'
import { createUser, getUserById, getUsers } from '../controllers/userController.js'

export const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/create', createUser)
