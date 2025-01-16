import express from 'express'
import bodyParser from 'body-parser'
import { router } from './src/Routes/index.js'
import cors from 'cors'

import { PORT } from './config.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api/v1/', router)

app.get('/', (req, res) => {
  res.send('hello world')
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
