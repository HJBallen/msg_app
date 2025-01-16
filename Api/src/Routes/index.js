import { authRouter } from './authRouter.js'
import { messageRouter } from './messageRouter.js'
import { userRouter } from './usersRouter.js'
import { Router } from 'express'

export const router = Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/messages', messageRouter)
