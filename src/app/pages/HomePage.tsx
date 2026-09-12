import { Link } from "react-router";
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
      className={`transition-all duration-700 ease-out ${className} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
      src: "/images/Annex 4.png",
      alt: "St. Theresa Annex Campus Pupils",
    },
    {
      src: "/images/Fr with pupils 1.png",
      alt: "Murubya Pupils with Director Rev. Fr. Paul Bigirwa",
    },
    {
      src: "/images/Annex1.jpg",
      alt: "St. Theresa Campus",
    },
    {
      src: "/images/Fr with pupils.png",
      alt: "St. Theresa Campus",
    },
  ];

  const heroMessages = [
    {
      title: "Welcome to St. Theresa Foundation",
      subtitle: "A Silver Jubilee thanksgiving initiative dedicated to empowering children, uplifting families, and spreading the gentle love of St. Theresa the Little Flower.",
    },
    {
      title: "Empowering Minds, Shaping Futures",
      subtitle: "Inspiring students to achieve excellence in academics, sports, and character.",
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % heroSlides.length;
        // Toggle text message after one full cycle of images moving
        if (next === 0) {
          setCurrentMessageIndex((mPrev) => (mPrev + 1) % heroMessages.length);
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length, heroMessages.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % heroSlides.length;
      if (next === 0) {
        setCurrentMessageIndex((mPrev) => (mPrev + 1) % heroMessages.length);
      }
      return next;
    });
  };

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

        {/* Centered Welcome Message (Toggles after one cycle of images moving) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h1
              key={`title-${currentMessageIndex}`}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight transition-all duration-700 animate-in fade-in"
            >
              {heroMessages[currentMessageIndex].title}
            </h1>
            <p
              key={`sub-${currentMessageIndex}`}
              className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-3xl mx-auto transition-all duration-700 animate-in fade-in"
            >
              {heroMessages[currentMessageIndex].subtitle}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <button
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
        </button> */}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
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
              <div className="relative bg-white rounded-1xl p-8 sm:p-10 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden group min-h-[320px]">
                {/* Highly Visible Queen of Katwe Image on the right side */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-5/12 pointer-events-none overflow-hidden rounded-r-1xl z-0">
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
                    Queen of Katwe: Phiona Mutesi
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Growing up amidst severe hardship in Katwe, Kampala, Phiona Mutesi discovered chess at a community outreach center.
                    Through patient study, resilience, and dedicated mentorship, she rose to international acclaim.
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Pelé Card */}
            <RevealSection delay={100}>
              <div className="relative bg-white rounded-1xl p-8 sm:p-10 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 h-full flex flex-col justify-center overflow-hidden group min-h-[320px]">
                {/* Highly Visible pele 2.png in the background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
                  <img
                    src="/images/pele 2.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center opacity-30 filter contrast-110 group-hover:scale-105 transition-all duration-900"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/50" />
                </div>

                {/* Highly Visible pele.png on the right side */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-5/12 pointer-events-none overflow-hidden rounded-r-1xl z-0">
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
                    Starting on dusty clearings playing barefoot with a sock stuffed with rags, Pelé's joy,
                    tireless work ethic, and humility took him from poverty to world glory.
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

      {/* ── About the Community (Matching Screenshot 2 Layout) ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-6 space-y-5">
                <div className="w-16 h-1 bg-blue-600 rounded-full" />
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  About the Community
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Rooted in Kakumiro District and reaching across the rural communities of Bunyoro sub-region, our schools and outreach initiatives walk hand-in-hand with families, parish communities, and local leaders. Guided by the pastoral dedication of Rev. Fr. Paul Bigirwa, we provide quality Catholic education, moral grounding, and loving care—opening meaningful pathways of hope, talent discovery, and life-changing opportunity for every child.
                </p>
                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm border-b border-blue-300 hover:border-blue-600 pb-0.5 transition-all"
                  >
                    <span>About Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Image murubya with director 2 */}
              <div className="lg:col-span-6 flex justify-center">
                <img
                  src="/images/Murubya with director 2.jpg"
                  alt="Murubya Pupils with Director Rev. Fr. Paul Bigirwa"
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-1.5xl shadow-md"
                />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── St. Theresa Education Fund ── */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="relative bg-white shadow-md overflow-hidden p-8 sm:p-12 flex gap-8 items-center">
              {/* Left: Content */}
              <div className="flex-1 min-w-0">
                <div className="text-4xl sm:text-5xl font-serif text-slate-400 leading-none">
                  "
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mt-2">
                  ST. THERESA EDUCATION FUND
                </h3>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mt-3">
                  The Education Fund is the Foundation's core charity arm, dedicated to supporting children who face financial hardship.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-3">
                  Through annual sponsorships, tuition subsidies, scholastic materials, and nutritious feeding, we stand with over 200 vulnerable learners across Kakumiro, Kibaale, and Kagadi districts ensuring that poverty never interrupts a child's right to learn, grow, and flourish.
                </p>
                <div className="pt-6">
                  <Link
                    to="/education-fund"
                    className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm border-b border-blue-300 hover:border-blue-600 pb-0.5 transition-all"
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span>Support the Education Fund</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right: Circular image centred in white space */}
              <div className="hidden sm:flex flex-shrink-0 w-48 lg:w-56 items-center justify-center">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-md ring-4 ring-slate-100">
                  <img
                    src="/images/Annex collection.jpg"
                    alt="St. Theresa Annex Pupils"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Latest Updates Section (Matching Screenshot 2) ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            {/* Section Heading matching other sections */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Latest updates
              </h2>
            </div>

            {/* Grid layout with vertical divider */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Featured Large Article (Annex 3) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="w-full h-[260px] sm:h-[320px] overflow-hidden rounded-md shadow-sm">
                  <img
                    src="/images/Annex 3.jpg"
                    alt="Applying for St. Theresa Schools - Annex 3"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002f54] tracking-tight leading-snug hover:text-[#a8203e] transition-colors">
                    <Link to="/schools">
                      Applying for St. Theresa
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                    Find out about the St. Theresa Schools admissions and scholarship application process.
                  </p>
                </div>
              </div>

              {/* Right Column: Two stacked cards with Signpost and House 2 */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8 lg:pl-4 lg:border-l lg:border-slate-200">
                {/* Top Item: Signpost */}
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-full sm:w-44 h-36 sm:h-28 overflow-hidden rounded-md flex-shrink-0 shadow-sm">
                    <img
                      src="/images/Signpost.jpeg"
                      alt="Signpost - Getting ready for St. Theresa"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#002f54] tracking-tight leading-snug hover:text-[#a8203e] transition-colors">
                      <Link to="/about">
                        Getting ready for St. Theresa
                      </Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Prepare for campus life with our essential guide to the St. Theresa student and community experience.
                    </p>
                  </div>
                </div>

                {/* Bottom Item: House 2 */}
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-full sm:w-44 h-36 sm:h-28 overflow-hidden rounded-md flex-shrink-0 shadow-sm">
                    <img
                      src="/images/House 2.jpg"
                      alt="House 2 - Joining the St. Theresa community"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#002f54] tracking-tight leading-snug hover:text-[#a8203e] transition-colors">
                      <Link to="/news">
                        Joining the St. Theresa alumni community
                      </Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Completing your studies is not the end of your journey with St. Theresa. Find out how to stay involved with our network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button matching Screenshot 2 */}
            <div className="text-center mt-12">
              <Link
                to="/news"
                className="inline-flex items-center justify-center bg-[#a8203e] hover:bg-[#8f1530] text-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full transition-colors shadow-md"
              >
                VIEW ALL NEWS
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
