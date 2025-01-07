import pg from 'pg'
import { DB_HOST, DB_NAME, DB_USER, DB_PORT, DB_PASSWORD } from '../../config.js'

const { Pool } = pg

export const pool = new Pool(
  {
    port: DB_PORT,
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
  })
