import React from 'react';
import { BookOpen, Users, Target, TrendingUp, Lightbulb, Handshake } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'SAFe® Training',
      description: 'Comprehensive training programs for all SAFe® certifications including SSM, POPM, Leading SAFe®, and more.',
      features: ['Interactive workshops', 'Exam preparation', 'Practical case studies', 'Certification support']
    },
    {
      icon: Users,
      title: 'Agile Coaching',
      description: 'Personalized coaching for teams and individuals to implement agile practices effectively.',
      features: ['One-on-one mentoring', 'Team facilitation', 'Agile transformation', 'Leadership coaching']
    },
    {
      icon: Target,
      title: 'Organizational Consulting',
      description: 'Strategic guidance to help organizations adopt and scale agile methodologies.',
      features: ['Agile assessment', 'Transformation roadmap', 'Process optimization', 'Change management']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Data-driven approach to improve team productivity and delivery performance.',
      features: ['Metrics analysis', 'Flow optimization', 'Bottleneck identification', 'Continuous improvement']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Workshops',
      description: 'Creative sessions to foster innovation and problem-solving within agile teams.',
      features: ['Design thinking', 'Innovation games', 'Creative problem solving', 'Team building']
    },
    {
      icon: Handshake,
      title: 'Partnership Programs',
      description: 'Long-term partnerships to support ongoing agile journey and continuous learning.',
      features: ['Retainer support', 'Regular check-ins', 'Community access', 'Resource library']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agile coaching and training services designed to transform your organization 
            and accelerate your journey towards business agility.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group hover:-translate-y-2 transition-transform"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;