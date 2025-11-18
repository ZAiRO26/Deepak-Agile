import Navigation from "@/components/Navigation"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import Meta from "@/components/Meta"

export default function Quizzes() {
  const items = [
    { name: 'Scrum Master (LM)', href: '/quizzes/sm-lm' },
    { name: 'Scrum Master (RM)', href: '/quizzes/sm-rm' },
    { name: 'Product Owner (LM)', href: '/quizzes/po-lm' },
    { name: 'Product Owner (RM)', href: '/quizzes/po-rm' },
    { name: 'Scaled Scrum (LM)', href: '/quizzes/scaled-lm' },
    { name: 'SPS™ Preparation', href: '/quizzes/sps-prep' },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Meta title="Scrum Quizzes" description="Practice quizzes for Scrum certifications." />
      <Navigation />
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Scrum Quizzes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Practice quizzes to prepare for certifications and strengthen Scrum knowledge.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <a key={i.name} href={i.href} className="border rounded-lg p-6 hover:shadow-md transition">
              <div className="text-lg font-semibold text-gray-900">{i.name}</div>
              <div className="mt-2 text-sm text-gray-600">30 questions • Learning mode</div>
            </a>
          ))}
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  )
}