import React from 'react';
import { Target, Users, BookOpen, BarChart3, ArrowRight, Lightbulb, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Agile Transformation',
      description: 'End-to-end enterprise agile transformation with SAFe® methodology',
      features: ['Strategic roadmap', 'Change management', 'Value stream optimization'],
    },
    {
      icon: Users,
      title: 'Team Coaching',
      description: 'Empowering teams to achieve self-organization and high performance',
      features: ['Scrum mastery', 'Kanban flow', 'Team dynamics'],
    },
    {
      icon: BookOpen,
      title: 'SAFe® Training',
      description: 'Certified training programs for all SAFe® roles and configurations',
      features: ['SA, SSM, POPM', 'LPM, SPC', 'RTE, Architect'],
    },
    {
      icon: BarChart3,
      title: 'Metrics & OKRs',
      description: 'Data-driven agile improvement with meaningful metrics',
      features: ['Flow metrics', 'OKR alignment', 'Value delivery'],
    },
    {
      icon: Lightbulb,
      title: 'Executive Coaching',
      description: 'Leadership coaching for lean-agile mindset adoption',
      features: ['Lean portfolio', 'Servant leadership', 'Organizational design'],
    },
    {
      icon: Rocket,
      title: 'DevOps Enablement',
      description: 'Accelerate delivery with continuous integration and deployment',
      features: ['CI/CD pipelines', 'Release on demand', 'Built-in quality'],
    },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest rounded-full mb-4">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Expert Agile Services
          </h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Comprehensive solutions to accelerate your organization's agile journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-gray hover:border-accent shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-slate mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="/contact"
                className="inline-flex items-center text-sm font-bold text-accent group-hover:text-accent-dark transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
