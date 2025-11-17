import React from 'react';
import { Clock, Users, Award, CheckCircle, Calendar, ArrowRight } from 'lucide-react';

const Trainings: React.FC = () => {
  const trainings = [
    {
      title: 'SAFe® Scrum Master (SSM)',
      description: 'Learn to facilitate Agile development, foster collaboration, and manage conflicts in a SAFe® environment.',
      duration: '2 Days',
      level: 'Beginner',
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
        'Advanced Scrum Master certification',
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
      level: 'Beginner',
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
        'SAFe® DevOps Practitioner certification',
        'Continuous delivery pipeline',
        'Automation strategies',
        'Release management'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular SAFe® Trainings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of SAFe® certification trainings designed to accelerate 
            your agile journey and enhance your professional credentials.
          </p>
        </div>

        {/* Trainings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <div
              key={index}
              className={`relative rounded-xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                training.popular
                  ? 'border-blue-600 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              {training.popular && (
                <div className="absolute -top-3 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {training.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {training.description}
                </p>
              </div>

              {/* Training Details */}
              <div className="flex items-center justify-between mb-6 text-sm">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {training.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  {training.level}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {training.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">
                    {training.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">per person</span>
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for Corporate Training?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer customized corporate training programs for your entire organization. 
            Get special pricing and flexible scheduling for teams of 10 or more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Corporate Training
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;