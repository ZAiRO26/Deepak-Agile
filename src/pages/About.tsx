import Navigation from "@/components/Navigation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import { Award, Users, BookOpen, Target, TrendingUp, Lightbulb, CheckCircle, Calendar } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, number: '500+', label: 'Professionals Trained' },
    { icon: Award, number: '50+', label: 'Organizations Served' },
    { icon: BookOpen, number: '8+', label: 'Years Experience' },
    { icon: Target, number: '95%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Expert Knowledge',
      description: 'Deep expertise in SAFe® framework and agile methodologies with real-world implementation experience at Fortune 500 companies.'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Focus on empowering individuals and teams to achieve their full potential through personalized coaching and mentoring.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Commitment to staying current with industry trends and continuously enhancing training methodologies for maximum impact.'
    }
  ];

  const timeline = [
    { year: '2016', title: 'Started Agile Journey', description: 'Began as a Scrum Master in leading IT firm' },
    { year: '2018', title: 'SAFe® Certification', description: 'Achieved SAFe® Program Consultant (SPC) status' },
    { year: '2020', title: 'Independent Consulting', description: 'Launched independent training and coaching practice' },
    { year: '2023', title: '500+ Trained', description: 'Milestone of training 500+ agile professionals' },
  ];

  const certifications = [
    'SAFe® Program Consultant (SPC)',
    'Certified Scrum Master (CSM)',
    'ICAgile Certified Expert (ICE)',
    'Project Management Professional (PMP)',
    'SAFe® Release Train Engineer (RTE)',
    'Certified Agile Leadership (CAL)'
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Meta title="About" description="Learn more about Deepak Nailwal, an expert agile coach and SAFe® trainer with 8+ years of experience." />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">About Me</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6">
              Deepak Nailwal
            </h1>
            <div className="section-divider"></div>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Transforming organizations through expert agile coaching and SAFe® training,
              helping teams achieve business agility at scale.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-soft border border-cream-darker hover:shadow-medium hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-dark to-accent rounded-xl flex items-center justify-center shadow-accent">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="text-slate text-sm mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-accent font-medium tracking-wider uppercase text-sm">My Story</span>
                <h2 className="font-display text-4xl font-bold text-charcoal mt-4 mb-6">
                  Expert Agile Coach & SAFe® Trainer
                </h2>
              </div>

              <p className="text-lg text-slate leading-relaxed">
                With over 8 years of experience in agile transformation and SAFe® implementation,
                I have helped numerous organizations achieve business agility at scale. My passion lies in
                empowering teams and individuals to embrace agile principles and deliver exceptional value.
              </p>

              <p className="text-lg text-slate leading-relaxed">
                As a certified SAFe® Program Consultant (SPC), I bring deep expertise in scaling agile
                practices across enterprise environments. My approach combines practical industry experience
                with proven training methodologies to ensure lasting transformation.
              </p>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-charcoal">Certifications & Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-slate">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-navy/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-premium p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/deepak-portrait.jpg"
                  alt="Deepak Nailwal - Enterprise Agile Coach"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-navy p-4 rounded-xl shadow-premium animate-float">
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent w-6 h-6" />
                  <div>
                    <div className="text-white font-semibold">Since 2016</div>
                    <div className="text-white/70 text-xs">Agile Practitioner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Journey</span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-4 mb-6">
              My Professional Path
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-display text-2xl font-bold text-accent">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-cream"></div>
                  {idx < timeline.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-0.5 h-20 bg-accent/30"></div>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-soft border border-cream-darker">
                  <h3 className="font-display font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-slate">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Philosophy</span>
            <h2 className="font-display text-4xl font-bold text-charcoal mt-4 mb-6">
              My Approach & Values
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Built on principles of expertise, people-first approach, and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="premium-card p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-cream rounded-xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
