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
      title: "About the Founder",
      desc: "Rev. Fr. Paul Bigirwa's 25-year priesthood journey & the Silver Jubilee thanksgiving initiative.",
      icon: Award,
      href: "/about",
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      title: "St. Theresa Schools",
      desc: "Main Campus, Annex Campus, and Murubya Outreach — three campuses, one mission.",
      icon: BookOpen,
      href: "/schools",
      iconBg: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Sports Academy",
      desc: "Nurturing youth through Football, Athletics, Netball, and Chess.",
      icon: Trophy,
      href: "/sports-academy",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Education Fund",
      desc: "Targeting £40,000 annually to sponsor 200 vulnerable learners across three districts.",
      icon: Heart,
      href: "/education-fund",
      iconBg: "bg-amber-100 text-amber-700",
    },
    {
      title: "Transporters",
      desc: "Safe and reliable transport across Kakumiro, Kibaale, Kagadi & Hoima districts.",
      icon: Bus,
      href: "/transporters",
      iconBg: "bg-violet-100 text-violet-700",
    },
    {
      title: "Photo Gallery",
      desc: "Moments of growth, Silver Jubilee 2025 celebrations, and community joy.",
      icon: ImageIcon,
      href: "/gallery",
      iconBg: "bg-pink-100 text-pink-700",
    },
    {
      title: "Contact Us",
      desc: "Get in touch via WhatsApp, phone, or visit our head office in Igayaza.",
      icon: Phone,
      href: "/contact",
      iconBg: "bg-slate-100 text-slate-700",
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                🌹 Silver Jubilee Thanksgiving Initiative (2025)
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
                  St. Theresa Foundation
                </span>
              </h1>

              <p className="text-lg text-blue-100/90 leading-relaxed max-w-xl">
                A Silver Jubilee thanksgiving initiative dedicated to empowering children,
                uplifting families, and spreading hope. Founded by{" "}
                <strong className="text-white font-semibold">Rev. Fr. Paul Bigirwa</strong>{" "}
                in celebration of 25 years of priesthood —{" "}
                <strong className="text-blue-300">05 July 2025</strong>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/education-fund"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5 text-sm"
                >
                  <Heart className="w-4 h-4 fill-blue-700 text-blue-700" />
                  Support Our Mission
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 backdrop-blur-sm transition-all text-sm"
                >
                  About Fr. Paul Bigirwa
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15">
                {[
                  { value: "25 Yrs", label: "Silver Jubilee Priesthood" },
                  { value: "200+", label: "Children Sponsored / Yr" },
                  { value: "3", label: "School Campuses" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs text-blue-300 mt-0.5 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/hero.png"
                  alt="St. Theresa Foundation Children"
                  className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-blue-300 uppercase tracking-wider font-bold mb-1">
                    🌹 The Little Flower Spirit
                  </p>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Nurturing Talent with Dignity &amp; Hope
                  </h3>
                  <p className="text-xs text-blue-200/80 mt-1">
                    Discovering hidden potential across rural communities in Uganda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Strip ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="bg-blue-900 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="absolute right-6 bottom-4 text-white/5 text-[120px] select-none font-serif pointer-events-none">
                🌹
              </div>
              <div className="max-w-3xl relative z-10 space-y-5">
                <span className="inline-block bg-white/15 text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  Empowering every child to flourish with dignity and hope.
                </h2>
                <p className="text-blue-100 text-base leading-relaxed">
                  "To nurture talent, support education, strengthen families, and create
                  opportunities for children and youth to flourish with dignity and hope."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      title: "Educational Sponsorship",
                      desc: "Scholarships and learning materials for underprivileged children.",
                    },
                    {
                      title: "Holistic Youth Formation",
                      desc: "Academic rigor combined with moral grounding and sports academies.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 bg-white/10 p-4 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-blue-200/80 mt-0.5">{item.desc}</p>
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
      <section className="py-4 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                Inspiring Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                Our Inspiration
              </h2>
              <p className="text-slate-500 mt-2 text-sm">
                Transforming lives through opportunity, passion, and faith.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: "♟️",
                iconBg: "bg-amber-50",
                title: "Queen of Katwe — Phiona Mutesi",
                body: "From the unpaved streets of Katwe slums in Kampala to the international chess grandmaster stage, Phiona Mutesi's story is a living reminder that brilliance can emerge from the most unexpected places when a child is given a chance.",
                quote:
                  "\"Size does not dictate potential. Strategic thinking, belief, and mentorship can turn an underprivileged learner into a global leader.\"",
                quoteBg: "bg-amber-50",
                quoteText: "text-amber-800",
                quoteIcon: "text-amber-500",
                delay: 0,
              },
              {
                icon: "⚽",
                iconBg: "bg-emerald-50",
                title: "Pelé: Birth of a Legend",
                body: "From barefoot street football in Brazil to becoming a world icon, Pelé demonstrated that talent, when nurtured with discipline and passion, can transform a young life, lift an entire family, and inspire nations.",
                quote:
                  "\"Enthusiasm is everything. Every child in our rural communities carries extraordinary potential waiting to be unlocked.\"",
                quoteBg: "bg-emerald-50",
                quoteText: "text-emerald-800",
                quoteIcon: "text-emerald-500",
                delay: 100,
              },
            ].map((card) => (
              <RevealSection key={card.title} delay={card.delay}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{card.body}</p>
                  </div>
                  <div
                    className={`p-4 ${card.quoteBg} rounded-xl flex items-start gap-3 text-xs ${card.quoteText}`}
                  >
                    <Quote className={`w-4 h-4 ${card.quoteIcon} flex-shrink-0 mt-0.5`} />
                    <p className="italic leading-relaxed">{card.quote}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* St. Theresa Summary */}
          <RevealSection delay={150}>
            <div className="mt-6 bg-blue-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🌹</div>
                <div>
                  <h4 className="font-bold text-blue-950 text-base">
                    St. Theresa of Lisieux — Patron of Simplicity &amp; Love
                  </h4>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Her 'Little Way' teaches that small acts of love performed with great heart
                    can transform the world.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="whitespace-nowrap bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all flex-shrink-0"
              >
                Read Our Full Inspiration
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Quick Links Grid ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                Explore the Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                What We Do
              </h2>
              <p className="text-slate-500 mt-2 text-sm">
                Discover our educational, sports, and charitable programs.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {quickLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealSection key={item.title} delay={i * 60}>
                  <Link
                    to={item.href}
                    className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-xs font-bold text-blue-600 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
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
            <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-2xl p-10 sm:p-14 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  Join Us in Sponsoring a Child Today
                </h2>
                <p className="text-blue-100 text-base">
                  Our Education Fund targets £40,000 annually to support 200 underprivileged
                  learners with tuition, uniforms, feeding, and medical care.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center flex-shrink-0">
                <Link
                  to="/education-fund"
                  className="bg-white text-blue-900 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 transition-all text-sm"
                >
                  Donate to Education Fund
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 transition-all text-sm"
                >
                  Contact Foundation
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
