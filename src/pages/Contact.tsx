import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Meta from "@/components/Meta";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Meta title="Contact" description="Get in touch with Deepak Nailwal for agile consulting and training inquiries." />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Get Started</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6">
            Contact Us
          </h1>
          <div className="section-divider"></div>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Ready to transform your organization with agile training? Let's discuss your specific needs
            and create a customized training plan for your team.
          </p>
        </div>
      </section>

      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
