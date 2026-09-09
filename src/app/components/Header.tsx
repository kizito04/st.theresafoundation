import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
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

  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "St. Theresa Schools", href: "/schools" },
    { name: "Sports Academy", href: "/sports-academy" },
    { name: "Transporters", href: "/transporters" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news" },
    { name: "Contact Us", href: "/contact" },
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
      {/* Top Info Bar - Hidden on Home Page */}
      {location.pathname !== "/" && (
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
      )}

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

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer Panel (Slides from left, white background style) */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 sm:w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-xl shadow-sm text-white">
              🌹
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-sm text-slate-900 tracking-tight">
                ST. THERESA
              </div>
              <div className="text-[10px] text-blue-600 font-bold tracking-wide uppercase">
                Foundation
              </div>
            </div>
          </Link>

          {/* Close button X */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-lg bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Menu List - White background */}
        <div className="flex-1 overflow-y-auto py-3 bg-white">
          <nav className="px-3 space-y-1">
            {mobileNavLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-slate-800 hover:bg-slate-50 hover:text-blue-700"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>


      </aside>
    </header>
  );
}
