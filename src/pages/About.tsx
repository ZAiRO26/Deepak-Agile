import Navigation from "@/components/Navigation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Award, Users, BookOpen, Target, TrendingUp, Lightbulb } from 'lucide-react';

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
      description: 'Deep expertise in SAFe® framework and agile methodologies with real-world implementation experience.'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Focus on empowering individuals and teams to achieve their full potential through personalized coaching.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Commitment to staying current with industry trends and continuously enhancing training methodologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Deepak Nailwal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming organizations through expert agile coaching and SAFe® training, 
              helping teams achieve business agility at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Expert Agile Coach & SAFe® Trainer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 8 years of experience in agile transformation and SAFe® implementation, 
                I have helped numerous organizations achieve business agility at scale. My passion lies in 
                empowering teams and individuals to embrace agile principles and deliver exceptional value.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a certified SAFe® Program Consultant (SPC), I bring deep expertise in scaling agile 
                practices across enterprise environments. My approach combines practical industry experience 
                with proven training methodologies to ensure lasting transformation.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Certifications & Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    SAFe® Program Consultant (SPC)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Certified Scrum Master (CSM)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    ICAgile Certified Expert (ICE)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Project Management Professional (PMP)
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20business%20coach%20in%20modern%20office%2C%20confident%20smile%2C%20professional%20attire%2C%20bright%20lighting%2C%20corporate%20headshot%20style&image_size=portrait_4_3"
                alt="Deepak Nailwal"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Approach & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on principles of expertise, people-first approach, and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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