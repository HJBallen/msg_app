import { UserRepository } from '../Models/Repositorys/userRepository.js'
import { SECRET_JWT_KEY, NODE_ENV } from '../../config.js'
import jwt from 'jsonwebtoken'

const userRepo = new UserRepository()

export async function login (req, res) {
  const { username, password } = req.body
  try {
    const user = await userRepo.login(username, password)
    const token = jwt.sign({ id: user.id }, SECRET_JWT_KEY, { expiresIn: 1000 * 60 * 15 })
    res.cookie('accesss_token', token, {
      httpOnly: true,
      secure: NODE_ENV === 'production',
      maxAge: 1000 * 60 * 30
    }).json({ user })
  } catch (err) {
    console.log(err)

    res.json(err)
  }
}
