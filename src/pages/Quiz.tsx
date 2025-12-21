import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import QuestionNav from '@/components/quiz/QuestionNav'
import QuestionDisplay from '@/components/quiz/QuestionDisplay'
import { ArrowRight, SkipForward, BookmarkPlus, ClipboardList } from 'lucide-react'
import { scrumGuideQuestions, ScrumQuestion } from '@/data/scrumGuideQuestions'

type Question = {
  _id: string
  questionText: string
  options: string[]
  correctAnswer: string
  category: string
  explanation?: string
}

type Quiz = {
  _id: string
  title: string
  questions: Question[]
}

// Quiz configurations
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

// Generate quiz from client-side data
const getQuizData = (quizId: string): Quiz => {
  const config = quizConfigs[quizId] || quizConfigs['sps-prep']

  // Filter questions by category
  let filtered = scrumGuideQuestions.filter(q => config.categories.includes(q.category))

  // If not enough questions, use all
  if (filtered.length < 20) {
    filtered = scrumGuideQuestions
  }

  // Shuffle and take 25 questions (using seeded random based on quizId for consistency)
  const seed = quizId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const shuffled = [...filtered].sort((a, b) => {
    const hashA = (seed * a.questionText.length) % 100
    const hashB = (seed * b.questionText.length) % 100
    return hashA - hashB
  })

  const questions: Question[] = shuffled.slice(0, 25).map((q, i) => ({
    _id: String(i + 1),
    questionText: q.questionText,
    options: q.options,
    correctAnswer: q.correctAnswer,
    category: q.category,
    explanation: q.explanation,
  }))

  return {
    _id: quizId,
    title: config.title,
    questions
  }
}

const slugToQuizId: Record<string, string> = {
  'sps-prep': 'sps-prep',
  'sm-lm': 'sm-lm',
  'sm-rm': 'sm-rm',
  'po-lm': 'po-lm',
  'po-rm': 'po-rm',
  'scaled-lm': 'scaled-lm',
}

export default function QuizPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<Record<number, string>>({})
  const [review, setReview] = useState<Record<number, boolean>>({})

  const quizId = useMemo(() => (slug ? slugToQuizId[slug] ?? slug : 'sps-prep'), [slug])

  useEffect(() => {
    // Load quiz data from client-side (works on static hosting)
    const quizData = getQuizData(quizId)
    setQuiz(quizData)
  }, [quizId])

  if (!quiz) {
    return (
      <div className="min-h-screen bg-light">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate">Loading quiz...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const total = quiz.questions.length
  const q = quiz.questions[current]
  const answered = Object.keys(selected).length
  const progress = Math.round((answered / total) * 100)

  const onCheck = () => {
    if (current < total - 1) setCurrent(current + 1)
  }
  const onSkip = () => {
    if (current < total - 1) setCurrent(current + 1)
  }
  const onReview = () => {
    setReview(prev => ({ ...prev, [current]: !prev[current] }))
  }

  const handleSubmit = () => {
    // Store results in sessionStorage for summary page
    const results = quiz.questions.map((question, idx) => ({
      questionText: question.questionText,
      selected: selected[idx],
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
    }))
    const score = results.reduce((acc, r) => acc + (r.selected === r.correctAnswer ? 1 : 0), 0)

    sessionStorage.setItem('quizResults', JSON.stringify({
      score,
      total: quiz.questions.length,
      items: results,
      quizTitle: quiz.title
    }))

    navigate(`/quizzes/${slug}/summary`)
  }

  return (
    <div className="min-h-screen bg-light">
      <Meta title={quiz.title} description={`Take the ${quiz.title} quiz to test your Scrum knowledge.`} />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Quiz</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-2">{quiz.title}</h1>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-slate mb-2">
              <span>{answered} of {total} answered</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Question Navigator */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <QuestionNav
              total={total}
              current={current}
              answered={Object.keys(selected).reduce((acc, key) => ({ ...acc, [parseInt(key)]: true }), {})}
              review={review}
              onJump={setCurrent}
            />
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-gray">
              {/* Question Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-1 bg-accent/10 text-accent font-bold text-sm rounded-full">
                  Question {current + 1} of {total}
                </span>
                <span className="text-sm text-slate">{q.category}</span>
              </div>

              {/* Question Display */}
              <QuestionDisplay
                index={current}
                total={total}
                category={q.category}
                questionText={q.questionText}
                options={q.options}
                selected={selected[current]}
                onSelect={(ans) => setSelected(prev => ({ ...prev, [current]: ans }))}
              />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray">
                <button
                  onClick={onCheck}
                  disabled={!selected[current] || current >= total - 1}
                  className="btn-premium btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Question
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                <button
                  onClick={onSkip}
                  disabled={current >= total - 1}
                  className="btn-premium btn-outline-accent disabled:opacity-50"
                >
                  <SkipForward className="mr-2 w-5 h-5" />
                  Skip
                </button>

                <button
                  onClick={onReview}
                  className={`btn-premium ${review[current] ? 'bg-yellow-500 text-white border-yellow-500' : 'btn-outline-accent'}`}
                >
                  <BookmarkPlus className="mr-2 w-5 h-5" />
                  {review[current] ? 'Marked' : 'Mark for Review'}
                </button>

                {/* Always show Submit button with unanswered warning */}
                <button
                  onClick={handleSubmit}
                  disabled={answered < total}
                  className={`btn-premium ml-auto ${answered === total
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-400 text-white cursor-not-allowed'
                    }`}
                  title={answered < total ? `Answer all questions to submit (${total - answered} remaining)` : 'Submit your quiz'}
                >
                  <ClipboardList className="mr-2 w-5 h-5" />
                  {answered === total ? 'Submit Quiz' : `Submit (${total - answered} left)`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
