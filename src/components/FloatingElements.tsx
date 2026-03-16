import { motion } from "framer-motion";

const elements = [
  { emoji: "📚", className: "top-[15%] left-[8%] animate-float text-4xl md:text-5xl", delay: 0 },
  { emoji: "⚛️", className: "top-[20%] right-[10%] animate-float-slow text-3xl md:text-5xl", delay: 1 },
  { emoji: "🎓", className: "bottom-[25%] left-[12%] animate-float-reverse text-3xl md:text-4xl", delay: 0.5 },
  { emoji: "📐", className: "bottom-[30%] right-[8%] animate-float text-3xl md:text-4xl", delay: 1.5 },
  { emoji: "🧪", className: "top-[50%] left-[5%] animate-float-slow text-2xl md:text-3xl", delay: 2 },
  { emoji: "✏️", className: "top-[40%] right-[5%] animate-float-reverse text-2xl md:text-3xl", delay: 0.8 },
];

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {elements.map((el, i) => (
      <motion.div
        key={i}
        className={`absolute ${el.className}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ delay: el.delay, duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      >
        {el.emoji}
      </motion.div>
    ))}
  </div>
);

export default FloatingElements;
