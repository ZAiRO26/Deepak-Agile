import { Router } from 'express'
import Quiz from '../models/Quiz'
import Question from '../models/Question'

const router = Router()

router.get('/:quizId', async (req, res) => {
  const { quizId } = req.params
  try {
    const quiz = await Quiz.findOne({ $or: [{ _id: quizId }, { slug: quizId }] }).populate('questions')
    if (!quiz) {
      const questions = Array.from({ length: 30 }, (_, i) => ({
        _id: String(i + 1),
        questionText: `How many Sprint Backlogs are used in Nexus? (${i + 1})`,
        options: [
          'Each team has its own Sprint Backlog and they compose a single Nexus Sprint Backlog',
          'Single Sprint Backlog',
          'It depends on the number of teams',
        ],
        correctAnswer: 'Each team has its own Sprint Backlog and they compose a single Nexus Sprint Backlog',
        category: 'Nexus Artifacts',
        explanation: 'Each team maintains its own Sprint Backlog; the Nexus Sprint Backlog aggregates them.',
      }))
      return res.json({ _id: quizId, title: 'SPS™ Preparation Quiz – Learning Mode', questions })
    }
    res.json(quiz)
  } catch (e) {
    res.status(500).json({ error: 'Failed to load quiz' })
  }
})

router.post('/submit', async (req, res) => {
  const { quizId, answers } = req.body as { quizId: string; answers: Record<number, string> }
  try {
    const quiz = await Quiz.findOne({ $or: [{ _id: quizId }, { slug: quizId }] }).populate('questions')
    const srcQuestions: any[] = quiz ? (quiz.questions as any[]) : Array.from({ length: 30 }, (_, i) => ({
      questionText: `How many Sprint Backlogs are used in Nexus? (${i + 1})`,
      correctAnswer: 'Each team has its own Sprint Backlog and they compose a single Nexus Sprint Backlog',
      explanation: 'Each team maintains its own Sprint Backlog; the Nexus Sprint Backlog aggregates them.',
    }))
    const items = srcQuestions.map((q: any, idx: number) => ({
      questionText: q.questionText,
      selected: answers?.[idx],
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }))
    const score = items.reduce((acc, it) => acc + (it.selected === it.correctAnswer ? 1 : 0), 0)
    res.json({ score, total: items.length, items })
  } catch (e) {
    res.status(500).json({ error: 'Failed to submit quiz' })
  }
})

export default router
