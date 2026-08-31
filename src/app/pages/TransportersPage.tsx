import { Link } from "react-router";
import { Bus, MapPin, ShieldCheck, Clock, Heart, Phone, Sparkles, CheckCircle2 } from "lucide-react";

export default function TransportersPage() {
  const services = [
    {
      title: "Daily School Transport",
      desc: "Morning pickup and evening drop-off for students across all campuses, ensuring children arrive on time and safely.",
      icon: "🚌",
    },
    {
      title: "Community Outreach Transport",
      desc: "Transporting medical teams, volunteers, and foundation aid materials to rural villages and outreach sites.",
      icon: "🚐",
    },
    {
      title: "Foundation Logistics",
      desc: "Managing food delivery, school supplies, construction equipment, and event logistics across Western Uganda.",
      icon: "📦",
    },
    {
      title: "Special Events Transport",
      desc: "Shuttle services for sports tournaments, music festivals, diocesan celebrations, and annual Silver Jubilee events.",
      icon: "🎟️",
    },
  ];

  const coverageAreas = [
    { name: "Kakumiro District", desc: "Headquarters & Primary Transport Routes", icon: "📍" },
    { name: "Kibaale District", desc: "School Pick-up & Outreach Networks", icon: "📍" },
    { name: "Kagadi District", desc: "Sub-county Student Shuttles", icon: "📍" },
    { name: "Hoima City & Diocese", desc: "Regional Hub Connection & Diocesan Events", icon: "📍" },
    { name: "Masindi District", desc: "Expanded Outreach & Educational Tours", icon: "📍" },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-rose-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 border border-purple-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Bus className="w-4 h-4 text-purple-300" />
            5. ST. THERESA TRANSPORTERS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Safe, Reliable & Affordable Transport
          </h1>
          <p className="text-lg text-purple-100/80 max-w-2xl mx-auto mt-3">
            Connecting students, families, and community outreach programs with absolute care and punctuality across Western Uganda.
          </p>
        </div>
      </section>

      {/* Overview & Fleet Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold font-serif text-slate-900 leading-tight">
              Ensuring Every Child Reaches School Safely
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              <strong>St. Theresa Transporters</strong> was established to eliminate distance as a barrier to education. In many rural communities, long walking distances through tough terrain prevent children from attending school regularly. Our fleet ensures safe, daily door-to-door transit for learners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-center">
                <ShieldCheck className="w-6 h-6 text-purple-700 mx-auto mb-1" />
                <h4 className="font-bold text-slate-900 text-sm">100% Safe</h4>
                <p className="text-xs text-gray-600">Vetted drivers & safety belts</p>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-center">
                <Clock className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                <h4 className="font-bold text-slate-900 text-sm">Punctual</h4>
                <p className="text-xs text-gray-600">Strict timetable adherence</p>
              </div>

              <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200 text-center">
                <Heart className="w-6 h-6 text-rose-700 mx-auto mb-1" />
                <h4 className="font-bold text-slate-900 text-sm">Affordable</h4>
                <p className="text-xs text-gray-600">Subsidized fare rates</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-400/40">
              <img
                src="/images/transporters.png"
                alt="St. Theresa Transporters Bus"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-purple-700 font-bold text-xs uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Logistics Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2">
            Multi-purpose transport solutions serving schools and community needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => (
            <div key={srv.title} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-3 hover:shadow-xl transition-all">
              <span className="text-3xl block">{srv.icon}</span>
              <h3 className="text-lg font-bold font-serif text-slate-900">{srv.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
              Regional Footprint
            </span>
            <h2 className="text-3xl font-extrabold font-serif mt-3">
              Coverage Areas
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Active routes operating daily across five major districts in Western Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coverageAreas.map((area) => (
              <div key={area.name} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all text-center space-y-2">
                <span className="text-3xl block">{area.icon}</span>
                <h3 className="font-bold text-amber-300 text-base font-serif">{area.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-900 via-rose-950 to-purple-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="bg-amber-400 text-rose-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Core Promise
            </span>
            <h2 className="text-3xl font-bold font-serif">Our Commitment</h2>
            <p className="text-rose-100 text-lg font-light">
              "Safety, punctuality, and care for every single child who steps onto our buses."
            </p>
          </div>

          <Link
            to="/contact"
            className="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-rose-950 font-bold px-8 py-4 rounded-xl shadow-xl text-base transition-all"
          >
            Inquire About Transport
          </Link>
        </div>
      </section>
    </div>
  );
}
