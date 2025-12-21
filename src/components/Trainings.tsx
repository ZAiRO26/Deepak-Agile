import React from 'react';
import { Clock, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Trainings: React.FC = () => {
  const trainings = [
    {
      title: 'SAFe® Scrum Master (SSM)',
      description: 'Learn to facilitate Agile development, foster collaboration, and manage conflicts in a SAFe® environment.',
      duration: '2 Days',
      level: 'Foundation',
      price: '₹24,999',
      features: [
        'SAFe® Scrum Master certification',
        'Facilitation techniques',
        'Team coaching skills',
        'Exam preparation included'
      ],
      popular: true
    },
    {
      title: 'SAFe® Product Owner/Product Manager (POPM)',
      description: 'Master the skills to deliver value through effective product management and ownership in SAFe®.',
      duration: '2 Days',
      level: 'Intermediate',
      price: '₹26,999',
      features: [
        'POPM certification',
        'Product strategy',
        'Backlog management',
        'Customer focus techniques'
      ],
      popular: false
    },
    {
      title: 'Leading SAFe® (SA)',
      description: 'Become a Lean-Agile leader and learn how to lead Agile transformation in your organization.',
      duration: '2 Days',
      level: 'Advanced',
      price: '₹29,999',
      features: [
        'SAFe® Agilist certification',
        'Lean-Agile leadership',
        'Portfolio management',
        'Transformation roadmap'
      ],
      popular: false
    },
    {
      title: 'SAFe® Advanced Scrum Master (SASM)',
      description: 'Advanced skills for experienced Scrum Masters to scale Agile across multiple teams.',
      duration: '2 Days',
      level: 'Advanced',
      price: '₹27,999',
      features: [
        'Advanced SM certification',
        'Multi-team coordination',
        'DevOps practices',
        'Kanban integration'
      ],
      popular: false
    },
    {
      title: 'SAFe® for Teams (SP)',
      description: 'Build the skills needed to become a high-performing team member in a SAFe® organization.',
      duration: '2 Days',
      level: 'Foundation',
      price: '₹23,999',
      features: [
        'SAFe® Practitioner certification',
        'Team collaboration',
        'Agile planning',
        'Continuous improvement'
      ],
      popular: false
    },
    {
      title: 'SAFe® DevOps (SDP)',
      description: 'Learn to implement DevOps practices and create a culture of shared responsibility.',
      duration: '2 Days',
      level: 'Intermediate',
      price: '₹25,999',
      features: [
        'SAFe® DevOps certification',
        'CI/CD pipeline',
        'Automation strategies',
        'Release management'
      ],
      popular: false
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundation': return 'bg-emerald-100 text-emerald-700';
      case 'Intermediate': return 'bg-amber-100 text-amber-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Certification Programs</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
            SAFe® Training Programs
          </h2>
          <div className="section-divider"></div>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Choose from our comprehensive range of SAFe® certification trainings designed to accelerate
            your agile journey and enhance your professional credentials.
          </p>
        </div>

        {/* Trainings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-premium hover:-translate-y-2 ${training.popular
                ? 'border-2 border-accent shadow-accent'
                : 'border border-cream-darker shadow-soft'
                }`}
            >
              {/* Popular Badge */}
              {training.popular && (
                <div className="absolute -top-4 left-6 badge-premium">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {training.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {training.description}
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="flex items-center text-slate">
                  <Clock className="h-4 w-4 mr-1.5 text-accent" />
                  {training.duration}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(training.level)}`}>
                  {training.level}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {training.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-slate">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-cream-darker">
                <div>
                  <span className="font-display text-2xl font-bold text-charcoal">
                    {training.price}
                  </span>
                  <span className="text-sm text-slate ml-1">/ person</span>
                </div>
                <a
                  href="/contact"
                  className={`btn-premium ${training.popular ? 'btn-accent' : 'btn-outline-accent'} !py-2 !px-4 text-sm`}
                >
                  Enroll
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Training CTA */}
        <div className="mt-20 bg-navy rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              Looking for Corporate Training?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We offer customized corporate training programs for your entire organization.
              Get special pricing and flexible scheduling for teams of 10 or more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-premium bg-accent text-navy hover:bg-accent-light">
                Schedule Corporate Training
              </a>
              <a href="/contact" className="btn-premium border-2 border-white text-white hover:bg-white/10">
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
