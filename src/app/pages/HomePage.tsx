import { Link } from "react-router";
import { Heart, Award, ArrowRight, BookOpen, Trophy, Bus, Image as ImageIcon, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Scroll-triggered animation hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const heroSlides = [
    {
      src: "/images/Annex 4.jpeg",
      alt: "St. Theresa Annex Campus Pupils",
    },
    {
      src: "/images/Murubya with director 1.jpg",
      alt: "Murubya Pupils with Director Rev. Fr. Paul Bigirwa",
    },
    {
      src: "/images/House 2.jpg",
      alt: "St. Theresa Campus",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const quickLinks = [
    {
      title: "Rev. Fr. Paul Bigirwa",
      desc: "25 years in holy priesthood, dedicated to pastoral care, uplifting rural families, and child education in Kakumiro.",
      icon: Award,
      href: "/about",
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      title: "St. Theresa Schools",
      desc: "Main Campus, Annex Campus, and Murubya Outreach — welcoming classrooms, dedicated teachers, and joyful learning.",
      icon: BookOpen,
      href: "/schools",
      iconBg: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Sports Academy",
      desc: "Nurturing young champions in football, athletics, netball, and chess with discipline, teamwork, and character.",
      icon: Trophy,
      href: "/sports-academy",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Education Fund",
      desc: "Directly sponsoring over 200 vulnerable learners annually across Kakumiro, Kibaale, and Kagadi districts.",
      icon: Heart,
      href: "/education-fund",
      iconBg: "bg-amber-100 text-amber-700",
    },
    {
      title: "School Transporters",
      desc: "Dependable vans and buses ensuring pupils from distant rural villages travel safely to and from school each day.",
      icon: Bus,
      href: "/transporters",
      iconBg: "bg-violet-100 text-violet-700",
    },
    {
      title: "Photo Gallery",
      desc: "A celebration of school life, sports competitions, campus milestones, and community thanksgiving moments.",
      icon: ImageIcon,
      href: "/gallery",
      iconBg: "bg-pink-100 text-pink-700",
    },
    {
      title: "Contact Foundation",
      desc: "Visit our head office in Igayaza or connect directly with our school administration and community leaders.",
      icon: Phone,
      href: "/contact",
      iconBg: "bg-slate-100 text-slate-700",
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Hero Slider (Matching Seeta High Reference Design) ─────────── */}
      <section className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] overflow-hidden bg-slate-900">
        {/* Horizontal sliding track */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
              {/* Balanced overlay so background photos remain clearly visible, matching reference */}
              <div className="absolute inset-0 bg-black/35" />
            </div>
          ))}
        </div>

        {/* Centered Welcome Message (Exact design from user's reference image 5) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
              Empowering Minds, Shaping Futures
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
              Inspiring students to achieve excellence in academics, sports, and character.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11 drop-shadow-lg" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11 drop-shadow-lg" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── Welcome / Mission Section (Matching Reference Style) ─────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Photo: Annex 2 */}
              <div className="md:col-span-5 flex justify-center">
                <img
                  src="/images/Annex 2.jpg"
                  alt="St. Theresa Annex Campus"
                  className="w-full max-w-[340px] h-auto object-cover rounded-sm shadow-sm"
                />
              </div>

              {/* Right Text: Exact requested text */}
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 uppercase tracking-tight">
                  Empowering every child with education, faith, and human dignity.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  "To nurture rural talent, remove financial barriers to education, strengthen vulnerable families, and walk alongside youth so they grow with strong moral grounding, self-reliance, and bright futures."
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Inspiration ───────────────────────────────────────── */}
      <section className="py-8 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                Living Examples of Faith &amp; Grit
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                Our Inspiration
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Real lives that teach our young pupils in Kakumiro that humble beginnings do not limit God's purpose.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Queen of Katwe Card */}
            <RevealSection delay={0}>
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 h-full flex flex-col justify-center overflow-hidden group min-h-[320px]">
                {/* Highly Visible Queen of Katwe Image on the right side */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-5/12 pointer-events-none overflow-hidden rounded-r-3xl z-0">
                  <img
                    src="/images/queen 1.png"
                    alt="Phiona Mutesi - Queen of Katwe"
                    className="w-full h-full object-cover object-top opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-sm sm:max-w-md">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2">
                    Quiet Tenacity &amp; Strategic Vision
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Queen of Katwe — Phiona Mutesi
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Growing up amidst severe hardship in Katwe, Kampala, Phiona Mutesi discovered chess at a community outreach center. Through patient study, resilience, and dedicated mentorship, she rose to international acclaim. Her story reminds our teachers and pupils in Kakumiro that brilliance is never confined to affluent cities—given opportunity, faith, and patience, any village child can master the board of life.
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Pelé Card */}
            <RevealSection delay={100}>
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 h-full flex flex-col justify-center overflow-hidden group min-h-[320px]">
                {/* Highly Visible pele 2.png in the background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
                  <img
                    src="/images/pele 2.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center opacity-30 filter contrast-110 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/50" />
                </div>

                {/* Highly Visible pele.png on the right side */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-5/12 pointer-events-none overflow-hidden rounded-r-3xl z-0">
                  <img
                    src="/images/pele.png"
                    alt="Pelé"
                    className="w-full h-full object-cover object-top opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-sm sm:max-w-md">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
                    Humble Roots &amp; Relentless Passion
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Pelé: Birth of a Legend
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Starting on dusty clearings playing barefoot with a sock stuffed with rags, Pelé's joy, tireless work ethic, and humility took him from poverty to world glory. He embodies the exact spirit we teach our young athletes at St. Theresa: that lack of costly boots never prevents a dedicated boy or girl from developing great discipline, lifting their family, and honoring God with their talent.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* ── Community Impact & Shared Values (Matching Reference Style) ── */}
          <RevealSection delay={150}>
            <div className="mt-14 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {/* Column 1: Community Impact */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
                    Community Impact
                  </h3>
                  <ul className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed inline-block text-left">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Affordable education</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Support for vulnerable families</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Strong moral formation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Growing infrastructure</span>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Shared Values Across All Campuses */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
                    Shared Values Across All Campuses
                  </h3>
                  <ul className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed inline-block text-left">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Faith</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Discipline</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Excellence</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Compassion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      <span>Opportunity for every child</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom blue accent line matching reference */}
              <div className="w-full h-1 bg-blue-600 mt-12 sm:mt-16 rounded-full" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Quick Links Grid ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                Our Work in Kakumiro
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                What We Do in Our Community
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Nurturing children, supporting rural families, and building lasting educational infrastructure.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {quickLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealSection key={item.title} delay={i * 50}>
                  <Link
                    to={item.href}
                    className="group block bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-5 text-xs font-bold text-blue-600 group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="relative bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-950 rounded-3xl p-10 sm:p-14 lg:p-16 text-white shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 text-center lg:text-left max-w-2xl relative z-10">
                <span className="inline-block bg-white/15 text-blue-200 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Community Solidarity
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Help Keep a Vulnerable Child in the Classroom
                </h2>
                <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                  Every term, promising children in our villages face the heartbreak of staying home due to unpaid school fees or lack of scholastic materials. Through our Education Fund, £40,000 annually provides full sponsorship, daily nutrition, uniforms, and books for 200 learners.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center flex-shrink-0 relative z-10">
                <Link
                  to="/education-fund"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-amber-400/20 transition-all hover:-translate-y-0.5 text-sm sm:text-base flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                  Support a Learner Today
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-2xl border border-white/25 backdrop-blur-sm transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  Speak With Fr. Paul &amp; Team
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
