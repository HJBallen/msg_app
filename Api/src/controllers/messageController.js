import { MessageRepository } from '../Models/Repositorys/messageRepository.js'

const messageRepo = new MessageRepository()

export async function getMessagesList (req, res) {
  try {
    res.status(200).json(await messageRepo.getList())
  } catch (error) {
    console.error(error)
  }
}

export async function getMessageById (req, res) {
  try {
    const { id } = req.params
    const message = await messageRepo.getById(id)
    if (message === undefined) throw new Error('Message not Found', { cause: { status: 404 } })

    res.status(200).json(message)
  } catch (error) {
    console.error(error)
    res.status(error.cause.status).json({ status: error.cause.estatus, message: error.message })
  }
}

export async function createMessage (req, res) {
  try {
    const { userId, body } = req.body
    const message = await messageRepo.create({ userId, body })
    res.status(201).json(message)
  } catch (error) {
    console.error(error.message, error.cause.status)
    if (error.cause.status === 409) {
      res.status(409).json({ message: error.message })
      return false
    }
    res.status(500).json({ message: error.message })
  }
}

export async function getUserMessages (req, res) {
  try {
    const { userId } = req.params
    const result = await messageRepo.getUserMessages(userId)
    console.log(result)
    if (result === undefined) throw new Error('Messages not found for the given user', { cause: { status: 404 } })
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(error.cause.status).json({ statusCode: error.cause.status, message: error.message })
  }
}
