import React from 'react'

type Props = {
  index: number
  total: number
  category: string
  questionText: string
  options: string[]
  selected?: string
  onSelect: (value: string) => void
}

export default function QuestionDisplay({ index, total, category, questionText, options, selected, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">Question {index + 1} of {total}</div>
      <div className="text-lg font-semibold">1. Question</div>
      <div className="text-sm text-gray-700">Category: {category}</div>
      <p className="text-gray-900">{questionText}</p>
      <div className="space-y-3">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-3 bg-gray-50 p-3 rounded-md border">
            <input
              type="radio"
              name={`q-${index}`}
              value={opt}
              checked={selected === opt}
              onChange={(e) => onSelect(e.target.value)}
            />
            <span className="text-gray-800">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}