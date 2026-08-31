import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart, Sparkles, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-rose-950 via-slate-950 to-black text-rose-100/90 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-rose-900/40">
          {/* Column 1: Foundation Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌹</span>
              <div>
                <h3 className="text-xl font-bold font-serif text-white tracking-wide">
                  ST. THERESA FOUNDATION
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  The Little Flower Thanksgiving Initiative
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rose-200/80 leading-relaxed">
              A Silver Jubilee thanksgiving initiative dedicated to empowering children, uplifting families, and spreading the gentle love of St. Theresa. Founded by Rev. Fr. Paul Bigirwa (25 Years of Priesthood • 05 July 2025).
            </p>

            <div className="p-3 bg-rose-900/30 rounded-xl border border-rose-800/40 text-xs text-amber-200">
              <span className="font-semibold block text-amber-300 mb-0.5">Patron Saint Inspiration:</span>
              "Miss no opportunity of making some small sacrifice, here by a smiling look, there by a kindly word." — St. Theresa of Lisieux
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-rose-900/60 hover:bg-amber-500 hover:text-rose-950 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-rose-900/60 hover:bg-amber-500 hover:text-rose-950 rounded-lg flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-rose-900/60 hover:bg-amber-500 hover:text-rose-950 rounded-lg flex items-center justify-center transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://wa.me/256772543737" target="_blank" rel="noreferrer" className="w-9 h-9 bg-emerald-800/60 hover:bg-emerald-500 hover:text-white rounded-lg flex items-center justify-center transition-all font-bold text-xs">
                WA
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-b border-rose-800/50 pb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> About the Founder
                </Link>
              </li>
              <li>
                <Link to="/schools" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> St. Theresa Schools
                </Link>
              </li>
              <li>
                <Link to="/sports-academy" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> Sports Academy
                </Link>
              </li>
              <li>
                <Link to="/education-fund" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> Education Fund (£40,000 Target)
                </Link>
              </li>
              <li>
                <Link to="/transporters" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> St. Theresa Transporters
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Campuses & Programs */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-b border-rose-800/50 pb-2">
              <Heart className="w-4 h-4 text-rose-400" />
              Campuses & Outreach
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/schools#main" className="hover:text-amber-300 transition-colors block">
                  <span className="font-semibold text-white">St. Theresa Main Campus</span>
                  <p className="text-[11px] text-rose-300/70">Heart of educational mission & Catholic values</p>
                </Link>
              </li>
              <li>
                <Link to="/schools#annex" className="hover:text-amber-300 transition-colors block">
                  <span className="font-semibold text-white">Annex Campus</span>
                  <p className="text-[11px] text-rose-300/70">Early childhood & lower primary</p>
                </Link>
              </li>
              <li>
                <Link to="/schools#murubya" className="hover:text-amber-300 transition-colors block">
                  <span className="font-semibold text-white">Murubya Campus</span>
                  <p className="text-[11px] text-rose-300/70">Rural outreach for vulnerable families</p>
                </Link>
              </li>
              <li>
                <Link to="/sports-academy" className="hover:text-amber-300 transition-colors block">
                  <span className="font-semibold text-white">Sports Academy</span>
                  <p className="text-[11px] text-rose-300/70">Football, Athletics, Netball & Chess</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-b border-rose-800/50 pb-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              Contact Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+256 772 543 737</p>
                  <p className="text-rose-300/80">+44 74040...</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">sttfoundation2@gmail.com</p>
                  <p className="text-rose-300/80">sttheresafoundation.org</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Igayaza, Western Uganda</p>
                  <p className="text-rose-300/80">Hoima Catholic Diocese • Kakumiro District</p>
                </div>
              </div>

              {/* Newsletter Box */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-white mb-2">Subscribe to Updates:</p>
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-rose-950/80 border border-rose-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-rose-400 focus:outline-none focus:border-amber-400"
                  />
                  <button className="bg-amber-500 hover:bg-amber-400 text-rose-950 p-2 rounded-lg font-bold transition-all">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-rose-300/70 gap-3">
          <p>
            &copy; {new Date().getFullYear()} St. Theresa Foundation. Founded by Rev. Fr. Paul Bigirwa. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/news" className="hover:text-amber-300">News</Link>
            <Link to="/donors" className="hover:text-amber-300">Donors</Link>
            <Link to="/volunteer" className="hover:text-amber-300">Volunteer</Link>
            <Link to="/downloads" className="hover:text-amber-300">Downloads</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
