import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

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

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#f0f4f9" }}
      className="text-[#002f54] font-sans border-t border-slate-200"
    >
      {/* ── Main Footer Columns (Expanded Height + Faint Dark Blue Background) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Rose Flower Logo & Foundation Info (Enlarged, description removed) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-4 group inline-flex">
              <span className="text-5xl sm:text-6xl lg:text-7xl leading-none select-none drop-shadow-sm">🌹</span>
              <div className="leading-tight">
                <h3 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002f54] tracking-wider">
                  ST. THERESA
                </h3>
                <p className="text-sm sm:text-base text-blue-700 font-bold tracking-[0.22em] uppercase mt-1">
                  Foundation
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                  The Little Flower Initiative
                </p>
              </div>
            </Link>
          </div>

          {/* Column 1: About us (with bold heading & increased text size) */}
          <div className="lg:col-span-2 sm:col-span-4">
            <div className="border-t-2 border-[#002f54] pt-4">
              <h4 className="font-bold text-[#002f54] text-lg sm:text-xl mb-4 tracking-tight">
                About us
              </h4>
              <ul className="space-y-3.5 text-base sm:text-[17px]">
                <li>
                  <Link to="/about" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    About the Founder
                  </Link>
                </li>
                <li>
                  <Link to="/schools" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    St. Theresa Schools
                  </Link>
                </li>
                <li>
                  <Link to="/sports-academy" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    Sports Academy
                  </Link>
                </li>
                <li>
                  <Link to="/education-fund" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    Education Fund
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick links (with bold heading & increased text size) */}
          <div className="lg:col-span-2 sm:col-span-4">
            <div className="border-t-2 border-[#002f54] pt-4">
              <h4 className="font-bold text-[#002f54] text-lg sm:text-xl mb-4 tracking-tight">
                Quick links
              </h4>
              <ul className="space-y-3.5 text-base sm:text-[17px]">
                <li>
                  <Link to="/transporters" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    St. Theresa Transporters
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    News &amp; Updates
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#002f54] hover:text-[#a8203e] transition-colors font-medium">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact us (with bold heading & increased text size) */}
          <div className="lg:col-span-4 sm:col-span-4">
            <div className="border-t-2 border-[#002f54] pt-4 space-y-4 text-base sm:text-[17px]">
              <h4 className="font-bold text-[#002f54] text-lg sm:text-xl mb-4 tracking-tight">
                Contact us
              </h4>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#002f54] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#002f54] font-semibold text-base sm:text-lg">+256 772 543 737</p>
                  <p className="text-slate-600 text-xs sm:text-sm">+44 74040...</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#002f54] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#002f54] font-semibold text-base sm:text-lg">sttfoundation2@gmail.com</p>
                  <p className="text-slate-600 text-xs sm:text-sm">sttheresafoundation.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#002f54] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#002f54] font-semibold text-base sm:text-lg">Igayaza, Western Uganda</p>
                  <p className="text-slate-600 text-xs sm:text-sm">Hoima Catholic Diocese • Kakumiro District</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar (Matching Screenshot 1 Dark Navy & White Circular Social Buttons) ── */}
      <div className="bg-[#002f54] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright & Founder Info (Increased text size) */}
          <div className="text-sm sm:text-base text-white/90 space-y-1 text-center sm:text-left">
            <p className="font-normal">
              &copy; {new Date().getFullYear()} St. Theresa Foundation. All rights reserved.
            </p>
            <p className="text-white/70 text-xs sm:text-sm">
              Founded by Rev. Fr. Paul Bigirwa (Silver Jubilee — 05 July 2025). Building futures, one child at a time.
            </p>
          </div>

          {/* Circular White Social Buttons with Dark Navy Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#002f54] hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#002f54] hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#002f54] hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#002f54] hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/256772543737"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#002f54] hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
