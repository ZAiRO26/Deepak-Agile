import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import { CheckCircle, XCircle, RotateCcw, Home, ChevronDown, ChevronUp } from 'lucide-react'

type ResultItem = {
  questionText: string
  selected: string
  correctAnswer: string
  explanation?: string
}

type QuizResults = {
  score: number
  total: number
  items: ResultItem[]
  quizTitle: string
}

export default function QuizSummary() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [results, setResults] = useState<QuizResults | null>(null)
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const stored = sessionStorage.getItem('quizResults')
    if (stored) {
      setResults(JSON.parse(stored))
    } else {
      navigate(`/quizzes/${slug}`)
    }
  }, [slug, navigate])

  if (!results) {
    return (
      <div className="min-h-screen bg-light">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const percentage = Math.round((results.score / results.total) * 100)
  const passed = percentage >= 70

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="min-h-screen bg-light">
      <Meta title="Quiz Results" description="View your quiz results and explanations." />
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Results Header */}
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center mb-8 border border-gray">
          <h1 className="font-display text-3xl font-bold text-charcoal mb-2">
            {results.quizTitle} - Results
          </h1>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mt-4 ${passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
            {passed ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            {passed ? 'PASSED' : 'NEEDS IMPROVEMENT'}
          </div>

          {/* Score Display */}
          <div className="mt-8">
            <div className="text-6xl font-bold text-charcoal">{percentage}%</div>
            <div className="text-slate mt-2">
              {results.score} correct out of {results.total} questions
            </div>
          </div>

          {/* Progress Ring */}
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-4 bg-gray rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${passed ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => {
                sessionStorage.removeItem('quizResults')
                navigate(`/quizzes/${slug}`)
              }}
              className="btn-premium btn-accent"
            >
              <RotateCcw className="mr-2 w-5 h-5" />
              Retake Quiz
            </button>
            <a href="/quizzes" className="btn-premium btn-outline-accent">
              <Home className="mr-2 w-5 h-5" />
              All Quizzes
            </a>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">
            Review Your Answers
          </h2>

          {results.items.map((item, index) => {
            const isCorrect = item.selected === item.correctAnswer
            const isExpanded = expandedItems[index]

            return (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${isCorrect ? 'border-green-200' : 'border-red-200'
                  }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                      {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    </div>
                    <span className="font-medium text-charcoal">
                      Question {index + 1}
                    </span>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate" /> : <ChevronDown className="w-5 h-5 text-slate" />}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray">
                    <p className="font-medium text-charcoal mb-4">{item.questionText}</p>

                    {item.selected && (
                      <div className={`mb-2 p-3 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                        <span className="text-sm text-slate">Your answer: </span>
                        <span className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {item.selected}
                        </span>
                      </div>
                    )}

                    {!isCorrect && (
                      <div className="mb-2 p-3 rounded-lg bg-green-50">
                        <span className="text-sm text-slate">Correct answer: </span>
                        <span className="font-medium text-green-700">{item.correctAnswer}</span>
                      </div>
                    )}

                    {item.explanation && (
                      <div className="mt-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                        <span className="text-sm font-semibold text-accent">Explanation: </span>
                        <span className="text-slate">{item.explanation}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}
