import React from 'react'

type Props = {
  total: number
  current: number
  answered: Record<number, boolean>
  review: Record<number, boolean>
  onJump: (index: number) => void
}

export default function QuestionNav({ total, current, answered, review, onJump }: Props) {
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      {Array.from({ length: total }, (_, i) => i).map((i) => {
        const isCurrent = i === current
        const isAnswered = !!answered[i]
        const isReview = !!review[i]
        const base = 'w-10 h-10 flex items-center justify-center rounded-md border text-sm'
        const color = isCurrent
          ? 'bg-blue-600 text-white border-blue-600'
          : isAnswered
          ? 'bg-green-100 text-green-700 border-green-300'
          : isReview
          ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
          : 'bg-white text-gray-700 border-gray-300'
        return (
          <button key={i} onClick={() => onJump(i)} className={`${base} ${color}`}>
            {i + 1}
          </button>
        )
      })}
      <div className="flex items-center gap-4 ml-4">
        <div className="flex items-center gap-2 text-sm text-green-700"><span className="w-3 h-3 bg-green-500 rounded-sm"></span>Answered</div>
        <div className="flex items-center gap-2 text-sm text-yellow-700"><span className="w-3 h-3 bg-yellow-400 rounded-sm"></span>Review</div>
      </div>
    </div>
  )
}