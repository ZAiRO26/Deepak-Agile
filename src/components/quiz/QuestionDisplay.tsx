import React from 'react';
import { CheckCircle } from 'lucide-react';

interface QuestionDisplayProps {
  index: number;
  total: number;
  category: string;
  questionText: string;
  options: string[];
  selected?: string;
  onSelect: (value: string) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  index,
  total,
  category,
  questionText,
  options,
  selected,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-soft border border-cream-darker">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="px-3 py-1 bg-cream rounded-full text-sm font-medium text-accent-dark">
          {category}
        </span>
        <span className="text-sm text-slate">
          Question <span className="font-semibold text-charcoal">{index + 1}</span> of {total}
        </span>
      </div>

      {/* Question Text */}
      <h2 className="font-display text-xl font-semibold text-charcoal mb-8 leading-relaxed">
        {questionText}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, idx) => {
          const isSelected = selected === option;
          const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D...

          return (
            <button
              key={idx}
              onClick={() => onSelect(option)}
              className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 group ${isSelected
                  ? 'border-accent bg-accent/5 shadow-soft'
                  : 'border-cream-darker hover:border-accent/50 hover:bg-cream'
                }`}
            >
              {/* Option Letter */}
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-all duration-200 ${isSelected
                  ? 'bg-accent text-white'
                  : 'bg-cream-dark text-charcoal group-hover:bg-accent/20 group-hover:text-accent-dark'
                }`}>
                {optionLetter}
              </span>

              {/* Option Text */}
              <span className={`flex-1 pt-1 ${isSelected ? 'text-charcoal font-medium' : 'text-slate'}`}>
                {option}
              </span>

              {/* Check Icon */}
              {isSelected && (
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 animate-scale-in" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionDisplay;
