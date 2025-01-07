import { messageRouter } from './messageRouter.js'
import { userRouter } from './usersRouter.js'
import { Router } from 'express'

export const router = Router()

router.use('/users', userRouter)
router.use('/messages', messageRouter)
