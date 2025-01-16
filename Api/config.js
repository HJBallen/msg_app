import { config } from 'dotenv'
config()
export const {
  PORT = 3000, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, SECRET_JWT_KEY, NODE_ENV
} = process.env
