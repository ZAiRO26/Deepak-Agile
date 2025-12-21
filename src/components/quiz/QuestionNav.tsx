import React from 'react';

interface QuestionNavProps {
    total: number;
    current: number;
    answered: Record<number, boolean>;
    review: Record<number, boolean>;
    onJump: (index: number) => void;
}

const QuestionNav: React.FC<QuestionNavProps> = ({ total, current, answered, review, onJump }) => {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-cream-darker mb-6">
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-charcoal">Question Navigator</span>
                <div className="flex items-center gap-4 text-xs text-slate">
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-accent"></span>
                        Answered
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-amber-400"></span>
                        Review
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-cream-darker"></span>
                        Unanswered
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {Array.from({ length: total }, (_, i) => {
                    const isAnswered = answered[i];
                    const isReview = review[i];
                    const isCurrent = i === current;

                    let bgClass = 'bg-cream-dark text-charcoal hover:bg-cream-darker';
                    if (isAnswered) bgClass = 'bg-accent text-white hover:bg-accent-dark';
                    if (isReview) bgClass = 'bg-amber-400 text-white hover:bg-amber-500';
                    if (isCurrent) bgClass += ' ring-2 ring-navy ring-offset-2';

                    return (
                        <button
                            key={i}
                            onClick={() => onJump(i)}
                            className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${bgClass}`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionNav;
