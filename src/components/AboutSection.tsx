import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Users, Target, ClipboardCheck, Brain, MessageCircleQuestion } from "lucide-react";
import teacherImage from "@/assets/teacher.png";
import whyChooseUs1 from "@/assets/whychooseus1.jpeg";
import whyChooseUs2 from "@/assets/whychooseus2.jpeg";
import whyChooseUs3 from "@/assets/whychooseus3.jpeg";

const features = [
  { icon: Users, label: "Small Batch Size" },
  { icon: Target, label: "Personalized Attention" },
  { icon: ClipboardCheck, label: "Weekly Tests" },
  { icon: Brain, label: "Board Exam Strategies" },
  { icon: MessageCircleQuestion, label: "Doubt Clearing Sessions" },
];

const nearbyAreas = ["Katpadi", "Sri Balaji Nagar", "Vellore", "Nearby Katpadi Areas"];

const slides = [
  { src: whyChooseUs1, alt: "Students learning together at Success Tuition Center" },
  { src: whyChooseUs2, alt: "Classroom support session at Success Tuition Center" },
  { src: whyChooseUs3, alt: "Focused academic coaching at Success Tuition Center" },
];

const AboutSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
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
        <ScrollReveal delay={0.1}>
          <p className="mx-auto mb-8 max-w-4xl text-center text-lg leading-relaxed text-muted-foreground">
            Success Tuition Center in Katpadi, Vellore supports Class 6 to Class 12 students with strong academic foundations,
            concept clarity, regular tests, and board exam preparation. We focus on maths, science, and school subject support for
            students from Katpadi and nearby locations who need consistent guidance and better results.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Serving Students From {area}
              </span>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto mb-14 max-w-5xl overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#eef7ff_0%,#ffffff_45%,#eef9ff_100%)] p-3 shadow-[0_28px_60px_rgba(26,105,167,0.16)]">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[activeSlide].src}
                  src={slides[activeSlide].src}
                  alt={slides[activeSlide].alt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.35)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 text-white sm:px-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Why Choose Us</p>
                  <p className="mt-1 text-lg font-bold sm:text-2xl">Focused coaching, personal attention, and better results.</p>
                </div>
                <div className="ml-4 flex gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.alt}
                      type="button"
                      aria-label={`Show slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <div className="mb-14 grid items-center gap-8 overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(237,247,255,0.9)_0%,rgba(255,255,255,0.98)_45%,rgba(243,250,255,0.95)_100%)] p-5 shadow-[0_24px_55px_rgba(30,112,177,0.14)] md:grid-cols-[320px_minmax(0,1fr)] md:p-8">
            <div className="overflow-hidden rounded-[1.5rem] bg-primary/10">
              <img
                src={teacherImage}
                alt="Trainer Nethra Santhosh Kumar"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/75">Our Trainer</p>
              <h3 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">Nethra Santhosh Kumar</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">M.Sc , B.Ed</span>
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">10 Years Experience</span>
              </div>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Nethra Santhosh Kumar brings a strong academic background and 10 years of teaching experience to Success Tuition
                Center. She focuses on concept clarity, patient guidance, and consistent support so students feel confident in class,
                improve their scores, and build a strong foundation for board exams and future studies.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Her teaching approach combines personal attention, regular practice, doubt-clearing, and exam-oriented preparation,
                helping every student progress at the right pace with confidence.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.label} delay={i * 0.1}>
              <div className="glass-card glass-card-hover flex flex-col items-center gap-3 rounded-2xl p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{f.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
