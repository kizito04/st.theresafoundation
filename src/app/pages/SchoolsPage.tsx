import { Link } from "react-router";
import { BookOpen, School, Heart, CheckCircle2, Shield, Star, Users, Award, Sparkles } from "lucide-react";

export default function SchoolsPage() {
  const sharedValues = [
    { title: "Faith", desc: "Rooted in Catholic traditions and moral values.", icon: "✝️" },
    { title: "Discipline", desc: "Fostering self-respect, order, and integrity.", icon: "⚖️" },
    { title: "Excellence", desc: "Striving for academic mastery and critical thinking.", icon: "🌟" },
    { title: "Compassion", desc: "Spreading the gentle love of St. Theresa to all.", icon: "🌹" },
    { title: "Opportunity for Every Child", desc: "No child left behind due to financial constraint.", icon: "🌱" },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-rose-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <School className="w-4 h-4 text-blue-300" />
            2. ST. THERESA SCHOOLS NETWORK
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Nurturing Minds, Character & Values
          </h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mt-3">
            Providing accessible, high-quality Catholic education across three specialized campuses in Western Uganda.
          </p>
        </div>
      </section>

      {/* 2.1 Main Campus */}
      <section id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-blue-100 text-blue-900 font-bold text-xs px-3.5 py-1.5 rounded-full border border-blue-200">
              2.1 Main Campus
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">
              St. Theresa Main Campus
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              St. Theresa Main Campus is the heart of our educational mission. It offers a strong academic foundation, disciplined formation, and a nurturing environment where every child is valued.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Competent and caring teachers",
                  "Modern classrooms & learning aids",
                  "Nutritious school feeding program",
                  "Vibrant co-curricular activities",
                  "Catholic values & character formation",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-blue-200">
              <img
                src="/images/hero.png"
                alt="Main Campus Students"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Annex Campus */}
      <section id="annex" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-200">
              <img
                src="/images/sports.png"
                alt="Annex Campus Early Learners"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="bg-emerald-100 text-emerald-900 font-bold text-xs px-3.5 py-1.5 rounded-full border border-emerald-200">
              2.2 Annex Campus
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">
              St. Theresa Annex Campus
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              The Annex Campus expands our reach to more families, offering quality education with the same high standards of discipline, academic excellence, and pastoral care.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Campus Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Early childhood development center",
                  "Lower primary classes (P.1 - P.3)",
                  "Safe, warm learning environment",
                  "Dedicated & compassionate staff",
                ].map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 Murubya Campus */}
      <section id="murubya" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-rose-100 text-rose-900 font-bold text-xs px-3.5 py-1.5 rounded-full border border-rose-200">
              2.3 Murubya Campus (Rural Outreach)
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900">
              St. Theresa Murubya Campus
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Murubya Campus is our dedicated rural outreach school, specifically serving children who would otherwise have limited or no access to quality education.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Community Impact</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Affordable & subsidized education",
                  "Targeted support for vulnerable families",
                  "Strong moral formation & guidance",
                  "Steadily growing infrastructure",
                ].map((impact) => (
                  <div key={impact} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-rose-900 to-amber-900 text-white rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-serif font-bold text-amber-300">Rural Education Initiative</h4>
              <p className="text-xs text-rose-100 leading-relaxed">
                Murubya Campus bridges the urban-rural education divide, bringing high standard classrooms and feeding programs directly into rural villages.
              </p>
              <Link
                to="/education-fund"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-rose-950 font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                Sponsor Murubya Learners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Values Across All Campuses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
              Foundation Foundation
            </span>
            <h2 className="text-3xl font-extrabold font-serif mt-3">
              Shared Values Across All Campuses
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Every child across Main, Annex, and Murubya campuses experiences these core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sharedValues.map((val) => (
              <div key={val.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all text-center space-y-2">
                <span className="text-3xl block">{val.icon}</span>
                <h3 className="font-bold text-amber-300 text-base font-serif">{val.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
