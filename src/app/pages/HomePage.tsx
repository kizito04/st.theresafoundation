import { Link } from "react-router";
import { Sparkles, Heart, Award, ArrowRight, BookOpen, Trophy, Bus, Image as ImageIcon, Phone, CheckCircle2, Quote } from "lucide-react";

export default function HomePage() {
  const quickLinks = [
    {
      title: "About the Founder",
      desc: "Rev. Fr. Paul Bigirwa's 25-year priesthood journey & Silver Jubilee gift.",
      icon: Award,
      href: "/about",
      color: "from-rose-500 to-rose-700",
      accent: "bg-rose-100 text-rose-800",
    },
    {
      title: "St. Theresa Schools",
      desc: "Discover Main Campus, Annex Campus, and Murubya Outreach Campus.",
      icon: BookOpen,
      href: "/schools",
      color: "from-blue-600 to-indigo-800",
      accent: "bg-blue-100 text-blue-800",
    },
    {
      title: "Sports Academy",
      desc: "Nurturing youth in Football, Athletics, Netball, and Chess.",
      icon: Trophy,
      href: "/sports-academy",
      color: "from-emerald-600 to-teal-800",
      accent: "bg-emerald-100 text-emerald-800",
    },
    {
      title: "Education Fund",
      desc: "Targeting £40,000 annually to sponsor 200 vulnerable learners.",
      icon: Heart,
      href: "/education-fund",
      color: "from-amber-500 to-orange-700",
      accent: "bg-amber-100 text-amber-900",
    },
    {
      title: "St. Theresa Transporters",
      desc: "Safe and reliable transport across Kakumiro, Kibaale, Kagadi & Hoima.",
      icon: Bus,
      href: "/transporters",
      color: "from-violet-600 to-purple-800",
      accent: "bg-violet-100 text-violet-800",
    },
    {
      title: "Photo Gallery",
      desc: "Moments of growth, Silver Jubilee 2025, and community joy.",
      icon: ImageIcon,
      href: "/gallery",
      color: "from-pink-500 to-rose-700",
      accent: "bg-pink-100 text-pink-800",
    },
    {
      title: "Contact Us",
      desc: "Get in touch via WhatsApp, phone, or visit our head office.",
      icon: Phone,
      href: "/contact",
      color: "from-slate-700 to-slate-900",
      accent: "bg-slate-100 text-slate-800",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-950 via-rose-900 to-slate-900 text-white py-20 lg:py-28">
        {/* Background Overlay Graphic */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                Silver Jubilee Thanksgiving Initiative (2025)
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white leading-tight">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-rose-200">
                  St. Theresa Foundation
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-rose-100/90 leading-relaxed font-light">
                A Silver Jubilee thanksgiving initiative dedicated to empowering children, uplifting families, and spreading the gentle love of St. Theresa — the Little Flower. Founded by Rev. Fr. Paul Bigirwa, the Foundation stands as a living memorial of gratitude for 25 years of priesthood, celebrated on <strong className="text-amber-300 font-semibold">05 July 2025</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/education-fund"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-rose-950 font-bold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 text-base"
                >
                  <Heart className="w-5 h-5 fill-rose-950" />
                  Support Our Mission
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all text-base"
                >
                  About Fr. Paul Bigirwa
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats Ribbon */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-rose-800/60">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">25 Years</span>
                  <span className="text-xs text-rose-200/80">Silver Jubilee Priesthood</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">200+</span>
                  <span className="text-xs text-rose-200/80">Children Sponsered/Yr</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">3 Campuses</span>
                  <span className="text-xs text-rose-200/80">Main, Annex & Murubya</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30 group">
                <img
                  src="/images/hero.png"
                  alt="St. Theresa Foundation Children"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-rose-950/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                    🌹 The Little Flower Spirit
                  </div>
                  <h3 className="text-lg font-bold font-serif">Nurturing Talent with Dignity & Hope</h3>
                  <p className="text-xs text-rose-200/90 mt-1">Discovering hidden roses across rural communities in Uganda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-900 to-rose-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 text-white/5 text-9xl select-none font-serif">🌹</div>
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="bg-amber-400 text-rose-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Core Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">Our Mission</h2>
            <p className="text-lg sm:text-xl text-rose-100 font-light leading-relaxed">
              "To nurture talent, support education, strengthen families, and create opportunities for children and youth to flourish with dignity and hope."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Educational Sponsorship</h4>
                  <p className="text-xs text-rose-200/80">Providing scholarships and learning materials to underprivileged children.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Holistic Youth Formation</h4>
                  <p className="text-xs text-rose-200/80">Combining academic rigor with moral grounding and sports academies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inspiration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-rose-700 font-bold text-xs uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Inspiring Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Our Inspiration
          </h2>
          <p className="text-gray-600 mt-2">
            Transforming lives through opportunity, passion, and faith.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Queen of Katwe Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
              ♟️
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">
              Queen of Katwe — Phiona Mutesi
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              From the unpaved streets of Katwe slums in Kampala to the international chess grandmaster stage, Phiona Mutesi's story is a living reminder that brilliance and genius can emerge from the most unexpected places when a child is given a chance.
            </p>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/60 text-xs text-amber-900 flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="italic">
                "Size does not dictate potential. Strategic thinking, belief, and mentorship can turn an underprivileged learner into a global leader."
              </p>
            </div>
          </div>

          {/* Pelé Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
              ⚽
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">
              Pelé: Birth of a Legend
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              From barefoot street football in Brazil to becoming a world icon, Pelé demonstrated that talent, when nurtured with discipline and passion, can transform a young life, lift an entire family, and inspire nations around the globe.
            </p>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/60 text-xs text-emerald-900 flex items-start gap-3">
              <Quote className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="italic">
                "Enthusiasm is everything. It must be taut and vibrating like a guitar string. Every child in our rural communities carries that potential."
              </p>
            </div>
          </div>
        </div>

        {/* St. Theresa Summary Box */}
        <div className="mt-8 bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 rounded-2xl p-6 border border-rose-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🌹</div>
            <div>
              <h4 className="font-bold text-rose-950 font-serif text-lg">St. Theresa of Lisieux — Patron of Simplicity & Love</h4>
              <p className="text-xs text-gray-600">Her 'Little Way' teaches us that small acts of love performed with great heart can transform the world.</p>
            </div>
          </div>
          <Link
            to="/about"
            className="whitespace-nowrap bg-rose-900 hover:bg-rose-800 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all"
          >
            Read Our Full Inspiration
          </Link>
        </div>
      </section>

      {/* Quick Links Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Explore Foundation Sections
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Quick Links
          </h2>
          <p className="text-gray-600 mt-2">
            Navigate through our core educational, sports, and charitable arms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.href}
                className="group bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.accent} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-rose-700 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-2 group-hover:text-rose-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-rose-800 group-hover:text-rose-950">
                  Explore Section
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-rose-950 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-rose-950">
              Join Us in Sponsoring a Child Today
            </h2>
            <p className="text-rose-950/80 text-base font-medium">
              Our Education Fund targets £40,000 annually to support 200 underprivileged learners with tuition, uniforms, feeding, and medical care.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/education-fund"
              className="bg-rose-950 hover:bg-rose-900 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-base"
            >
              Donate to Education Fund
            </Link>
            <Link
              to="/contact"
              className="bg-white/90 hover:bg-white text-rose-950 font-bold px-6 py-4 rounded-xl transition-all text-base"
            >
              Contact Foundation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
