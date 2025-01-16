import { pool } from '../../lib/pgConnection.js'
import { Validation } from '../Validations/index.js'
import bcrypt from 'bcrypt'

export class UserRepository {
  constructor () {
    this.pool = pool
  }

  async getList () {
    const result = await this.pool.query('SELECT id, username, user_img FROM users')
    return result.rows
  }

  async getById (id) {
    try {
      const result = await this.pool.query('SELECT id, username, user_img FROM users WHERE (id = $1)', [id])
      return result.rows[0]
    } catch (error) {
      console.error(error)
      throw new Error(`Something went wrong ${error}`)
    }
  }

  async getByUsername (username) {
    try {
      const result = await this.pool.query('SELECT * FROM users WHERE (username = $1)', [username])
      return result.rows[0]
    } catch (error) {
      console.log(error)
      throw new Error('Something went wrong')
    }
  }

  async create ({ username, password, userImg }) {
    Validation.username(username)
    Validation.password(password)
    Validation.userImgUrl(userImg)
    if (await this.verifyByUsername(username)) { throw new Error(`The username '${username}' alredy exists`, { cause: { status: 409 } }) }

    let result
    const client = await this.pool.connect()
    try {
      await client.query('BEGIN')
      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)
      result = await client.query('INSERT INTO users (username, password, user_img) VALUES ($1, $2, $3) RETURNING id,username, user_img', [username, hashedPassword, userImg])
      await client.query('COMMIT')
    } catch (error) {
      await client.query('ROLLBACK')
      throw new Error("Couldn't create user", { cause: { status: 500, error } })
    }
    return result.rows[0]
  }

  async update ({ id, username, userImg }) {
    Validation.username(username)
    Validation.userImgUrl(userImg)
    const user = await this.getById(id)
    if (!user) throw new Error('User not found')
    if (this.verifyByUsername(username)) throw new Error('Username already exists')
    const newUser = { username: username ?? user.username, userImg }
    const result = await this.pool.query(
      `
      UPDATE users 
      SET (username, user_img) VALUES ($2,$3) 
      WHERE id = $1
      RETURNING id, username, user_img
      `, [newUser.username, newUser.userImg])
    return result.rows[0]
  }

  async delete (id) {
    const result = await this.pool.query(`
      DELETE FROM users where id = $1
      RETURNING id
      `)
    return result.rows[0]
  }

  async getMessages () {
    const textQuery =
    `
      SELECT users.username, users.user_img, messages.body, messages.created_at, messages.updated_at
      FROM users 
      INNER JOIN public.messages ON users.id = messages.userId;`
    const result = await this.pool.query(textQuery)
    if (result.rows.length === 0) throw new Error("Couldn't find any messages", { cause: { status: 404 } })
    return result.rows
  }

  async verifyByUsername (username) {
    const result = await this.pool.query(`
      SELECT * FROM users WHERE (username = $1)`, [username])
    console.log(result.rows.length === 0)
    if (result.rows.length === 0) return false
    return true
  }

  async login (username, password) {
    Validation.username(username)
    Validation.password(password)
    const user = await this.getByUsername(username)
    if (!user) throw new Error('User not found', { cause: { status: 404 } })
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('password no valid', { cause: { status: 401 } })
    const { password: _, ...publicUser } = user
    return publicUser
  }
}
