import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-700/60">
          {/* Column 1: Foundation Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌹</span>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  ST. THERESA FOUNDATION
                </h3>
                <p className="text-xs text-blue-400 font-medium mt-0.5">
                  The Little Flower Initiative
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              A Silver Jubilee thanksgiving initiative dedicated to empowering children,
              uplifting families, and spreading the gentle love of St. Theresa. Founded by
              Rev. Fr. Paul Bigirwa — 25 Years of Priesthood (05 July 2025).
            </p>

            {/* Social Links */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/256772543737"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-white"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> About the Founder
                </Link>
              </li>
              <li>
                <Link to="/schools" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> St. Theresa Schools
                </Link>
              </li>
              <li>
                <Link to="/sports-academy" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Sports Academy
                </Link>
              </li>
              <li>
                <Link to="/education-fund" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Education Fund
                </Link>
              </li>
              <li>
                <Link to="/transporters" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> St. Theresa Transporters
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: More Pages */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              More Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/news" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> News &amp; Updates
                </Link>
              </li>
              <li>
                <Link to="/donors" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Donor Recognition
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Volunteer
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Downloads
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-blue-900/30 rounded-xl border border-blue-800/40">
              <p className="text-xs text-blue-300 italic leading-relaxed">
                "Miss no opportunity of making some small sacrifice." — St. Theresa of Lisieux
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+256 772 543 737</p>
                  <p className="text-slate-400 text-xs">+44 74040...</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">sttfoundation2@gmail.com</p>
                  <p className="text-slate-400 text-xs">sttheresafoundation.org</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Igayaza, Western Uganda</p>
                  <p className="text-slate-400 text-xs">Hoima Catholic Diocese • Kakumiro District</p>
                </div>
              </div>

              {/* Newsletter */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-white mb-2">Subscribe to Updates:</p>
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 min-w-0 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors flex-shrink-0">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
          <p>
            &copy; {new Date().getFullYear()} St. Theresa Foundation. Founded by Rev. Fr. Paul Bigirwa. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-blue-500">
            <Heart className="w-3 h-3 fill-blue-500" />
            <span>Building futures, one child at a time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
