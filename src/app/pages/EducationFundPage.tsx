import { Link } from "react-router";
import { Heart, Target, Users, BookOpen, ShieldCheck, Gift, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function EducationFundPage() {
  const [selectedChildCount, setSelectedChildCount] = useState(1);
  const costPerChild = 200; // £200 per child per year

  const whoWeSupport = [
    { title: "Orphans", desc: "Children who have lost one or both parents.", icon: "🕊️" },
    { title: "Vulnerable Families", desc: "Learners from households living below the poverty line.", icon: "🏠" },
    { title: "Disadvantaged Learners", desc: "Children facing severe socio-economic barriers.", icon: "🎒" },
    { title: "Talented Constrained Students", desc: "Gifted minds who lack fees to stay in school.", icon: "💡" },
  ];

  const fundProvides = [
    "Full & Partial Scholarships",
    "School Fees & Tuition",
    "School Uniforms & Clothing",
    "Daily Nutritious Meals (Feeding Support)",
    "Textbooks, Exercise Books & Stationery",
    "Essential Medical Assistance & Healthcare",
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-amber-950 via-rose-950 to-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
            4. ST. THERESA EDUCATION FUND
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Our Core Charity Arm
          </h1>
          <p className="text-lg text-amber-100/80 max-w-2xl mx-auto mt-3">
            Dedicated to breaking the cycle of poverty by providing tuition, uniforms, meals, and hope to vulnerable children.
          </p>
        </div>
      </section>

      {/* Target Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-rose-950 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-rose-950 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Annual Funding Target
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-rose-950">
              £40,000 to Support 200 Children Annually
            </h2>
            <p className="text-rose-950 text-base font-medium leading-relaxed">
              Every single £200 raised secures an entire year of quality Catholic education, daily hot lunches, school uniform, books, and basic healthcare for one vulnerable child in Uganda.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/95 rounded-2xl p-6 shadow-lg space-y-4 border border-rose-950/10">
            <h3 className="font-serif font-bold text-lg text-slate-900 text-center">Interactive Child Sponsorship Calculator</h3>
            
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-700 block">Number of Children to Sponsor:</label>
              <div className="flex items-center gap-2">
                {[1, 2, 5, 10].map((count) => (
                  <button
                    key={count}
                    onClick={() => setSelectedChildCount(count)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedChildCount === count
                        ? "bg-rose-900 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {count} {count === 1 ? "Child" : "Children"}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-center">
              <span className="text-xs text-amber-900 font-semibold block">Total Annual Contribution:</span>
              <span className="text-3xl font-extrabold text-rose-950 font-serif">
                £{selectedChildCount * costPerChild} / year
              </span>
              <p className="text-[11px] text-amber-800 mt-1">Supports {selectedChildCount} student(s) for 3 complete school terms.</p>
            </div>

            <a
              href="mailto:sttfoundation2@gmail.com?subject=Sponsoring%20Children%20-%20St.%20Theresa%20Education%20Fund"
              className="block text-center w-full bg-rose-950 hover:bg-rose-900 text-white font-bold py-3 rounded-xl transition-all text-sm shadow-md"
            >
              Pledge Sponsorship (£{selectedChildCount * costPerChild})
            </a>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rose-700 font-bold text-xs uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Beneficiaries
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Who We Support
          </h2>
          <p className="text-gray-600 mt-2">
            Prioritizing the most vulnerable young minds in our rural communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeSupport.map((item) => (
            <div key={item.title} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-3 hover:shadow-xl transition-all">
              <span className="text-3xl block">{item.icon}</span>
              <h3 className="text-lg font-bold font-serif text-slate-900">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What the Fund Provides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
              Holistic Care
            </span>
            <h2 className="text-3xl font-extrabold font-serif text-white">
              What the Fund Provides
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We do not just cover tuition fees; we provide total wrap-around care so that children can focus entirely on learning, playing, and growing.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fundProvides.map((item) => (
              <div key={item} className="p-3.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Get Involved
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            How You Can Help
          </h2>
          <p className="text-gray-600 mt-2">
            Every contribution creates lasting impact for a child and family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-rose-50 rounded-3xl border border-rose-200 space-y-3">
            <span className="text-3xl block">💳</span>
            <h3 className="text-lg font-bold font-serif text-slate-900">Donate</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Make a one-off or recurring monetary donation to our Education Fund.</p>
          </div>

          <div className="p-6 bg-amber-50 rounded-3xl border border-amber-200 space-y-3">
            <span className="text-3xl block">Child</span>
            <h3 className="text-lg font-bold font-serif text-slate-900">Sponsor a Child</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Commit £200/year to support a specific student's education and receive annual progress updates.</p>
          </div>

          <div className="p-6 bg-blue-50 rounded-3xl border border-blue-200 space-y-3">
            <span className="text-3xl block">🤝</span>
            <h3 className="text-lg font-bold font-serif text-slate-900">Partner with Us</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Churches, schools, NGOs, and corporations can form official development partnerships.</p>
          </div>

          <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-200 space-y-3">
            <span className="text-3xl block">🙋‍♀️</span>
            <h3 className="text-lg font-bold font-serif text-slate-900">Volunteer Skills</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Offer teaching, coaching, healthcare, or administrative skills locally or remotely.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
