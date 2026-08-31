import { Link } from "react-router";
import { Trophy, Target, Award, Sparkles, CheckCircle2, Shield, Heart } from "lucide-react";

export default function SportsAcademyPage() {
  const sportsPrograms = [
    {
      title: "Football Academy",
      desc: "Comprehensive tactical coaching, endurance training, and competitive tournament play inspired by Pelé's legendary journey.",
      icon: "⚽",
      color: "border-emerald-200 bg-emerald-50/50",
    },
    {
      title: "Chess Club",
      desc: "Strategic mind training and mental resilience inspired directly by Queen of Katwe (Phiona Mutesi).",
      icon: "♟️",
      color: "border-amber-200 bg-amber-50/50",
    },
    {
      title: "Athletics & Track",
      desc: "Sprinting, long-distance running, and physical fitness development under certified coaches.",
      icon: "🏃‍♂️",
      color: "border-blue-200 bg-blue-50/50",
    },
    {
      title: "Netball Division",
      desc: "Fostering female empowerment, teamwork, agility, and sportsmanship across local leagues.",
      icon: "🏐",
      color: "border-rose-200 bg-rose-50/50",
    },
    {
      title: "Talent Scouting & Mentorship",
      desc: "Active rural talent identification, trial showcases, and direct links to national/international scouts.",
      icon: "🎯",
      color: "border-violet-200 bg-violet-50/50",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-slate-900 to-rose-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4 text-emerald-300" />
            3. ST. THERESA SPORTS ACADEMY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Nurturing Tomorrow's Champions
          </h1>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto mt-3">
            A vibrant hub where young athletes discover their potential and grow in discipline, teamwork, and confidence.
          </p>
        </div>
      </section>

      {/* Academy Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold font-serif text-slate-900 leading-tight">
              Unlocking Rural Talent Through Sports & Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              The <strong>St. Theresa Sports Academy</strong> was created to give children in Kakumiro, Kibaale, and Hoima districts the opportunity to excel beyond traditional classrooms. By combining athletic training with chess, we equip young minds with both physical power and tactical intellect.
            </p>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-950 text-sm font-medium">
              "Whether on the football pitch or over a chessboard, sports instill values of resilience and grit that stay with a child for life."
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-400/40">
              <img
                src="/images/sports.png"
                alt="St. Theresa Sports Academy Action"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Academy Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Programs Offered
          </h2>
          <p className="text-gray-600 mt-2">
            Professional training pathways tailored for young talent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsPrograms.map((prog) => (
            <div key={prog.title} className={`p-6 rounded-3xl border ${prog.color} space-y-3 shadow-md hover:shadow-xl transition-all`}>
              <span className="text-3xl block">{prog.icon}</span>
              <h3 className="text-xl font-bold font-serif text-slate-900">{prog.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Goal & Why Sports */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Goal Card */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-emerald-800">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block">
              Our Goal
            </span>
            <h3 className="text-2xl font-bold font-serif">Pathways to National & Global Success</h3>
            <p className="text-sm text-emerald-100/90 leading-relaxed font-light">
              To identify and nurture young talents from rural communities and provide clear pathways to national leagues, academic sports scholarships, and international opportunities.
            </p>
          </div>

          {/* Why Sports Card */}
          <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-rose-900">
            <div className="w-12 h-12 rounded-2xl bg-rose-400/20 text-rose-300 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-rose-300 text-xs font-bold uppercase tracking-wider block">
              Why Sports?
            </span>
            <h3 className="text-2xl font-bold font-serif">Building Character & Future Leaders</h3>
            <p className="text-sm text-rose-100/90 leading-relaxed font-light">
              Sports build character, resilience, teamwork, and hope — essential human values that shape future community leaders, disciplined scholars, and responsible citizens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
