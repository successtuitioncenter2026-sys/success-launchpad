import ScrollReveal from "./ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  { icon: Phone, title: "Call Us", detail: "88077 47582", href: "tel:+918807747582" },
  {
    icon: Mail,
    title: "Email",
    detail: "successtuitioncenter2026@gmail.com",
    href: "mailto:successtuitioncenter2026@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "3/A, 2nd cross street, 4th Main road, Sri Balaji Nagar, Katpadi, vellore 632007",
    href: "https://maps.google.com/?q=3/A, 2nd cross street, 4th Main road, Sri Balaji Nagar, Katpadi, vellore 632007",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
          Get in <span className="gradient-text">Touch</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contactItems.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.1}>
            <a
              href={c.href}
              target={c.title === "Visit Us" ? "_blank" : undefined}
              rel={c.title === "Visit Us" ? "noopener noreferrer" : undefined}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col items-center text-center gap-3 block"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                <c.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.detail}</p>
            </a>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.3}>
        <div className="text-center mt-10">
          <Button variant="cta" size="lg" asChild>
            <a href="https://wa.me/918807747582" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
