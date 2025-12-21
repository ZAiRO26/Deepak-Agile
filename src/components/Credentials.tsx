import React from 'react';
import { Award, Shield, BadgeCheck, Trophy, Verified } from 'lucide-react';

const Credentials: React.FC = () => {
    const certifications = [
        {
            icon: Shield,
            name: 'SAFe® Program Consultant (SPC)',
            issuer: 'Scaled Agile, Inc.',
            description: 'Licensed to teach all SAFe® courses'
        },
        {
            icon: BadgeCheck,
            name: 'Certified Scrum Master (CSM)',
            issuer: 'Scrum Alliance',
            description: 'Expert in Scrum framework'
        },
        {
            icon: Award,
            name: 'ICAgile Certified Expert',
            issuer: 'ICAgile',
            description: 'Agile coaching mastery'
        },
        {
            icon: Trophy,
            name: 'Project Management Professional (PMP)',
            issuer: 'PMI',
            description: 'Global PM certification'
        }
    ];

    const stats = [
        { number: '500+', label: 'Professionals Trained' },
        { number: '50+', label: 'Organizations Served' },
        { number: '8+', label: 'Years of Excellence' },
        { number: '95%', label: 'Satisfaction Rate' }
    ];

    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-medium tracking-wider uppercase text-sm">Credentials</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
                        Trusted Expertise
                    </h2>
                    <div className="section-divider"></div>
                    <p className="text-xl text-slate max-w-3xl mx-auto">
                        Backed by industry-leading certifications and a proven track record of transforming organizations worldwide.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 text-center shadow-soft border border-cream-darker hover:shadow-medium hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="stat-number">{stat.number}</div>
                            <div className="text-slate text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-2xl p-6 shadow-soft border border-cream-darker hover:shadow-premium hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-accent-dark group-hover:to-accent transition-all duration-300">
                                <cert.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="font-display font-bold text-charcoal mb-1 text-lg leading-tight">
                                {cert.name}
                            </h3>
                            <p className="text-accent-dark text-sm font-medium mb-2">{cert.issuer}</p>
                            <p className="text-slate text-sm">{cert.description}</p>
                        </div>
                    ))}
                </div>

                {/* Verified Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy rounded-full">
                        <Verified className="w-5 h-5 text-accent" />
                        <span className="text-white text-sm font-medium">All certifications verified and current</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Credentials;
