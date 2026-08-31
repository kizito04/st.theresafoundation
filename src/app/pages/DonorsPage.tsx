import { Link } from "react-router";
import { Award, Heart, Sparkles, ShieldCheck, Quote } from "lucide-react";

export default function DonorsPage() {
  const donorTiers = [
    {
      tier: "Silver Jubilee Benefactors",
      badge: "🏆 Gold Honor",
      desc: "Foundational supporters committing major support towards campus expansion and £40,000 Education Fund targets.",
      partners: ["Hoima Catholic Diocese Friends", "UK Educational Partners", "Ugandan Diaspora Foundation Trust"],
      color: "border-amber-300 bg-amber-50/60",
    },
    {
      tier: "Child Education Sponsors",
      badge: "🌹 Heart of St. Theresa",
      desc: "Individual donors subscribing £200 annually to sponsor complete tuition, meals, and uniforms for individual students.",
      partners: ["Over 85+ Individual Child Sponsors in UK, USA, Germany, Italy & Uganda"],
      color: "border-rose-300 bg-rose-50/60",
    },
    {
      tier: "Sports & Equipment Partners",
      badge: "⚽ Sports Patrons",
      desc: "Organizations and sports clubs donating football gear, athletics kit, and chess sets for young athletes.",
      partners: ["Local Community Sports Patrons", "Chess Mentorship Friends"],
      color: "border-emerald-300 bg-emerald-50/60",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-r from-amber-950 via-rose-950 to-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            7.2 DONOR RECOGNITION
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Honoring Our Supporters & Partners
          </h1>
          <p className="text-lg text-amber-100/80 max-w-2xl mx-auto mt-3">
            Extending our deepest gratitude to individuals, families, and institutions whose generosity empowers our mission.
          </p>
        </div>
      </section>

      {/* Founder's Gratitude Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-900 to-amber-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <Quote className="w-8 h-8 text-amber-300" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif">
              "Your Kindness is the Rose of Love in Action"
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Every child who receives a textbook, sits in a warm classroom, or plays on our sports grounds is a direct testament to your selfless support. On behalf of the entire St. Theresa Foundation family, thank you for walking with us during this Silver Jubilee journey.
            </p>
            <span className="block font-serif font-bold text-amber-300">— Rev. Fr. Paul Bigirwa (Founder)</span>
          </div>
        </div>
      </section>

      {/* Donor Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donorTiers.map((item) => (
            <div key={item.tier} className={`p-8 rounded-3xl border ${item.color} shadow-lg space-y-4 flex flex-col justify-between`}>
              <div className="space-y-3">
                <span className="bg-white text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full border border-slate-200 inline-block">
                  {item.badge}
                </span>
                <h3 className="text-2xl font-bold font-serif text-slate-900">{item.tier}</h3>
                <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
                
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Featured Benefactors:</h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {item.partners.map((p) => (
                      <li key={p} className="flex items-center gap-1.5">
                        <span className="text-amber-600">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/education-fund"
                  className="block text-center w-full bg-slate-900 hover:bg-rose-900 text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-sm"
                >
                  Join Donor Wall
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
