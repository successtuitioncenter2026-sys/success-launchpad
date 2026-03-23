import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";
import visionImage from "@/assets/vision.jpeg";

const stats = [
  { target: 200, suffix: "+", label: "Students Trained" },
  { target: 95, suffix: "%", label: "Board Exam Success Rate" },
  { target: 10, suffix: "+", label: "Years Teaching Experience" },
  { target: 100, suffix: "+", label: "Top Scorers" },
];

const ResultsSection = () => (
  <section id="results" className="relative overflow-hidden bg-white py-24">
    <div
      className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-[0.09]"
      style={{ backgroundImage: `url(${visionImage})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(244,250,255,0.88)_55%,rgba(255,255,255,0.94)_100%)]" aria-hidden="true" />
    <div className="container relative z-10 mx-auto px-4">
      <ScrollReveal>
        <div className="relative left-1/2 right-1/2 mb-10 w-screen -translate-x-1/2 overflow-hidden border-y border-primary/10 shadow-[0_22px_50px_rgba(36,116,180,0.18)]">
          <img
            src={visionImage}
            alt="Vision and achievement at Success Tuition Center"
            className="h-auto max-h-none w-full bg-[#0e7fcc] object-cover"
          />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
          Our <span className="gradient-text">Results</span> Speak
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="mx-auto overflow-hidden rounded-[1.75rem] bg-[#2f3187] shadow-[0_28px_70px_rgba(24,34,109,0.18)]">
          <div className="grid md:grid-cols-4">
            {stats.map((s, index) => (
              <div
                key={s.label}
                className={`relative ${index < stats.length - 1 ? "md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-24 md:after:w-px md:after:-translate-y-1/2 md:after:bg-white/12" : ""}`}
              >
                <AnimatedCounter
                  {...s}
                  className="rounded-none border-0 bg-transparent px-6 py-10 shadow-none md:px-8 md:py-14"
                  numberClassName="mb-4 text-5xl font-extrabold text-white md:text-6xl"
                  labelClassName="text-base font-medium text-white/95 md:text-[1.15rem]"
                  useGradientNumber={false}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ResultsSection;
