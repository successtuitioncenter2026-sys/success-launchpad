import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      whileHover={{ y: -8, rotateX: 10, rotateY: -10 }}
      className="text-center poster-card glass-card-hover tilt-card spotlight-card rounded-3xl px-4 py-8 text-white border border-white/15"
    >
      <div className="text-4xl md:text-6xl font-extrabold gradient-text-accent mb-2 tilt-layer font-outfit-bold">
        {count}{suffix}
      </div>
      <div className="text-white/80 font-medium tilt-layer">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
