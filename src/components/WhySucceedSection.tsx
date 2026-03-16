import ScrollReveal from "./ScrollReveal";
import { Award, CalendarCheck, ClipboardList, Users, Target, Lightbulb } from "lucide-react";

const items = [
  { icon: Award, title: "Experienced Faculty", desc: "Teachers with years of board exam coaching expertise." },
  { icon: CalendarCheck, title: "Structured Study Plans", desc: "Well-organized curriculum aligned with board exam patterns." },
  { icon: ClipboardList, title: "Weekly Assessments", desc: "Regular tests to track progress and identify weak areas." },
  { icon: Users, title: "Parent Progress Reports", desc: "Transparent communication with parents on student growth." },
  { icon: Target, title: "Exam-Oriented Training", desc: "Focused preparation with model papers and past papers." },
  { icon: Lightbulb, title: "Concept-Based Teaching", desc: "Deep understanding over rote memorization for lasting knowledge." },
];

const WhySucceedSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
          Why Our Students <span className="gradient-text">Succeed</span>
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="glass-card glass-card-hover rounded-2xl p-7 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhySucceedSection;
