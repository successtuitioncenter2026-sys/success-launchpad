import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { target: 200, suffix: "+", label: "Students Trained" },
  { target: 95, suffix: "%", label: "Board Exam Success Rate" },
  { target: 10, suffix: "+", label: "Years Teaching Experience" },
  { target: 100, suffix: "+", label: "Top Scorers" },
];

const ResultsSection = () => (
  <section id="results" className="bg-white py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
          Our <span className="gradient-text">Results</span> Speak
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <AnimatedCounter key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
