import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-rose-950 via-slate-900 to-amber-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Phone className="w-4 h-4 text-amber-300" />
            7.5 CONTACT US
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Get in Touch with St. Theresa Foundation
          </h1>
          <p className="text-lg text-rose-100/80 max-w-2xl mx-auto mt-3">
            We are here to answer your questions regarding child sponsorship, school admissions, sports academy, and transport services.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl space-y-6">
              <h2 className="text-2xl font-bold font-serif text-slate-900">Direct Contact Channels</h2>

              <div className="space-y-4">
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-900 text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Phone Numbers</h4>
                    <p className="text-xs text-rose-950 font-semibold">+256 772 543 737</p>
                    <p className="text-xs text-gray-600">+44 74040...</p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email Address & Web</h4>
                    <p className="text-xs text-slate-900 font-semibold">sttfoundation2@gmail.com</p>
                    <p className="text-xs text-gray-600">sttheresafoundation.org</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Foundation Office Address</h4>
                    <p className="text-xs text-slate-900 font-semibold">Igayaza, Kakumiro District</p>
                    <p className="text-xs text-gray-600">Hoima Catholic Diocese, Western Uganda</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Connect on Social Media</h4>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 text-xs font-semibold"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-pink-600 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 text-xs font-semibold"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-red-600 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 text-xs font-semibold"
                  >
                    <Youtube className="w-4 h-4" /> YouTube
                  </a>
                  <a
                    href="https://wa.me/256772543737"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-emerald-600 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 text-xs font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">Send Us a Direct Message</h2>
                <p className="text-xs text-gray-600">Complete the form below and our foundation team will respond promptly.</p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold text-emerald-950 font-serif">Message Received!</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you for reaching out to St. Theresa Foundation. Rev. Fr. Paul Bigirwa and the team have received your message and will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Mary Nakato"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. mary@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Phone / WhatsApp</label>
                      <input
                        type="text"
                        placeholder="+256..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Inquiry Subject *</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900">
                        <option>Child Sponsorship / Education Fund</option>
                        <option>School Admission (Main/Annex/Murubya)</option>
                        <option>Sports Academy & Chess Club</option>
                        <option>St. Theresa Transporters</option>
                        <option>Volunteer / Partnership</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message or question here..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-900"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-rose-900 hover:bg-rose-950 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Message to St. Theresa Foundation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
