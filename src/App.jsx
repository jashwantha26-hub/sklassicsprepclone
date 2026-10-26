
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./Sections/HeroSection.jsx";
import SmartPracticeSection from "./Sections/SmartPracticeSection.jsx";
import ExamCategoriesSection from "./Sections/ExamCategoriesSection.jsx";
import QuizSection from "./Sections/QuizSection.jsx";
import FeaturesSection from "./Sections/FeaturesSection.jsx";
import LiveExamsSection from "./Sections/LiveExamsSection.jsx";
import FAQSection from "./Sections/FAQSection.jsx";
import CTASection from "./Sections/CTASection.jsx";
import FooterSection from "./Sections/FooterSection.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SmartPracticeSection />
      <ExamCategoriesSection />
      <QuizSection />
      <FeaturesSection />
      <LiveExamsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
