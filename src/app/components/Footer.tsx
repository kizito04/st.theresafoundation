import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#666362" }} className="text-slate-200 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/20">
          {/* Column 1: Foundation Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌹</span>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  ST. THERESA FOUNDATION
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  The Little Flower Initiative
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              A thanksgiving initiative dedicated to empowering children,
              uplifting families, and spreading the gentle love of St. Theresa. Founded by
              Rev. Fr. Paul Bigirwa — 25 Years of Priesthood (05 July 2025).
            </p>

            {/* Social Links */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/15 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/15 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/15 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/256772543737"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/15 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-white"
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
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/60">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/schools" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/60">›</span> Schools
                </Link>
              </li>
              <li>
                <Link to="/sports-academy" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/60">›</span> Sports Academy
                </Link>
              </li>
              <li>
                <Link to="/education-fund" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/60">›</span> Education Fund
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/60">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/60">›</span> News &amp; Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/60">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+256 772 543 737</p>
                  <p className="text-slate-300 text-xs">+44 74040...</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">sttfoundation2@gmail.com</p>
                  <p className="text-slate-300 text-xs">sttheresafoundation.org</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Igayaza, Western Uganda</p>
                  <p className="text-slate-300 text-xs">Hoima Catholic Diocese • Kakumiro District</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-3">
          <p>
            &copy; {new Date().getFullYear()} St. Theresa Foundation. Founded by Rev. Fr. Paul Bigirwa. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-white/60">
            <Heart className="w-3 h-3 fill-white/60" />
            <span>Building futures, one child at a time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
