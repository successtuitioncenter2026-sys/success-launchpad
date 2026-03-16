const Footer = () => (
  <footer className="gradient-bg py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-primary-foreground">
        <div>
          <h3 className="font-display text-xl font-extrabold mb-4">Success Tuition</h3>
          <p className="text-sm opacity-80">Empowering students from Class 6 to 12 with expert coaching and board exam preparation.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["About", "Courses", "Results", "Testimonials", "FAQ", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Class 6–8 Foundation</li>
            <li>Class 9–10 Board Prep</li>
            <li>Class 11–12 Advanced</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>📞 +91 98765 43210</li>
            <li>📧 info@successtuition.com</li>
            <li>📍 123 Education Street</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Success Tuition Center. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
