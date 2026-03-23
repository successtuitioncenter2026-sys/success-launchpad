import ScrollReveal from "./ScrollReveal";
import { BookOpen, GraduationCap, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: BookOpen,
    title: "Class 6-8 Foundation",
    desc: "Strong basics across core school subjects with clear explanations, steady practice, and a rock-solid academic foundation for the future.",
    subjects: ["Mathematics", "English", "All Subjects"],
  },
  {
    icon: GraduationCap,
    title: "Class 9-10 Board Prep",
    desc: "Concept mastery, exam strategies, and model tests across key board subjects to help students score with confidence.",
    subjects: ["Mathematics", "Physics", "Chemistry", "All Subjects"],
  },
  {
    icon: Atom,
    title: "Class 11-12 Advanced",
    desc: "Deep subject understanding for higher secondary exams with focused coaching for science and commerce students.",
    subjects: ["Mathematics", "Physics", "Chemistry", "All Subjects"],
  },
];

const CoursesSection = () => (
  <section id="courses" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          Our <span className="gradient-text">Courses</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 text-lg">Structured programs designed for every academic stage</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.15}>
            <div className="glass-card glass-card-hover tilt-card spotlight-card rounded-2xl p-8 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 tilt-layer">
                <c.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground tilt-layer">{c.title}</h3>
              <p className="text-muted-foreground mb-5 flex-1 tilt-layer">{c.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6 tilt-layer">
                {c.subjects.map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary hover-lift">
                    {s}
                  </span>
                ))}
              </div>
              <Button variant="gradient" className="w-full shine-on-hover hover-lift tilt-layer" asChild>
                <a href="#demo">Learn More</a>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
