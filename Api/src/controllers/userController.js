import { UserRepository } from '../Models/Repositorys/userRepository.js'

const userService = new UserRepository()

export async function getUsers (req, res) {
  try {
    res.status(200).json(await userService.getList())
  } catch (error) {
    console.error(error)
  }
}

export async function getUserById (req, res) {
  try {
    const { id } = req.params
    const user = await userService.getById(id)
    console.log(user)
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}

export async function createUser (req, res) {
  try {
    const { username, password, userImg } = req.body
    const user = await userService.create({ username, password, userImg })
    res.status(201).json(user)
  } catch (error) {
    console.error(error.message, error.cause.status)
    if (error.cause.status === 409) {
      res.status(409).json({ message: error.message })
    }
  }
}
