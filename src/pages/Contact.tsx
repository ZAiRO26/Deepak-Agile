import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Meta from "@/components/Meta";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Meta title="Contact" description="Get in touch with Deepak Nailwal for agile consulting and training inquiries." />
      <Navigation />
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your organization with agile training? Let's discuss your specific needs 
            and create a customized training plan for your team.
          </p>
        </div>
      </div>
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}