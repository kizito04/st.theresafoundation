import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail, Heart, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const primaryNav = [
    { name: "Home", href: "/" },
    { name: "About Founder", href: "/about" },
    { name: "Schools", href: "/schools" },
    { name: "Sports Academy", href: "/sports-academy" },
    { name: "Education Fund", href: "/education-fund" },
    { name: "Transporters", href: "/transporters" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const secondaryNav = [
    { name: "News & Updates", href: "/news" },
    { name: "Donor Recognition", href: "/donors" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Downloads", href: "/downloads" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-950 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center py-2.5 gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+256772543737" className="flex items-center gap-1.5 hover:text-rose-200 transition-colors">
                <Phone className="w-3.5 h-3.5 text-rose-300" />
                <span>+256 772 543 737 / +44 74040</span>
              </a>
              <a href="mailto:sttfoundation2@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-rose-200 transition-colors">
                <Mail className="w-3.5 h-3.5 text-rose-300" />
                <span>sttfoundation2@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-rose-800/60 text-amber-200 px-3 py-0.5 rounded-full text-xs font-medium border border-rose-700/50">
                <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                Silver Jubilee Priesthood Celebration (05 July 2025)
              </span>
              <Link
                to="/education-fund"
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-rose-950 font-semibold px-3 py-1 rounded-full text-xs transition-all shadow-sm hover:scale-105"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-950" />
                Donate / Sponsor
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-700 via-rose-800 to-amber-900 flex items-center justify-center text-2xl shadow-md group-hover:shadow-rose-900/20 transition-all transform group-hover:scale-105">
              🌹
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-rose-950 font-serif">
                  ST. THERESA
                </span>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-amber-300/50">
                  FOUNDATION
                </span>
              </div>
              <p className="text-xs text-rose-900 font-medium">
                The Little Flower • 25 Years Thanksgiving Initiative
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive(item.href)
                    ? "bg-rose-900 text-white shadow-sm"
                    : "text-gray-700 hover:text-rose-900 hover:bg-rose-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown for More Links */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-rose-900 hover:bg-rose-50 transition-all"
              >
                More
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-rose-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {secondaryNav.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-rose-50 text-rose-900 font-bold"
                          : "text-gray-700 hover:bg-rose-50 hover:text-rose-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-rose-50 text-rose-900 hover:bg-rose-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-rose-100 bg-rose-50/50 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1.5">
            <div className="text-xs font-bold text-rose-900 uppercase tracking-wider px-3 mb-2">
              Main Navigation
            </div>
            {primaryNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                  isActive(item.href)
                    ? "bg-rose-900 text-white shadow-md"
                    : "text-gray-800 hover:bg-white hover:text-rose-900"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-rose-200/60 my-2">
              <div className="text-xs font-bold text-rose-900 uppercase tracking-wider px-3 mb-2">
                Additional Pages
              </div>
              {secondaryNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-rose-900 text-white font-bold"
                      : "text-gray-700 hover:bg-white hover:text-rose-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/education-fund"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-rose-800 to-amber-700 text-white py-3 px-4 rounded-xl font-bold text-center shadow-lg"
              >
                <Heart className="w-5 h-5 fill-white" />
                Support The Education Fund
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
