import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Award, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Trainings', href: '/trainings' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Agile Transformation', href: '/services' },
    { name: 'SAFe® Training', href: '/trainings' },
    { name: 'Team Coaching', href: '/services' },
    { name: 'Executive Coaching', href: '/services' },
  ];

  const certifications = ['SAFe® SPC', 'CSM®', 'ICAgile', 'PMP®'];

  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-navy"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <span className="text-xl font-bold text-white">
                  Deepak <span className="text-accent">Nailwal</span>
                </span>
                <span className="block text-xs text-white/60 font-semibold uppercase tracking-wider">
                  Agile Coach & Trainer
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Transforming organizations through SAFe® methodology and agile best practices.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80"
                >
                  <Award className="w-3 h-3 mr-1 text-accent" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/60 hover:text-accent transition-colors font-medium"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:deepak@agilecoach.com"
                  className="flex items-center text-white/60 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  deepak@agilecoach.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919560782645"
                  className="flex items-center text-white/60 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  +91 95607 82645
                </a>
              </li>
              <li>
                <span className="flex items-start text-white/60">
                  <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                  Delhi NCR, India
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Deepak Nailwal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
