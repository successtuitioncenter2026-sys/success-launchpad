import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import logo from "@/assets/success tution logobanner.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-3 hover-lift">
          <img src={logo} alt="Success Tuition Center logo" className="h-12 w-auto object-contain" />
          
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              {l.label}
            </a>
          ))}
          <Button variant="cta" size="sm" className="shine-on-hover hover-lift" asChild>
            <a href="#demo">Enroll Now</a>
          </Button>
        </div>
        <button className="md:hidden hover-lift" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className="border-t border-border/70 bg-slate-900/80 text-white backdrop-blur-sm">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="tel:+918807747582"
              className="flex items-center gap-2 transition-colors hover:text-[#ffd166]"
            >
              <Phone className="h-4 w-4" />
              <span>+91 88077 47582</span>
            </a>
            <a
              href="https://wa.me/918344810357"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-[#ffd166]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>+91 83448 10357</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61579514131708"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-[#ffd166] hover:text-[#ffd166]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/success_tuition_center_katpadi?igsh=OHh5Z3Bpam1sd2Ix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-[#ffd166] hover:text-[#ffd166]"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-card border-t border-border"
          >
            <div className="flex flex-col gap-3 p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="cta" size="sm" className="shine-on-hover" asChild>
                <a href="#demo" onClick={() => setOpen(false)}>Enroll Now</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
