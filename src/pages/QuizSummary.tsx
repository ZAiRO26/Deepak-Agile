import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Meta from '@/components/Meta'

type SummaryItem = {
  questionText: string
  selected?: string
  correctAnswer: string
  explanation?: string
}

export default function QuizSummary() {
  const location = useLocation() as any
  const { quizId, answers } = location.state || {}
  const [summary, setSummary] = useState<{ score: number; total: number; items: SummaryItem[] } | null>(null)

  useEffect(() => {
    const submit = async () => {
      const resp = await fetch('/api/quizzes/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quizId, answers }),
      })
      const data = await resp.json()
      setSummary(data)
    }
    if (quizId) submit()
  }, [quizId, answers])

  return (
    <div className="min-h-screen bg-white">
      <Meta title="Quiz Summary" description="View your quiz results and summary." />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <h1 className="text-2xl font-bold mb-4">Quiz Summary</h1>
        {!summary ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="mb-6 text-lg">{summary.score}/{summary.total} Correct</div>
            <div className="space-y-6">
              {summary.items.map((item, idx) => (
                <div key={idx} className="border rounded-md p-4">
                  <div className="font-semibold">Question {idx + 1}</div>
                  <div className="text-gray-800 mt-2">{item.questionText}</div>
                  <div className="mt-2 text-sm">Your answer: <span className="font-medium">{item.selected ?? '-'}</span></div>
                  <div className="text-sm">Correct answer: <span className="font-medium">{item.correctAnswer}</span></div>
                  {item.explanation && <div className="mt-2 text-sm text-gray-600">{item.explanation}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}