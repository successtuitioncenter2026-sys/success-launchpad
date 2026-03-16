import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import ResultsSection from "@/components/ResultsSection";
import WhySucceedSection from "@/components/WhySucceedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DemoFormSection from "@/components/DemoFormSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ResultsSection />
      <WhySucceedSection />
      <TestimonialsSection />
      <DemoFormSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
