import { Link } from "react-router";
import { Sparkles, Heart, Globe, Award, Target, Eye, Quote, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const internationalLocations = [
    { country: "Uganda", role: "Parish Priest, School Director & Pastoral Coordinator", flag: "🇺🇬" },
    { country: "Italy", role: "International Pastoral Service & Theological Studies", flag: "🇮🇹" },
    { country: "Germany", role: "Parish Ministry & Pastoral Exchange", flag: "🇩🇪" },
    { country: "United States", role: "Pastoral Outreach & Community Partnerships", flag: "🇺🇸" },
    { country: "United Kingdom", role: "Parish Ministry & Educational Fund Coordination", flag: "🇬🇧" },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-rose-950 via-rose-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            1. ABOUT THE FOUNDATION & FOUNDER
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Our Story & Founder's Vision
          </h1>
          <p className="text-lg text-rose-100/80 max-w-2xl mx-auto mt-3">
            Born out of 25 years of priestly gratitude, dedicated to transforming young lives through faith, education, and love.
          </p>
        </div>
      </section>

      {/* 1.1 Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/40">
              <img
                src="/images/founder.png"
                alt="Rev. Fr. Paul Bigirwa"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Founder & Director
                </span>
                <h3 className="text-2xl font-bold font-serif mt-2">Rev. Fr. Paul Bigirwa</h3>
                <p className="text-xs text-rose-200">Hoima Catholic Diocese • Silver Jubilee (05 July 2025)</p>
              </div>
            </div>
          </div>

          {/* Founder Biography Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-rose-50 text-rose-900 font-bold text-xs px-3.5 py-1.5 rounded-full border border-rose-200">
              1.1 Founder — Rev. Fr. Paul Bigirwa
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 leading-tight">
              A Life Dedicated to Ministry, Education & Service
            </h2>

            <p className="text-gray-700 leading-relaxed text-base">
              <strong>Rev. Fr. Paul Bigirwa</strong> was born in <strong>Igayaza, Western Uganda</strong>, and serves as a devoted priest of the <strong>Hoima Catholic Diocese</strong>. Over the years, he has ministered in various parishes, directed schools, coordinated pastoral programs, and served internationally across Italy, Germany, the USA, and the UK.
            </p>

            <p className="text-gray-700 leading-relaxed text-base">
              His <strong>Silver Jubilee of priesthood on 05 July 2025</strong> became a moment of deep reflection — a moment to look back with gratitude and look forward with renewed commitment to serve God’s people.
            </p>

            {/* International Ministry Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-rose-700" />
                Global Ministry & Pastoral Reach
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {internationalLocations.map((loc) => (
                  <div key={loc.country} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-3">
                    <span className="text-xl">{loc.flag}</span>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{loc.country}</h5>
                      <p className="text-xs text-gray-600">{loc.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.2 Jubilee Gift to the Community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-rose-950 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="bg-rose-950 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              1.2 Jubilee Gift to the Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-rose-950">
              A Living Memorial of Gratitude
            </h2>
            <div className="p-6 bg-white/90 rounded-2xl border border-rose-900/20 text-rose-950 shadow-inner">
              <Quote className="w-8 h-8 text-rose-800 mb-2" />
              <p className="text-xl sm:text-2xl font-serif italic font-semibold leading-relaxed">
                “To give back to the community for the Lord’s goodness in my life.”
              </p>
              <span className="block text-sm font-bold text-rose-900 mt-3">— Rev. Fr. Paul Bigirwa (Silver Jubilee Message)</span>
            </div>
            <p className="text-rose-950 text-sm sm:text-base font-medium leading-relaxed">
              The St. Theresa Foundation is not just an institution; it is a heart-felt prayer of thanksgiving. Fr. Paul established the Foundation as his lasting gift back to the soil and community that nurtured him, creating opportunities for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* 1.3 Inspirations Behind the Foundation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-rose-700 font-bold text-xs uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            1.3 Guiding Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Inspirations Behind the Foundation
          </h2>
          <p className="text-gray-600 mt-2">
            Three powerful stories that shape our devotion, passion, and strategic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Inspiration 1: Queen of Katwe */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl font-bold">
                ♟️
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Queen of Katwe
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A reminder that brilliance can emerge from the most unexpected places when a child is given a chance. Phiona Mutesi's journey from a slum child to an international chess icon inspires our academic and chess mentorship programs.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-amber-800">
              Key Lesson: Opportunity unlocks potential.
            </div>
          </div>

          {/* Inspiration 2: Pelé */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-2xl font-bold">
                ⚽
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Pelé: Birth of a Legend
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A testimony that talent, when nurtured, can transform a life and inspire a nation. From playing with improvised socks stuffed with rags to world glory, Pelé's grit guides our Sports Academy.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
              Key Lesson: Nurtured talent transforms lives.
            </div>
          </div>

          {/* Inspiration 3: St. Theresa of Lisieux */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-900 flex items-center justify-center text-2xl font-bold">
                🌹
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                St. Theresa of Lisieux
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Patron of simplicity, love, and small acts that change the world — "the Little Flower". She inspires us to perform small, daily acts of kindness with profound love for every vulnerable learner.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-rose-800">
              Key Lesson: Small acts done with great love.
            </div>
          </div>
        </div>
      </section>

      {/* 1.4 Vision & 1.5 Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-rose-900/50">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block">
              1.4 Vision
            </span>
            <h3 className="text-2xl font-bold font-serif">To Raise a Responsible Generation</h3>
            <p className="text-base text-rose-100/90 leading-relaxed font-light">
              To raise a generation of confident, educated, spiritually grounded, and socially responsible young people capable of leading transformation in Uganda and globally.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-rose-900 to-amber-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-amber-500/30">
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-amber-200 text-xs font-bold uppercase tracking-wider block">
              1.5 Mission
            </span>
            <h3 className="text-2xl font-bold font-serif">Create Pathways Beyond Limitations</h3>
            <p className="text-base text-rose-100/90 leading-relaxed font-light">
              To support education, nurture talent, strengthen families, and create pathways for children to rise beyond limitations, poverty, and financial hardship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
