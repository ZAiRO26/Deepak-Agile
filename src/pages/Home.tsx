import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trainings from "@/components/Trainings";
import Meta from "@/components/Meta";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Meta title="Home" description="Agile and Scrum consulting and training by Deepak Nailwal." />
      <Navigation />
      <Hero />
      <Services />
      <Trainings />

      <CTA />
      <Footer />
    </div>
  );
}