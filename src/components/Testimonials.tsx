import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image: string;
}

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            role: 'Engineering Director',
            company: 'Tech Mahindra',
            content: 'Deepak\'s SAFe® training transformed our entire engineering organization. His practical approach and deep expertise made complex concepts accessible to everyone. We saw a 40% improvement in delivery velocity within 3 months.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 2,
            name: 'Priya Sharma',
            role: 'VP of Product',
            company: 'Infosys',
            content: 'The Leading SAFe® training was exceptional. Deepak brings real-world experience that goes beyond textbook knowledge. Our leadership team now speaks the same agile language and drives transformation together.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 3,
            name: 'Amit Patel',
            role: 'Scrum Master',
            company: 'Wipro',
            content: 'I\'ve attended many agile trainings, but Deepak\'s SSM certification course stands out. The interactive exercises, real case studies, and his coaching style made learning engaging and impactful.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
            id: 4,
            name: 'Sneha Reddy',
            role: 'Agile Coach',
            company: 'TCS',
            content: 'Deepak is a true expert in SAFe®. His advanced coaching helped me become a better facilitator and coach. I highly recommend his programs to anyone serious about agile transformation.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
    ];

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-24 bg-cream-dark relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-medium tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
                        What Our Clients Say
                    </h2>
                    <div className="section-divider"></div>
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    <div
                        className={`bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-cream-darker transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                            }`}
                    >
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-12">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent-dark to-accent rounded-xl flex items-center justify-center shadow-accent">
                                <Quote className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center pt-4">
                            {/* Client Image */}
                            <div className="md:col-span-1 flex justify-center">
                                <div className="relative">
                                    <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-accent/20 shadow-medium">
                                        <img
                                            src={currentTestimonial.image}
                                            alt={currentTestimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Rating */}
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5 bg-white px-2 py-1 rounded-full shadow-soft">
                                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-3 text-center md:text-left">
                                <p className="text-lg md:text-xl text-slate leading-relaxed italic mb-6">
                                    "{currentTestimonial.content}"
                                </p>
                                <div>
                                    <h4 className="font-display text-xl font-bold text-charcoal">
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className="text-slate">
                                        {currentTestimonial.role} at <span className="text-accent-dark font-medium">{currentTestimonial.company}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white rounded-full shadow-soft border border-cream-darker flex items-center justify-center text-charcoal hover:bg-cream hover:text-accent-dark transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                            ? 'w-8 bg-accent'
                                            : 'bg-cream-darker hover:bg-accent/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white rounded-full shadow-soft border border-cream-darker flex items-center justify-center text-charcoal hover:bg-cream hover:text-accent-dark transition-all duration-200"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
