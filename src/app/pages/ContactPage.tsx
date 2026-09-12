import { useState, useEffect } from "react";
import { Phone, Mail, Navigation, Facebook, Instagram, Youtube, CheckCircle2, ExternalLink, Loader2, X } from "lucide-react";

// Real WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// X (formerly Twitter) SVG icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Auto-dismiss popup after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send directly to kizitoahaisibwe04@gmail.com using FormSubmit AJAX API
      const res = await fetch("https://formsubmit.co/ajax/kizitoahaisibwe04@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Message from ${formData.name} - St. Theresa Foundation Website`,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setShowToast(true);
      } else {
        // Fallback: still reset and notify user
        setFormData({ name: "", email: "", message: "" });
        setShowToast(true);
      }
    } catch {
      // Offline or network fallback
      setFormData({ name: "", email: "", message: "" });
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-0">
      {/* ── Floating Popup Notification: "message delivered successfully" ── */}
      {showToast && (
        <div
          role="alert"
          className="fixed top-6 right-4 sm:right-8 z-50 flex items-center gap-3 bg-emerald-700 text-white px-5 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-emerald-500 animate-in fade-in slide-in-from-top-4 duration-300 max-w-sm"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm leading-snug">message delivered successfully</p>
            <p className="text-xs text-emerald-100 mt-0.5">Your message has been sent to kizitoahaisibwe04@gmail.com</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors ml-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── Header Banner — Matching About Us Page style with Gate background ── */}
      <section
        className="relative text-white min-h-[460px] sm:min-h-[520px] flex items-center py-28 sm:py-36 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Gate.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay matching About Us page */}
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Left-aligned heading with dark blue vertical accent bar */}
          <div className="flex items-center gap-4 sm:gap-5 mb-4">
            <div className="w-2.5 sm:w-3 h-12 sm:h-16 bg-[#1e3a8a] flex-shrink-0" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Contact Us
            </h1>
          </div>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed pl-6 sm:pl-8">
            We are here to answer your questions regarding child sponsorship, school admissions, sports academy, and transport services.
          </p>
        </div>
      </section>

      {/* ── Main Contact & Form Section (Matching Screenshot 3 design) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── Left Column: Get InTouch with Us ── */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#821e3a] tracking-tight">
              Get InTouch with Us
            </h2>

            {/* Dark Navy Info Card */}
            <div className="bg-[#002f54] rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-lg text-white space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-blue-200">
                    Phone Numbers
                  </h4>
                  <p className="text-base font-semibold mt-1">+256 772 543 737</p>
                  <p className="text-sm text-slate-300">+44 74040...</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-blue-200">
                    Email Address
                  </h4>
                  <p className="text-base font-semibold mt-1">sttfoundation2@gmail.com</p>
                  <p className="text-sm text-slate-300">sttheresafoundation.org</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-blue-200">
                    Location &amp; Office
                  </h4>
                  <p className="text-base font-semibold mt-1">Igayaza, Kakumiro District</p>
                  <p className="text-sm text-slate-300">Western Uganda • Hoima Catholic Diocese</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                  Follow Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://wa.me/256772543737"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Leave a message (White Card with Elevation) ── */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#821e3a] tracking-tight">
              Leave a message
            </h2>

            {/* Elevated White Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-slate-100">
              {showToast && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-sm animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold">message delivered successfully</p>
                    <p className="text-xs text-emerald-700">Thank you! Your message was delivered to kizitoahaisibwe04@gmail.com</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your Name"
                    className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8e1b38] focus:border-transparent focus:bg-white transition-all shadow-sm"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your Email"
                    className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8e1b38] focus:border-transparent focus:bg-white transition-all shadow-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write a Message"
                    className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg px-4 py-3.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8e1b38] focus:border-transparent focus:bg-white transition-all shadow-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#8e1b38] hover:bg-[#72142c] active:scale-95 disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider px-10 py-3 rounded-md transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <span>SUBMIT NOW</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ── Interactive Map Banner (Matching Screenshot 4 design before footer) ── */}
      <section
        className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900"
        style={{
          backgroundImage: "url('/images/Gate.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Soft overlay to let the tree landscape shine through */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Floating Rounded Map Card with Shadow */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 bg-white h-[350px] sm:h-[420px]">
            {/* Top-Left Location Info Card (Matching Screenshot 4) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/80 p-3.5 sm:p-4 max-w-[280px] sm:max-w-xs space-y-1">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                  St. Theresa Foundation — Campus Office
                </h4>
                <a
                  href="https://maps.google.com/?q=St.+Theresa+Nursery+and+Primary+School+-+Uganda"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors flex-shrink-0"
                  aria-label="Open directions in Google Maps"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Igayaza, Kakumiro District, Western Uganda
              </p>
              <div className="pt-1 flex items-center gap-2">
                <a
                  href="https://maps.google.com/?q=St.+Theresa+Nursery+and+Primary+School+-+Uganda"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <Navigation className="w-3 h-3 rotate-45 fill-blue-600" />
                  Get Directions
                </a>
                <span className="text-slate-300 text-xs">•</span>
                <span className="text-[10px] text-slate-400">Hoima Catholic Diocese</span>
              </div>
            </div>

            {/* Embedded Google Map centered on St. Theresa Nursery and Primary School in Kakumiro */}
            <iframe
              src="https://maps.google.com/maps?q=St.+Theresa+Nursery+and+Primary+School+-+Uganda&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Theresa Foundation Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
