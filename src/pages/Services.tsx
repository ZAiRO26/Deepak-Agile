import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Meta from "@/components/Meta";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Meta title="Services" description="Explore our comprehensive agile coaching and training services for enterprise transformation." />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">What We Offer</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6">
            Our Services
          </h1>
          <div className="section-divider"></div>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Comprehensive agile coaching and training services designed to transform your organization
            and accelerate your journey towards business agility.
          </p>
        </div>
      </section>

      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
