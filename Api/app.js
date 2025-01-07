import express from 'express'
import bodyParser from 'body-parser'
import { router } from './src/Routes/index.js'

import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(bodyParser.json())
app.use('/api/v1/', router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
