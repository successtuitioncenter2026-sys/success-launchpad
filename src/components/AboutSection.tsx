import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import teacherImage from "@/assets/teacher.png";
import whyChooseUs1 from "@/assets/whychooseus1.jpeg";
import whyChooseUs2 from "@/assets/whychooseus2.jpeg";
import whyChooseUs3 from "@/assets/whychooseus3.jpeg";

const slides = [
  {
    src: whyChooseUs1,
    alt: "Students learning together at Success Tuition Center",
    eyebrow: "Why Choose Us",
    title: "Weekly Tests",
    description: "Focused coaching, personal attention, and better results.",
  },
  {
    src: whyChooseUs2,
    alt: "Classroom support session at Success Tuition Center",
    eyebrow: "Success System",
    title: "Personal Guidance",
    description: "Small-batch learning with steady support for every student.",
  },
  {
    src: whyChooseUs3,
    alt: "Focused academic coaching at Success Tuition Center",
    eyebrow: "Board Preparation",
    title: "Stronger Scores",
    description: "Concept clarity and exam strategy built for confident performance.",
  },
];

const AboutSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideDirection(1);
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="mb-6 text-center text-3xl font-extrabold md:text-5xl">
            Why Choose <span className="gradient-text">Success Tuition Center?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="relative left-1/2 right-1/2 mb-14 w-screen -translate-x-1/2 overflow-hidden border-y border-primary/10 bg-[linear-gradient(135deg,#eef7ff_0%,#ffffff_45%,#eef9ff_100%)] px-0 py-3 shadow-[0_28px_60px_rgba(26,105,167,0.16)]">
            <div className="relative min-h-[280px] overflow-hidden bg-slate-100 md:min-h-[620px]">
              <AnimatePresence custom={slideDirection} initial={false} mode="wait">
                <motion.img
                  key={`${slides[activeSlide].src}-${activeSlide}`}
                  src={slides[activeSlide].src}
                  alt={slides[activeSlide].alt}
                  custom={slideDirection}
                  initial={{ opacity: 0.85, x: slideDirection > 0 ? "100%" : "-100%", scale: 1.02 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0.85, x: slideDirection > 0 ? "-100%" : "100%", scale: 1.01 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.24)_45%,rgba(2,6,23,0.82)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 mx-auto flex w-full max-w-[1400px] justify-end px-5 pb-5 pt-16 text-white sm:px-7 sm:pb-7 md:px-10">
                <div className="flex shrink-0 items-center gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.alt}
                      type="button"
                      aria-label={`Show slide ${index + 1}`}
                      onClick={() => {
                        setSlideDirection(index > activeSlide ? 1 : -1);
                        setActiveSlide(index);
                      }}
                      className={`rounded-full transition-all ${index === activeSlide ? "h-3 w-10 bg-white" : "h-3 w-3 bg-white/40 hover:bg-white/70"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <div className="mb-14 bg-white px-3 md:px-8">
            <div className="grid items-start gap-10 md:grid-cols-[minmax(320px,0.95fr)_minmax(0,1fr)] md:gap-14 md:auto-rows-fr">
              <div className="overflow-hidden rounded-[2rem] bg-[#f4f0e8] shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:h-full">
                <img
                  src={teacherImage}
                  alt="Trainer Nethra Santhosh Kumar"
                  className="h-[360px] w-full object-cover object-top sm:h-[460px] md:h-full"
                />
              </div>
              <div className="max-w-[620px]">
                <p className="text-2xl italic text-black md:text-[2rem]">Our Trainer</p>
                <h3 className="mt-4 text-[2.45rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#b8232d] sm:text-6xl md:text-[4.1rem]">
                  Nethra Santhosh Kumar
                </h3>
                <h4 className="mt-2 text-[2.45rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#b8232d] sm:text-6xl md:text-[4.1rem]">
                  M.Sc, B.Ed
                </h4>
                <h4 className="text-[2.45rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#b8232d] sm:text-6xl md:text-[4.1rem]">
                  10 Years Experience
                </h4>
                <svg
                  viewBox="0 0 260 28"
                  aria-hidden="true"
                  className="mt-6 h-7 w-[220px] text-[#4b4b4b] md:w-[260px]"
                >
                  <path
                    d="M4 22C54 8 124 8 256 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="mt-8 max-w-[38rem] text-lg leading-[1.75] text-black md:text-[1.15rem]">
                  Nethra Santhosh Kumar brings a strong academic background and 10 years of teaching experience to Success Tuition
                  Center. She focuses on concept clarity, patient guidance, and consistent support so students feel confident in
                  class, improve their scores, and build a strong foundation for board exams and future studies.
                </p>
                <p className="mt-4 max-w-[38rem] text-lg leading-[1.75] text-black md:text-[1.15rem]">
                  Her teaching approach combines personal attention, regular practice, doubt-clearing, and exam-oriented
                  preparation, helping every student progress at the right pace with confidence.
                </p>
                <p className="mt-4 max-w-[38rem] text-lg leading-[1.75] text-black md:text-[1.15rem]">
                  Students benefit from a calm and motivating classroom environment where every lesson is explained clearly, every
                  doubt is addressed with care, and every learner is encouraged to stay consistent in their studies.
                </p>
                <p className="mt-4 max-w-[38rem] text-lg leading-[1.75] text-black md:text-[1.15rem]">
                  From daily school support to board exam readiness, her goal is to help students strengthen fundamentals, build
                  discipline, and achieve better academic performance with steady guidance throughout the year.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
