import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import quizzesRouter from './routes/quizzes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agile_quizzes'
console.log('Starting Quiz API')
mongoose.connect(uri).then(() => console.log('Mongo connected')).catch(() => console.log('Mongo connect failed'))

app.use('/api/quizzes', quizzesRouter)

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Quiz API listening on http://localhost:${port}`)
})