import { pool } from '../../lib/pgConnection.js'
import { UserRepository } from './userRepository.js'

const userRepo = new UserRepository()

export class MessageRepository {
  constructor () {
    this.pool = pool
  }

  async getList () {
    const result = await this.pool.query(`SELECT users.id as user_id, users.username, users.user_img, messages.body, messages.created_at, messages.updated_at
    FROM users, messages 
    WHERE (users.id = messages.userId)`)
    return result.rows
  }

  async getById (id) {
    try {
      const result = await this.pool.query('SELECT * FROM messages where (id = $1)', [id])
      return result.rows[0]
    } catch (error) {
      console.error(error, 'hello')
      throw new Error('Something went wrong', { cause: { status: 500, error } })
    }
  }

  async create ({ username, body }) {
    if (await userRepo.getByUsername(username) === undefined) throw new Error('User not found', { cause: { status: 404 } })
    const userId = await userRepo.getByUsername(username).id
    console.log(userId)

    const textQuery = `
      INSERT INTO messages 
      (userId, body) VALUES ($1,$2) RETURNING body`
    const client = await this.pool.connect()
    try {
      await client.query('BEGIN')
      const res = await client.query(textQuery, [userId, body])
      await client.query('COMMIT')
      console.log(res)
      return res.rows[0].body
    } catch (error) {
      console.log(error)
      await client.query('ROLLBACK')
      throw new Error("Couldn't write message", { cause: { status: 500 } })
    }
  }

  async update ({ id, body }) {
    const message = await this.getById(id)
    if (!message) throw new Error('Message not found')
    const result = await this.pool.query(
      `
      UPDATE messages 
      SET (body, updated_at) VALUES ($2,$3) 
      WHERE id = $1
      RETURNING *
      `, [body, new Date()])
    return result.rows[0]
  }

  async delete (id) {
    const result = await this.pool.query(`
      DELETE FROM messages where id = $1
      RETURNING id
      `)
    return result.rows[0]
  }

  async getUserMessages (userId) {
    const query = `SELECT users.id as user_id, users.username, users.user_img, messages.body, messages.created_at, messages.updated_at 
    FROM users, messages 
    WHERE (users.id = messages.userId AND users.id = $1)`

    const result = await this.pool.query(query, [userId])
    return result.rows
  }
}
