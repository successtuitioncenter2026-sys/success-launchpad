import ScrollReveal from "./ScrollReveal";
import { Users, Target, ClipboardCheck, Brain, MessageCircleQuestion } from "lucide-react";

const features = [
  { icon: Users, label: "Small Batch Size" },
  { icon: Target, label: "Personalized Attention" },
  { icon: ClipboardCheck, label: "Weekly Tests" },
  { icon: Brain, label: "Board Exam Strategies" },
  { icon: MessageCircleQuestion, label: "Doubt Clearing Sessions" },
];

const nearbyAreas = ["Katpadi", "Sri Balaji Nagar", "Vellore", "Nearby Katpadi Areas"];

const AboutSection = () => (
  <section id="about" className="py-24 section-alt">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
          Why Choose <span className="gradient-text">Success Tuition Center?</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
          Success Tuition Center in Katpadi, Vellore supports Class 6 to Class 12 students with strong academic foundations,
          concept clarity, regular tests, and board exam preparation. We focus on maths, science, and school subject support for
          students from Katpadi and nearby locations who need consistent guidance and better results.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {nearbyAreas.map((area) => (
            <span key={area} className="rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
              Serving Students From {area}
            </span>
          ))}
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.label} delay={i * 0.1}>
            <div className="glass-card glass-card-hover rounded-2xl p-6 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                <f.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-foreground">{f.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
