import Navigation from "@/components/Navigation";
import Trainings from "@/components/Trainings";
import Meta from "@/components/Meta";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function TrainingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Meta title="Trainings" description="Explore our SAFe® certification training programs." />
      <Navigation />
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SAFe® Training Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of SAFe® certification trainings designed to accelerate 
            your agile journey and enhance your professional credentials.
          </p>
        </div>
      </div>
      <Trainings />

      <CTA />
      <Footer />
    </div>
  );
}