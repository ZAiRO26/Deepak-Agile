import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Trainings from "@/components/Trainings";
import Testimonials from "@/components/Testimonials";
import Credentials from "@/components/Credentials";
import Meta from "@/components/Meta";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Meta title="Home" description="Expert SAFe® Agile coaching and training by Deepak Nailwal. Transform your organization with premium agile transformation services." />
      <Navigation />
      <Hero />
      <Clients />
      <Credentials />
      <Services />
      <Trainings />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
