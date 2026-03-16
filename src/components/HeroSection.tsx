import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingElements from "./FloatingElements";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <FloatingElements />
    <div className="container mx-auto px-4 text-center relative z-10 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
      >
        Unlock Your Academic{" "}
        <span className="gradient-text">Success</span> with Expert Guidance
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Specialized Coaching for Classes 6–12 | Board Exam Experts for Class 10, 11 & 12
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="cta" size="lg" asChild>
          <a href="#demo">Enroll Now</a>
        </Button>
        <Button variant="gradient" size="lg" asChild>
          <a href="#demo">Book Free Demo Class</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
