import ScrollReveal from "./ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Which classes do you teach?", a: "We offer coaching for students from Class 6 to Class 12, covering all major subjects including Mathematics, Science, and all subjects needed for school success." },
  { q: "Do you focus on board exams?", a: "Yes! Board exam preparation is our specialty. We provide intensive coaching for Class 10, 11, and 12 board exams with model papers, past paper analysis, and exam strategies." },
  { q: "How many students per batch?", a: "We maintain small batch sizes of 10-15 students to ensure personalized attention and effective learning for every student." },
  { q: "Do you conduct regular tests?", a: "Absolutely. We conduct weekly assessments and monthly tests to track progress, identify weak areas, and keep students exam-ready throughout the year." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 section-alt">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-none">
              <AccordionTrigger className="text-foreground font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
