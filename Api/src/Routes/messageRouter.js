import { Router } from 'express'
import { createMessage, getMessageById, getMessagesList, getUserMessages } from '../controllers/messageController.js'

export const messageRouter = Router()

messageRouter.get('/', getMessagesList)
messageRouter.post('/create/', createMessage)
messageRouter.get('/:id', getMessageById)
messageRouter.get('/user/:userId', getUserMessages)
