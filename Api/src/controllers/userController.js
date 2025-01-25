import { UserRepository } from '../Models/Repositorys/userRepository.js'

const userRepo = new UserRepository()

export async function getUsers (req, res) {
  try {
    res.status(200).json(await userRepo.getList())
  } catch (error) {
    console.error(error)
  }
}

export async function getUserById (req, res) {
  try {
    const { id } = req.params
    const user = await userRepo.getById(id)
    console.log(user)
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}

export async function createUser (req, res) {
  try {
    const { username, password, userImg } = req.body
    const user = await userRepo.create({ username, password, userImg })
    res.status(201).json(user)
  } catch (error) {
    console.error(error.message, error.cause.statusCode)
    res.status(error.cause.statusCode).json({ message: error.message, statusCode: error.cause.statusCode })
  }
}
