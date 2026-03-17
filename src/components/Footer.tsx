import logo from "@/assets/success tution logobanner.png";
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const usefulLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t-[10px] border-[#a91f24] text-foreground bg-[linear-gradient(135deg,rgba(248,252,255,0.98)_0%,rgba(219,240,255,0.98)_24%,rgba(94,187,247,0.22)_58%,rgba(255,248,229,0.95)_100%)]">
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr_1.15fr] lg:items-start">
        <div className="flex justify-center lg:justify-start">
          <div className="max-w-[300px] text-center lg:text-left">
            <img src={logo} alt="Success Tuition Center logo" className="mx-auto h-28 w-auto object-contain lg:mx-0 lg:h-32" />
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Success Tuition Center supports students from Class 6 to 12 with focused coaching, regular tests,
              and strong board exam preparation in Katpadi, Vellore.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold font-outfit-bold">Useful Links</h4>
          <div className="mt-4 h-1 w-14 rounded-full bg-primary" />
          <div className="mt-8 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-10">
            {usefulLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-foreground/85 transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold font-outfit-bold">Contact Information</h4>
          <div className="mt-4 h-1 w-14 rounded-full bg-primary" />
          <div className="mt-8 space-y-6 text-lg leading-8 text-foreground/85">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span>3/A, 2nd cross street, 4th Main road, Sri Balaji Nagar, Katpadi, vellore 632007, Tamil Nadu, India.</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">For Call Enquiry:</p>
                <a href="tel:+918807747582" className="transition-colors hover:text-primary">
                  +91 88077 47582
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">For WhatsApp Enquiry:</p>
                <a
                  href="https://wa.me/918344810357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  +91 83448 10357
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <a href="mailto:successtuitioncenter2026@gmail.com" className="transition-colors hover:text-primary">
                successtuitioncenter2026@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-base text-muted-foreground">
          Copyright © {new Date().getFullYear()} Success Tuition Center | All rights reserved
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61579514131708"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/success_tuition_center_katpadi?igsh=OHh5Z3Bpam1sd2Ix"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/918344810357"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
