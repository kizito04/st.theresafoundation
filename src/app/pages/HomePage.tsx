import { Link } from "react-router";
import { Heart, Award, ArrowRight, BookOpen, Trophy, Bus, Image as ImageIcon, Phone, CheckCircle2, Quote } from "lucide-react";
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
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white min-h-[580px] flex items-center">
        {/* Faint atmospheric background photo of House 2 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/House 2.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity scale-105"
          />
          {/* Subtle gradient overlay to keep text crystal clear and create depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-blue-900/80" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-blue-950/30 to-blue-950/80" />
        </div>

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-amber-100 to-white">
                  St. Theresa Foundation
                </span>
              </h1>

              <p className="text-lg text-blue-100/90 leading-relaxed max-w-xl">
                Founded by <strong className="text-white font-semibold">Rev. Fr. Paul Bigirwa</strong> in
                humble thanksgiving for 25 years of priestly service, we walk beside rural families
                across Kakumiro and greater Bunyoro—giving every boy and girl a quality Catholic education,
                dignity, and a real chance to thrive.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/education-fund"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all hover:-translate-y-0.5 text-sm"
                >
                  <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                  Sponsor a Child in Kakumiro
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/25 backdrop-blur-sm transition-all hover:-translate-y-0.5 text-sm"
                >
                  Fr. Paul's Calling &amp; Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15">
                {[
                  { value: "25 Yrs", label: "Priesthood of Fr. Bigirwa" },
                  { value: "200+", label: "Vulnerable Pupils Sponsored" },
                  { value: "3 Campuses", label: "Main, Annex & Murubya" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs text-blue-200 mt-0.5 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Annex 4 photo inside a stylized circular frame */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group">
                {/* Glowing decorative rings */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-400/30 via-blue-400/20 to-indigo-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -inset-2 rounded-full border border-blue-300/30 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
                
                {/* Circular Image Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2.5 bg-gradient-to-br from-white/30 via-blue-400/20 to-white/10 shadow-2xl backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/90 shadow-2xl relative">
                    <img
                      src="/images/Annex 4.jpeg"
                      alt="St. Theresa Annex Campus Pupils"
                      className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>
                </div>

                {/* Floating pill badge attached to circle */}
                <div className="absolute -bottom-3 -left-2 sm:bottom-2 sm:-left-4 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 z-20 transition-transform duration-300 group-hover:scale-105">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shadow-sm">
                    🌹
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 leading-none">Annex Campus</p>
                    <p className="text-xs font-bold text-slate-800 leading-tight mt-0.5">Kakumiro, Uganda</p>
                  </div>
                </div>

                <div className="absolute -top-3 -right-2 sm:top-2 sm:-right-4 bg-blue-900/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl border border-blue-400/30 text-xs font-semibold shadow-lg flex items-center gap-2 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Nurturing Potential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Strip ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="animate-float relative bg-gradient-to-br from-blue-900 via-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-blue-700/40 overflow-hidden group hover:shadow-[0_25px_60px_rgba(30,58,138,0.3)] transition-all duration-500">
              {/* Soft decorative background glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Giant watermark icon */}
              <div className="absolute right-6 bottom-4 text-white/5 text-[140px] select-none font-serif pointer-events-none transition-transform duration-700 group-hover:scale-110">
                🌹
              </div>

              <div className="max-w-4xl relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block bg-amber-400/20 text-amber-200 border border-amber-300/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    Our Mission &amp; Calling
                  </span>
                  <span className="text-blue-200 text-xs font-medium">
                    Guided by St. Theresa of Lisieux’s Little Way
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                  Empowering every child with education, faith, and human dignity.
                </h2>

                <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
                  "To nurture rural talent, remove financial barriers to education, strengthen vulnerable
                  families, and walk alongside youth so they grow with strong moral grounding, self-reliance,
                  and bright futures."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-3">
                  {[
                    {
                      title: "Vulnerable Learner Sponsorship",
                      desc: "Removing school fee barriers so orphans and underprivileged children in Kakumiro, Kibaale, and Kagadi remain safely in school.",
                    },
                    {
                      title: "Faith & Character Formation",
                      desc: "Rooted in Catholic traditions of compassion, humility, truth, and community responsibility inspired by the Little Flower.",
                    },
                    {
                      title: "Quality Academics & Practical Skills",
                      desc: "Equipping learners across our three campuses with strong foundational literacy, numeracy, and vocational disciplines.",
                    },
                    {
                      title: "Sports & Talent Academies",
                      desc: "Developing character, resilience, and teamwork through competitive football, athletics, netball, and strategic chess.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3.5 bg-white/10 hover:bg-white/15 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:translate-x-1"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-blue-100/80 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden group">
                {/* Faint Queen of Katwe Image on the right side */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-5/12 pointer-events-none overflow-hidden rounded-r-3xl z-0">
                  <img
                    src="/images/queen 1.png"
                    alt="Phiona Mutesi - Queen of Katwe"
                    className="w-full h-full object-cover object-top opacity-20 mix-blend-multiply group-hover:scale-105 group-hover:opacity-25 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    ♟️
                  </div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                    Quiet Tenacity &amp; Strategic Vision
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Queen of Katwe — Phiona Mutesi
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                    Growing up amidst severe hardship in Katwe, Kampala, Phiona Mutesi discovered chess at a community outreach center. Through patient study, resilience, and dedicated mentorship, she rose to international acclaim. Her story reminds our teachers and pupils in Kakumiro that brilliance is never confined to affluent cities—given opportunity, faith, and patience, any village child can master the board of life.
                  </p>
                </div>

                <div className="relative z-10 p-4 sm:p-5 bg-amber-50/80 rounded-2xl border border-amber-100/80 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900 backdrop-blur-xs">
                  <Quote className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="italic leading-relaxed font-medium">
                    "In chess, as in life: a humble pawn, walking forward one step at a time with quiet faith, can reach the other side and become a queen."
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Pelé Card */}
            <RevealSection delay={100}>
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden group">
                {/* Faint pele 2.png in the background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
                  <img
                    src="/images/pele 2.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center opacity-10 mix-blend-luminosity filter contrast-125 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
                </div>

                {/* Faint pele.png on the right side */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-5/12 pointer-events-none overflow-hidden rounded-r-3xl z-0">
                  <img
                    src="/images/pele.png"
                    alt="Pelé"
                    className="w-full h-full object-cover object-top opacity-20 mix-blend-multiply group-hover:scale-105 group-hover:opacity-25 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    ⚽
                  </div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    Humble Roots &amp; Relentless Passion
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Pelé: Birth of a Legend
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                    Starting on dusty clearings playing barefoot with a sock stuffed with rags, Pelé's joy, tireless work ethic, and humility took him from poverty to world glory. He embodies the exact spirit we teach our young athletes at St. Theresa: that lack of costly boots never prevents a dedicated boy or girl from developing great discipline, lifting their family, and honoring God with their talent.
                  </p>
                </div>

                <div className="relative z-10 p-4 sm:p-5 bg-emerald-50/80 rounded-2xl border border-emerald-100/80 flex items-start gap-3.5 text-xs sm:text-sm text-emerald-900 backdrop-blur-xs">
                  <Quote className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="italic leading-relaxed font-medium">
                    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and above all, love of what you are doing or learning to do."
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* St. Theresa Summary */}
          <RevealSection delay={150}>
            <div className="mt-8 bg-blue-50/80 border border-blue-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-3xl flex-shrink-0 shadow-inner">
                  🌹
                </div>
                <div>
                  <h4 className="font-extrabold text-blue-950 text-base sm:text-lg">
                    St. Theresa of Lisieux — Patroness of Simplicity &amp; Love
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Her 'Little Way' teaches that changing lives begins with small acts done with great love:
                    a hot cup of porridge for a pupil, a shared notebook, or a word of encouragement to a struggling village family.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="whitespace-nowrap bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md flex-shrink-0"
              >
                Read Our Story &amp; Values
              </Link>
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
