import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedCounter = ({
  target,
  suffix = "",
  label,
  className,
  numberClassName,
  labelClassName,
  useGradientNumber = true,
}: {
  target: number;
  suffix?: string;
  label: string;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
  useGradientNumber?: boolean;
}) => {
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
      className={cn(
        "text-center poster-card glass-card-hover tilt-card spotlight-card rounded-3xl border border-white/15 px-4 py-8 text-white",
        className,
      )}
    >
      <div
        className={cn(
          "mb-2 font-outfit-bold text-4xl font-extrabold tilt-layer md:text-6xl",
          useGradientNumber ? "gradient-text-accent" : "text-white",
          numberClassName,
        )}
      >
        {count}{suffix}
      </div>
      <div className={cn("font-medium text-white/80 tilt-layer", labelClassName)}>{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
