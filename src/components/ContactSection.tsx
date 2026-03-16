import ScrollReveal from "./ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
          Get in <span className="gradient-text">Touch</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Phone, title: "Call Us", detail: "+91 98765 43210", href: "tel:+919876543210" },
          { icon: Mail, title: "Email", detail: "info@successtuition.com", href: "mailto:info@successtuition.com" },
          { icon: MapPin, title: "Visit Us", detail: "123 Education Street, Knowledge City", href: "#" },
        ].map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.1}>
            <a href={c.href} className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col items-center text-center gap-3 block">
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
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              💬 Chat on WhatsApp
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
