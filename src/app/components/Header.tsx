import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Schools", href: "/schools" },
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white text-xs hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 gap-2">
            <div className="flex items-center gap-5">
              <a
                href="tel:+256772543737"
                className="flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3" />
                +256 772 543 737
              </a>
              <a
                href="mailto:sttfoundation2@gmail.com"
                className="flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3" />
                sttfoundation2@gmail.com
              </a>
            </div>
            <span className="text-blue-300 font-medium">
              Silver Jubilee Priesthood — 05 July 2025
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-xl shadow-sm group-hover:bg-blue-800 transition-colors">
              🌹
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-base text-slate-900 tracking-tight">
                ST. THERESA
              </div>
              <div className="text-[11px] text-blue-600 font-semibold tracking-wide uppercase">
                Foundation
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-blue-600" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/education-fund"
              className="hidden sm:inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-sm hover:shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              Donate
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive(item.href)
                    ? "bg-blue-700 text-white"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                to="/education-fund"
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-md"
              >
                <Heart className="w-4 h-4 fill-white" />
                Donate to Education Fund
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
