import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#dcecf9] pt-32 sm:pt-36">
    <div className="absolute inset-0 hero-grid opacity-60" />
    <div className="absolute top-20 left-[-6rem] w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-orbit" />
    <div className="absolute bottom-16 right-[-4rem] w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float-gentle" />
    <div className="container relative z-10 mx-auto px-4 pb-12 pt-8 text-center sm:pt-16">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 font-outfit-bold"
      >
        Success Tuition Center <span className="text-foreground">Katpadi Vellore</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
      >
        Tuition for Class 6-12 students from Katpadi and nearby Vellore locations with strong board exam preparation, maths and science coaching, and personalized academic support.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="cta" size="lg" className="shine-on-hover hover-lift min-h-14 px-10 text-lg" asChild>
          <a href="#demo">Enroll Now</a>
        </Button>
        <Button variant="gradient" size="lg" className="shine-on-hover hover-lift min-h-14 px-10 text-lg" asChild>
          <a href="#demo">Book Free Demo Class</a>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        className="mt-14 max-w-4xl mx-auto"
      >
        <div className="poster-card tilt-card spotlight-card rounded-[2rem] border border-white/15 p-7 text-white md:p-10">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            {[
              { value: "6-12", label: "Focused school classes" },
              { value: "Katpadi", label: "Local tuition support" },
              { value: "95%", label: "Board exam success" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`tilt-layer rounded-2xl px-5 py-7 md:px-6 ${index < 2 ? "sm:border-r-4 sm:border-white" : ""}`}
              >
                <p className="font-outfit-bold text-5xl font-extrabold text-white md:text-6xl">{item.value}</p>
                <p className="mt-3 text-lg text-white/85 md:text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
