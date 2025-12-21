import Navigation from "@/components/Navigation"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import Meta from "@/components/Meta"
import { BookOpen, ArrowRight, Clock, Users } from 'lucide-react'

export default function Quizzes() {
  const quizzes = [
    {
      name: 'Scrum Master (Learning Mode)',
      slug: 'sm-lm',
      questions: 30,
      duration: '45 min',
      level: 'Foundation',
      description: 'Practice Scrum Master concepts with instant feedback'
    },
    {
      name: 'Scrum Master (Real Mode)',
      slug: 'sm-rm',
      questions: 30,
      duration: '30 min',
      level: 'Foundation',
      description: 'Exam-like experience without answer reveals'
    },
    {
      name: 'Product Owner (Learning Mode)',
      slug: 'po-lm',
      questions: 30,
      duration: '45 min',
      level: 'Intermediate',
      description: 'Master Product Owner skills with explanations'
    },
    {
      name: 'Product Owner (Real Mode)',
      slug: 'po-rm',
      questions: 30,
      duration: '30 min',
      level: 'Intermediate',
      description: 'Test your Product Owner knowledge exam-style'
    },
    {
      name: 'Scaled Scrum (Learning Mode)',
      slug: 'scaled-lm',
      questions: 30,
      duration: '45 min',
      level: 'Advanced',
      description: 'Learn Nexus and scaled frameworks with guidance'
    },
    {
      name: 'SPS™ Preparation',
      slug: 'sps-prep',
      questions: 30,
      duration: '45 min',
      level: 'Advanced',
      description: 'Comprehensive prep for SPS™ certification exam'
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundation': return 'bg-emerald-100 text-emerald-700';
      case 'Intermediate': return 'bg-amber-100 text-amber-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Meta title="Scrum Quizzes" description="Practice quizzes for Scrum certifications. Prepare for PSM, PSPO, and SPS exams." />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Practice & Learn</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6">
            Scrum Quizzes
          </h1>
          <div className="section-divider"></div>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Practice quizzes to prepare for certifications and strengthen your Scrum knowledge.
            Choose learning mode for instant feedback or real mode for exam simulation.
          </p>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz) => (
              <a
                key={quiz.slug}
                href={`/quizzes/${quiz.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-soft border border-cream-darker hover:shadow-premium hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-accent-dark group-hover:to-accent transition-all duration-300">
                  <BookOpen className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                  {quiz.name}
                </h3>

                {/* Description */}
                <p className="text-slate text-sm mb-4">
                  {quiz.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                  <div className="flex items-center text-slate">
                    <BookOpen className="w-4 h-4 mr-1 text-accent" />
                    {quiz.questions} questions
                  </div>
                  <div className="flex items-center text-slate">
                    <Clock className="w-4 h-4 mr-1 text-accent" />
                    {quiz.duration}
                  </div>
                </div>

                {/* Level Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(quiz.level)}`}>
                    {quiz.level}
                  </span>
                  <span className="text-accent-dark font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    Start Quiz <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
