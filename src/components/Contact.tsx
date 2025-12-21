import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    training: '',
    message: '',
    participants: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        training: '',
        message: '',
        participants: ''
      });
    }, 2000);
  };

  const trainingOptions = [
    'SAFe® Scrum Master (SSM)',
    'SAFe® Product Owner/Product Manager (POPM)',
    'Leading SAFe® (SA)',
    'SAFe® Advanced Scrum Master (SASM)',
    'SAFe® for Teams (SP)',
    'SAFe® DevOps (SDP)',
    'SAFe® Agile Product Management (APM)',
    'SAFe® Lean Portfolio Management (LPM)',
    'Custom Corporate Training',
    'General Inquiry'
  ];

  if (isSubmitted) {
    return (
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-cream-darker rounded-3xl shadow-premium p-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-dark to-accent rounded-full flex items-center justify-center animate-scale-in">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-xl text-slate mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-premium btn-accent"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
            Start Your Transformation
          </h2>
          <div className="section-divider"></div>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Ready to transform your organization with agile training? Let's discuss your specific needs
            and create a customized training plan for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'deepak@deepaknailwal.com', href: 'mailto:deepak@deepaknailwal.com' },
                  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                  { icon: MapPin, label: 'Location', value: 'New Delhi, India', sublabel: 'Available for on-site training worldwide' },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', sublabel: 'For all inquiries' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="ml-4">
                      <span className="text-slate text-sm block">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-charcoal font-medium hover:text-accent-dark transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-charcoal font-medium">{item.value}</span>
                      )}
                      {item.sublabel && <span className="text-slate text-sm block">{item.sublabel}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-cream-darker">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <h4 className="font-display font-semibold text-charcoal">What to Expect</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Free consultation to understand your needs',
                  'Customized training proposals',
                  'Flexible scheduling options',
                  'Post-training support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-premium border border-cream-darker">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-8">
                Training Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-premium"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-premium"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-premium"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-premium"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="training" className="block text-sm font-medium text-charcoal mb-2">
                      Training Interest <span className="text-accent">*</span>
                    </label>
                    <select
                      id="training"
                      name="training"
                      required
                      value={formData.training}
                      onChange={handleInputChange}
                      className="input-premium"
                    >
                      <option value="">Select a training</option>
                      {trainingOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium text-charcoal mb-2">
                      Expected Participants
                    </label>
                    <select
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleInputChange}
                      className="input-premium"
                    >
                      <option value="">Select range</option>
                      <option value="1-5">1-5 participants</option>
                      <option value="6-15">6-15 participants</option>
                      <option value="16-30">16-30 participants</option>
                      <option value="31-50">31-50 participants</option>
                      <option value="50+">50+ participants</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input-premium resize-none"
                    placeholder="Tell us about your training needs, preferred dates, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-premium btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
