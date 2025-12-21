import React from 'react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-navy"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/10 to-transparent"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent font-bold text-sm uppercase tracking-widest rounded-full">
              Get Started Today
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your <span className="text-accent">Organization?</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Let's discuss how we can accelerate your agile journey and unlock your team's full potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="btn-premium btn-accent group"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+919560782645"
                className="btn-premium btn-white group"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-white/70 text-sm font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/70 text-sm font-medium">Trained Professionals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/70 text-sm font-medium">Enterprise Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-white/70 text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
