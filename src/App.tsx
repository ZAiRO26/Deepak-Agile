import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Trainings from "@/pages/Trainings";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Quizzes from "@/pages/Quizzes";
import QuizPage from "@/pages/Quiz";
import QuizSummary from "@/pages/QuizSummary";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/:slug" element={<QuizPage />} />
        <Route path="/quizzes/:slug/summary" element={<QuizSummary />} />
      </Routes>
    </Router>
  );
}
