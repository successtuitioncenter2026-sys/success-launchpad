import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const whatsappNumber = "918344810357";

const DemoFormSection = () => {
  const [form, setForm] = useState({ name: "", classLevel: "", phone: "", subject: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "New Free Demo Class Request",
      "",
      `Student Name: ${form.name}`,
      `Class: ${form.classLevel}`,
      `Phone Number: ${form.phone}`,
      `Subject Interested: ${form.subject}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("WhatsApp opened with the demo class details.");
    setForm({ name: "", classLevel: "", phone: "", subject: "" });
  };

  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-lg mx-auto glass-card rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3">
              Book a <span className="gradient-text">Free Demo</span> Class
            </h2>
            <p className="text-muted-foreground text-center mb-8">Experience our teaching methodology before enrolling</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Student Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-background/80" />
              <select
                required
                value={form.classLevel}
                onChange={(e) => setForm({ ...form, classLevel: e.target.value })}
                className="w-full h-10 rounded-md border border-input bg-background/80 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select Class</option>
                {[6,7,8,9,10,11,12].map((c) => <option key={c} value={c}>Class {c}</option>)}
              </select>
              <Input placeholder="Phone Number" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-background/80" />
              <select
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full h-10 rounded-md border border-input bg-background/80 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Subject Interested</option>
                {["Mathematics", "Physics", "Chemistry", "Biology", "All Subjects"].map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <Button variant="cta" size="lg" type="submit" className="w-full">
                Book Free Demo Class
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DemoFormSection;
