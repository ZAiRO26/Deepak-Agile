import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import QuestionNav from '@/components/quiz/QuestionNav'
import QuestionDisplay from '@/components/quiz/QuestionDisplay'

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
    const load = async () => {
      const resp = await fetch(`/api/quizzes/${quizId}`)
      const data = await resp.json()
      setQuiz(data)
    }
    load()
  }, [quizId])

  if (!quiz) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">Loading...</div>
        <Footer />
      </div>
    )
  }

  const total = quiz.questions.length
  const q = quiz.questions[current]

  const onCheck = () => {
    if (current < total - 1) setCurrent(current + 1)
  }
  const onSkip = () => {
    if (current < total - 1) setCurrent(current + 1)
  }
  const onReview = () => {
    setReview({ ...review, [current]: !review[current] })
  }
  const onSummary = () => {
    navigate(`/quizzes/${slug}/summary`, { state: { quizId, answers: selected } })
  }

  return (
    <div className="min-h-screen bg-white">
      <Meta title={quiz.title} description={`Take the ${quiz.title} to test your knowledge.`} />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
        <QuestionNav
          total={total}
          current={current}
          answered={Object.fromEntries(Object.keys(selected).map((k) => [Number(k), true]))}
          review={review}
          onJump={(i) => setCurrent(i)}
        />
        <div className="mb-4 flex justify-end gap-2">
          <button onClick={onSummary} className="px-4 py-2 bg-gray-200 rounded-md">Quiz-summary</button>
        </div>
        <QuestionDisplay
          index={current}
          total={total}
          category={q.category}
          questionText={q.questionText}
          options={q.options}
          selected={selected[current]}
          onSelect={(v) => setSelected({ ...selected, [current]: v })}
        />
        <div className="mt-6 flex justify-between">
          <button onClick={onReview} className="px-4 py-2 bg-gray-200 rounded-md">Review question</button>
          <div className="flex gap-2">
            <button onClick={onSkip} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md">Skip question</button>
            <button onClick={onCheck} className="px-4 py-2 bg-blue-600 text-white rounded-md">Check</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}