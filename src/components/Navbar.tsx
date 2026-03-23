import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
      className="fixed left-0 right-0 top-[53px] z-50 glass-card"
    >
      <div className="border-t border-border/70">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
          <a href="#" className="flex min-w-0 items-center gap-3 hover-lift">
            <img src={logo} alt="Success Tuition Center logo" className="h-10 w-auto max-w-[240px] object-contain sm:h-12 sm:max-w-none" />
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
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md md:hidden hover:bg-black/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
