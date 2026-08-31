import { useState } from "react";
import { Users, Heart, Sparkles, CheckCircle2, Send } from "lucide-react";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  const volunteerRoles = [
    { title: "Teaching & Academic Tutoring", desc: "Assist teachers in primary literacy, mathematics, and science across Main and Murubya campuses.", icon: "📚" },
    { title: "Sports Coaching (Football & Chess)", desc: "Coach young boys and girls in football tactics, athletic training, or strategic chess play.", icon: "⚽" },
    { title: "Medical & Community Health", desc: "Healthcare professionals assisting in health screenings, sanitation workshops, and basic care.", icon: "🩺" },
    { title: "Administrative & Fund Support", desc: "Help with digital communications, donor updates, graphics, and foundation administration.", icon: "💻" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-r from-emerald-950 via-slate-900 to-rose-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-emerald-300" />
            7.3 VOLUNTEER OPPORTUNITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Share Your Time, Skills & Mentorship
          </h1>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto mt-3">
            Be part of our mission by volunteering locally in Uganda or remotely from anywhere in the world.
          </p>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {volunteerRoles.map((role) => (
            <div key={role.title} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-3 hover:shadow-xl transition-all">
              <span className="text-3xl block">{role.icon}</span>
              <h3 className="text-lg font-bold font-serif text-slate-900">{role.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sign up form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-serif text-slate-900">Volunteer Application Form</h2>
            <p className="text-xs text-gray-600">Fill out your details below and our team will get in touch with you.</p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-emerald-950 font-serif">Thank You for Offering to Volunteer!</h3>
              <p className="text-xs text-emerald-800">
                Your application has been received by St. Theresa Foundation secretariat. We will contact you shortly via email/phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number / WhatsApp *</label>
                  <input
                    required
                    type="text"
                    placeholder="+256..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Area of Interest *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900">
                    <option>Teaching & Literacy</option>
                    <option>Sports & Chess Coaching</option>
                    <option>Healthcare & Medical</option>
                    <option>Administrative & Remote</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Tell Us About Yourself & Skills</label>
                <textarea
                  rows={4}
                  placeholder="Share a brief summary of your experience..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-900 hover:bg-rose-950 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Volunteer Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
