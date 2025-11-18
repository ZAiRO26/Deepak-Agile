import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Question from '../models/Question'
import Quiz from '../models/Quiz'

dotenv.config()

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agile_quizzes'

async function run() {
  await mongoose.connect(uri)
  await Question.deleteMany({})
  await Quiz.deleteMany({ slug: { $in: ['sps-prep'] } })

  const questions = []
  for (let i = 1; i <= 30; i++) {
    const q = await Question.create({
      questionText: `How many Sprint Backlogs are used in Nexus? (${i})`,
      options: [
        'Each team has its own Sprint Backlog and they compose a single Nexus Sprint Backlog',
        'Single Sprint Backlog',
        'It depends on the number of teams',
      ],
      correctAnswer: 'Each team has its own Sprint Backlog and they compose a single Nexus Sprint Backlog',
      category: 'Nexus Artifacts',
      explanation: 'Each team maintains its own Sprint Backlog; the Nexus Sprint Backlog aggregates them.',
    })
    questions.push(q._id)
  }

  await Quiz.create({ title: 'SPS™ Preparation Quiz – Learning Mode', slug: 'sps-prep', questions })
  await mongoose.disconnect()
}

run().then(() => {
  console.log('Seed completed')
  process.exit(0)
})