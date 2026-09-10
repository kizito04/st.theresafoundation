import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";

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

// Grid Crosshairs Pattern from Screenshot 2
function GridCrossPattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dim grid crosshairs */}
      {[20, 60, 100, 140, 180, 220].map((x) => (
        <g key={`r1-${x}`} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5">
          <line x1={x - 10} y1={25} x2={x + 10} y2={25} />
          <line x1={x} y1={15} x2={x} y2={35} />
        </g>
      ))}

      {[20, 60, 100, 140, 180, 220].map((x) => (
        <g key={`r2-${x}`} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5">
          <line x1={x - 10} y1={60} x2={x + 10} y2={60} />
          <line x1={x} y1={50} x2={x} y2={70} />
        </g>
      ))}

      {[20, 60, 100, 140, 180, 220].map((x) => (
        <g key={`r3-${x}`} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5">
          <line x1={x - 10} y1={95} x2={x + 10} y2={95} />
          <line x1={x} y1={85} x2={x} y2={105} />
        </g>
      ))}

      {/* Bright illuminated white accents matching Screenshot 2 */}
      {/* Row 1, col 5 (x=180, y=25) */}
      <g stroke="#ffffff" strokeWidth="2.5">
        <line x1={170} y1={25} x2={190} y2={25} />
        <line x1={180} y1={15} x2={180} y2={35} />
      </g>

      {/* Row 2, col 3 (x=100, y=60) */}
      <g stroke="#ffffff" strokeWidth="2.5">
        <line x1={90} y1={60} x2={110} y2={60} />
        <line x1={100} y1={50} x2={100} y2={70} />
      </g>

      {/* Row 3, col 2 (x=60, y=95) */}
      <g stroke="#ffffff" strokeWidth="2.5">
        <line x1={50} y1={95} x2={70} y2={95} />
        <line x1={60} y1={85} x2={60} y2={105} />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#102035" }} className="relative text-white pt-14 pb-8 overflow-hidden">
      {/* Decorative background watermark of the crosshair grid on desktop */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 hidden lg:block translate-x-10 translate-y-6">
        <GridCrossPattern className="w-80 h-auto" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/20">

          {/* Column 1: Foundation Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌹</span>
              <div>
                <h3
                  className="text-base font-bold text-white tracking-wide"
                  style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.5)", textUnderlineOffset: "4px" }}
                >
                  ST. THERESA FOUNDATION
                </h3>
                <p className="text-xs text-white/70 font-medium mt-0.5">
                  The Little Flower Initiative
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              A thanksgiving initiative dedicated to empowering children,
              uplifting families, and spreading the gentle love of St. Theresa. Founded by
              Rev. Fr. Paul Bigirwa — 25 Years of Priesthood (05 July 2025).
            </p>

            {/* Crosshair pattern card embedded in Footer */}
            <div className="pt-2">
              <div className="inline-block bg-[#0b1626]/80 border border-white/15 rounded-lg p-2.5 shadow-inner">
                <GridCrossPattern className="w-44 h-auto" />
              </div>
            </div>

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
                href="https://whatsapp.com/256772543737"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/15 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.5)", textUnderlineOffset: "4px" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> About the Founder
                </Link>
              </li>
              <li>
                <Link to="/schools" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> St. Theresa Schools
                </Link>
              </li>
              <li>
                <Link to="/sports-academy" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> Sports Academy
                </Link>
              </li>
              <li>
                <Link to="/education-fund" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> Education Fund
                </Link>
              </li>
              <li>
                <Link to="/transporters" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> St. Theresa Transporters
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> News &amp; Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-white/50">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.5)", textUnderlineOffset: "4px" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+256 772 543 737</p>
                  <p className="text-white/70 text-xs">+44 74040...</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">sttfoundation2@gmail.com</p>
                  <p className="text-white/70 text-xs">sttheresafoundation.org</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Igayaza, Western Uganda</p>
                  <p className="text-white/70 text-xs">Hoima Catholic Diocese • Kakumiro District</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 gap-3">
          <p>
            &copy; {new Date().getFullYear()} St. Theresa Foundation. Founded by Rev. Fr. Paul Bigirwa. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <Heart className="w-3 h-3 fill-white/60" />
            <span>Building futures, one child at a time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
