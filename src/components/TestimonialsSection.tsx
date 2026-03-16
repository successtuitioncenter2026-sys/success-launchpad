import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Class 10 Student", text: "Success Tuition Center helped me score 95% in my Class 10 boards. The teachers explain concepts clearly and conduct regular tests." },
  { name: "Rajesh Kumar", role: "Parent", text: "My son's grades improved dramatically after joining. The personalized attention and weekly progress reports give us peace of mind." },
  { name: "Ananya Patel", role: "Class 12 Student", text: "The advanced coaching for Class 12 was exactly what I needed. I scored among the top 5 in my school thanks to their exam strategies." },
  { name: "Mrs. Meera Joshi", role: "Parent", text: "Small batch sizes mean my daughter gets the attention she deserves. The doubt-clearing sessions are incredibly helpful." },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
            What <span className="gradient-text">They Say</span>
          </h2>
        </ScrollReveal>
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative min-h-[220px] flex flex-col justify-center">
            <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <p className="text-lg text-foreground mb-6 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === idx ? "gradient-bg w-6" : "bg-border"}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
