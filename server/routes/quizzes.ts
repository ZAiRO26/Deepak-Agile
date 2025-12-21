import { Router } from 'express'
import Quiz from '../models/Quiz'
import Question from '../models/Question'
import { scrumGuideQuestions, ScrumQuestion } from '../data/scrumGuideQuestions'

const router = Router()

// Quiz titles and configurations
const quizConfigs: Record<string, { title: string; categories: string[] }> = {
  'sm-lm': {
    title: 'Scrum Master - Learning Mode',
    categories: ['Scrum Fundamentals', 'Scrum Values', 'Scrum Roles', 'Scrum Events', 'Scrum Artifacts']
  },
  'sm-rm': {
    title: 'Scrum Master - Real Mode',
    categories: ['Scrum Fundamentals', 'Scrum Values', 'Scrum Roles', 'Scrum Events', 'Scrum Artifacts']
  },
  'po-lm': {
    title: 'Product Owner - Learning Mode',
    categories: ['Scrum Roles', 'Scrum Artifacts', 'Scrum Events']
  },
  'po-rm': {
    title: 'Product Owner - Real Mode',
    categories: ['Scrum Roles', 'Scrum Artifacts', 'Scrum Events']
  },
  'scaled-lm': {
    title: 'Scaled Scrum - Learning Mode',
    categories: ['Scrum Fundamentals', 'Scrum Roles', 'Scrum Events']
  },
  'sps-prep': {
    title: 'SPS™ Preparation Quiz',
    categories: ['Scrum Fundamentals', 'Scrum Values', 'Scrum Roles', 'Scrum Events', 'Scrum Artifacts']
  },
}

// Get questions for a specific quiz based on configuration
const getQuestionsForQuiz = (quizId: string, count: number = 30): ScrumQuestion[] => {
  const config = quizConfigs[quizId] || quizConfigs['sps-prep']

  // Filter questions by category
  let filtered = scrumGuideQuestions.filter(q => config.categories.includes(q.category))

  // If not enough questions, use all
  if (filtered.length < count) {
    filtered = scrumGuideQuestions
  }

  // Shuffle and take required count
  const shuffled = filtered.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Format questions for API response
const formatQuestions = (questions: ScrumQuestion[]) => {
  return questions.map((q, i) => ({
    _id: String(i + 1),
    questionText: q.questionText,
    options: q.options,
    correctAnswer: q.correctAnswer,
    category: q.category,
    explanation: q.explanation,
  }))
}

router.get('/:quizId', async (req, res) => {
  const { quizId } = req.params
  try {
    // Try to get from database first
    const quiz = await Quiz.findOne({ $or: [{ _id: quizId }, { slug: quizId }] }).populate('questions')
    if (quiz && quiz.questions && quiz.questions.length > 0) {
      return res.json(quiz)
    }

    // Fallback to Scrum Guide questions
    const config = quizConfigs[quizId] || quizConfigs['sps-prep']
    const questions = formatQuestions(getQuestionsForQuiz(quizId, 30))

    return res.json({
      _id: quizId,
      title: config.title,
      questions
    })
  } catch (e) {
    // On any error, return Scrum Guide questions
    console.log('Quiz API: Returning Scrum Guide questions due to error:', e)
    const config = quizConfigs[quizId] || quizConfigs['sps-prep']
    const questions = formatQuestions(getQuestionsForQuiz(quizId, 30))

    res.json({
      _id: quizId,
      title: config.title,
      questions
    })
  }
})

router.post('/submit', async (req, res) => {
  const { quizId, answers } = req.body as { quizId: string; answers: Record<number, string> }
  try {
    let srcQuestions: any[]

    try {
      const quiz = await Quiz.findOne({ $or: [{ _id: quizId }, { slug: quizId }] }).populate('questions')
      if (quiz && quiz.questions && (quiz.questions as any[]).length > 0) {
        srcQuestions = quiz.questions as any[]
      } else {
        srcQuestions = formatQuestions(getQuestionsForQuiz(quizId, 30))
      }
    } catch {
      srcQuestions = formatQuestions(getQuestionsForQuiz(quizId, 30))
    }

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