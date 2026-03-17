import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Nithya B",
    meta: "1 review",
    timeAgo: "9 months ago",
    text: "I enrolled my daughter in the math class at Success Tuition Center, and she scored an impressive 99 out of 100. The quality of teaching here is outstanding, and the support provided has truly made a difference in her learning. Choosing this center has been one of the best decisions I've made for her education.",
  },
  {
    name: "Pradeep Kumar",
    meta: "9 reviews - 5 photos",
    timeAgo: "6 months ago",
    text: "Best tuition center for kids, My baby had poor in Past Exams after join in success tuition she gets better marks in all exams Thank you so much Nethra Teacher",
  },
  {
    name: "Shri Vijaya Gayathre",
    meta: "Local Guide - 5 reviews",
    timeAgo: "9 months ago",
    text: "My son who was studying in 10TH last year, was scoring less than 40% in his quarterly and half yearly exams. After joining SUCCESS TUITION CENTER with Nethra Ma'am, he scored 70% in his final exams. I am extremely happy with the dedication and support.",
  },
  {
    name: "rani Banapuram",
    meta: "3 reviews",
    timeAgo: "6 months ago",
    text: "This is very good platform for students and i truly said in this tuition make a bright future for their students...all the best",
  },
  {
    name: "Deepak Biradar",
    meta: "3 reviews - 2 photos",
    timeAgo: "6 months ago",
    text: "Exceptional tution truly Great . Highly recommended success tution centre",
  },
  {
    name: "Sethu Gopi",
    meta: "3 reviews",
    timeAgo: "6 months ago",
    text: "Very good Tuition center Good teaching",
  },
  {
    name: "Arasan G",
    meta: "4 reviews - 1 photo",
    timeAgo: "6 months ago",
    text: "Each student's success is truly inspiring",
  },
  {
    name: "Vk Senthil kumer",
    meta: "1 review",
    timeAgo: "6 months ago",
    text: "it's good and nice place to study",
  },
  {
    name: "vicky vishnu",
    meta: "1 review",
    timeAgo: "6 months ago",
    text: "It's good compare than school",
  },
  {
    name: "Sangeeth Kuttachi",
    meta: "1 review",
    timeAgo: "8 months ago",
    text: "Good job keep it up",
  },
  {
    name: "vasanth kumar",
    meta: "2 reviews",
    timeAgo: "8 months ago",
    text: "Best teaching & responsibility & caring",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const TestimonialsSection = () => (
    <section id="testimonials" className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Real <span className="gradient-text">Reviews</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Feedback from students and parents who learned with Success Tuition Center.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <ScrollReveal key={`${review.name}-${index}`}>
              <article className="group glass-card glass-card-hover rounded-3xl p-6 min-h-[180px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_hsl(205_79%_42%_/_0.18)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg text-white font-bold flex items-center justify-center shrink-0">
                    {getInitials(review.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg leading-tight">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.meta}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">{review.timeAgo}</span>
                </div>

                <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:max-h-60 group-hover:opacity-100">
                  <p className="text-foreground leading-relaxed">{review.text}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
);

export default TestimonialsSection;
