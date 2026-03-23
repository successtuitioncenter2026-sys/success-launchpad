import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] border-b border-white/10 bg-[#4b5265] text-white">
      <div className="container mx-auto overflow-x-auto px-4 py-2.5 text-sm">
        <div className="flex min-w-max items-center gap-4 whitespace-nowrap sm:gap-6">
          <a
            href="tel:+918807747582"
            className="flex items-center gap-1.5 text-[13px] font-semibold leading-none transition-colors hover:text-[#ffd166] sm:text-[15px]"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">+91 88077 47582</span>
          </a>
          <a
            href="https://wa.me/918344810357"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold leading-none transition-colors hover:text-[#ffd166] sm:text-[15px]"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">+91 83448 10357</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61579514131708"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-[#ffd166] hover:text-[#ffd166] sm:h-10 sm:w-10"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/success_tuition_center_katpadi?igsh=OHh5Z3Bpam1sd2Ix"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-[#ffd166] hover:text-[#ffd166] sm:h-10 sm:w-10"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
