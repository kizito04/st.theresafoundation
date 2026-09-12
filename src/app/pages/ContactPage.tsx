import { useState } from "react";
import { Phone, Mail, Navigation, Facebook, Instagram, Youtube, CheckCircle2 } from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
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

            <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-md border border-slate-100 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <Navigation className="w-5 h-5 text-[#2b3a8c] fill-[#2b3a8c] rotate-45 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[#2b3a8c] text-sm">Address</h3>
                  <p className="text-[#821e3a] text-xs sm:text-sm font-medium leading-snug">
                    Igayaza, Kakumiro District, Western Uganda
                  </p>
                  <p className="text-slate-500 text-xs">
                    Hoima Catholic Diocese
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <WhatsAppIcon className="w-5 h-5 text-[#2b3a8c] mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[#2b3a8c] text-sm">WhatsApp</h3>
                  <a
                    href="https://wa.me/256772543737"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#821e3a] hover:underline text-xs sm:text-sm font-semibold block"
                  >
                    +256 772 543 737
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#2b3a8c] mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[#2b3a8c] text-sm">Phone</h3>
                  <a
                    href="tel:+256772543737"
                    className="text-[#821e3a] hover:underline text-xs sm:text-sm font-semibold block"
                  >
                    +256 772 543 737
                  </a>
                  <p className="text-slate-500 text-xs">+44 74040...</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#2b3a8c] mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[#2b3a8c] text-sm">Email</h3>
                  <a
                    href="mailto:sttfoundation2@gmail.com"
                    className="text-[#821e3a] hover:underline text-xs sm:text-sm font-semibold block"
                  >
                    sttfoundation2@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Bar Pill (Matching Screenshot 3) */}
              <div className="pt-2">
                <div className="bg-[#2b3a8c] text-white rounded-lg py-2.5 px-4 flex items-center justify-center gap-5 shadow-sm">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/256772543737"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Leave a message (Royal Blue Card) ── */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#821e3a] tracking-tight">
              Leave a message
            </h2>

            <div className="bg-[#2b3a8c] rounded-2xl sm:rounded-3xl p-7 sm:p-10 shadow-lg text-white">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-white mx-auto" />
                  <h3 className="text-2xl font-bold font-serif text-white">Message Received!</h3>
                  <p className="text-sm text-blue-100 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to St. Theresa Foundation. Our team will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#8e1b38] hover:bg-[#72142c] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-md transition-colors shadow-md"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Enter your Name"
                      className="w-full bg-white text-slate-900 placeholder:text-slate-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      required
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full bg-white text-slate-900 placeholder:text-slate-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write a Message"
                      className="w-full bg-white text-slate-900 placeholder:text-slate-500 rounded-md px-4 py-3 text-sm placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-rose-300"
                    ></textarea>
                  </div>

                  {/* Submit Button (moderate size, centered, matching Screenshot 3) */}
                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      className="bg-[#8e1b38] hover:bg-[#72142c] text-white font-bold text-xs uppercase tracking-wider px-8 py-2.5 rounded-md transition-colors shadow-md inline-block"
                    >
                      SUBMIT NOW
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
