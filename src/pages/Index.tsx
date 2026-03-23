import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import ResultsSection from "@/components/ResultsSection";
import WhySucceedSection from "@/components/WhySucceedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DemoFormSection from "@/components/DemoFormSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import adImage from "@/assets/ad image.jpeg";
import successLoader from "@/assets/successload.png";
import successLogo from "@/assets/successlogo.png";
import successSlogan from "@/assets/successlogan.png";
import tuitionImage from "@/assets/tution.png";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    const adTimer = window.setTimeout(() => {
      setShowAd(true);
    }, 5000);

    return () => {
      window.clearTimeout(loaderTimer);
      window.clearTimeout(adTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader ? (
          <motion.div
            key="site-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,rgba(248,252,255,0.98)_0%,rgba(219,240,255,0.98)_35%,rgba(94,187,247,0.18)_70%,rgba(255,248,229,0.92)_100%)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col items-center px-6 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.92, 1, 0.92] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="p-5"
              >
                <img src={successLoader} alt="Success loading" className="h-28 w-auto object-contain sm:h-32" />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "min(260px, 72vw)" }}
                transition={{ duration: 2.6, ease: "easeInOut" }}
                className="mt-8 h-1.5 overflow-hidden rounded-full bg-primary/15"
              >
                <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,#fbbf24,#1d84d6,#53bdf9)]" />
              </motion.div>
              <img src={successLogo} alt="Success logo" className="mt-6 h-16 w-auto object-contain sm:h-20" />
              <img src={tuitionImage} alt="Success tuition" className="mt-4 h-16 w-auto object-contain sm:h-20" />
              <img src={successSlogan} alt="Success slogan" className="mt-4 h-10 w-auto object-contain sm:h-12" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!showLoader ? (
        <>
          <TopBar />
          <Navbar />
          <div
            aria-hidden="true"
            className="fixed right-0 top-1/2 z-[95] flex h-[220px] w-[58px] -translate-y-1/2 items-center justify-center rounded-l-[1.4rem] bg-[#2b2e87] px-2 text-white shadow-[0_20px_40px_rgba(21,28,87,0.35)] sm:h-[270px] sm:w-[70px]"
          >
            <span
              className="font-display text-[0.72rem] font-bold uppercase tracking-[0.1em] sm:text-[0.9rem]"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Admission Open 2026-2027
            </span>
          </div>
          <main>
            <HeroSection />
            <AboutSection />
            <CoursesSection />
            <ResultsSection />
            <WhySucceedSection />
            <TestimonialsSection />
            <DemoFormSection />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      ) : null}

      <AnimatePresence>
        {showAd ? (
          <motion.div
            key="ad-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-[2px]"
            onClick={() => setShowAd(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.94 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-[1.75rem] bg-white p-3 shadow-[0_32px_100px_rgba(16,84,133,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowAd(false)}
                aria-label="Close advertisement"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white transition hover:bg-slate-950"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={adImage} alt="Success Tuition Center admission advertisement" className="w-full rounded-[1.25rem] object-cover" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Index;
