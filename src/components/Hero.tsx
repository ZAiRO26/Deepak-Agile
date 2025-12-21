import React, { useEffect, useState } from 'react';
import { ArrowRight, Award, CheckCircle, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const credentials = ['SAFe® SPC', 'CSM®', 'ICAgile', 'PMP®'];

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-navy"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Enterprise Agile Coach</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Transform Your
                <span className="block mt-2 text-accent">
                  Agile Journey
                </span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                Expert-led SAFe® training and coaching to unlock enterprise business agility.
                Elevate your teams to deliver exceptional value at scale.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3">
              {credentials.map((cred, index) => (
                <div
                  key={cred}
                  className={`px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-semibold text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 inline mr-2 text-accent" />
                  {cred}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="btn-premium btn-accent group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/trainings"
                className="btn-premium btn-white group"
              >
                <Play className="mr-2 w-5 h-5" />
                View Trainings
              </a>
            </div>
          </div>

          {/* Right Content - Coach Portrait */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            {/* Portrait Container */}
            <div className="relative mx-auto w-full max-w-md">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 via-transparent to-accent/20 rounded-3xl"></div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-white/10 shadow-2xl">
                <img
                  src="/deepak-portrait.jpg"
                  alt="Deepak Nailwal - Enterprise Agile Coach"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-premium p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">8+</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Years</div>
                    <div className="text-xs text-slate">Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Certified Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-accent animate-pulse-accent">
                SAFe® Certified
              </div>

              {/* Floating Trained Badge */}
              <div className="absolute bottom-20 -right-8 bg-white rounded-2xl shadow-premium p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">500+</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Professionals</div>
                    <div className="text-xs text-slate">Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
