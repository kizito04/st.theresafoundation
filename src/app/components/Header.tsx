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

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Schools", href: "/schools" },
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Schools", href: "/schools" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
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
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Left side: Logo + hamburger (mobile) grouped together */}
            <div className="flex items-center gap-2">
              {/* Hamburger — only on mobile/tablet */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
                <span className="text-2xl leading-none">🌹</span>
                <div className="leading-tight">
                  <div className="font-extrabold text-base text-slate-900 tracking-tight">
                    ST. THERESA
                  </div>
                  <div className="text-[11px] text-blue-600 font-semibold tracking-wide uppercase">
                    Foundation
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Nav (no fill, dark blue line when selected) */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
                    isActive(item.href)
                      ? "text-[#1e3a8a] font-bold"
                      : "text-slate-600 hover:text-[#1e3a8a]"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#1e3a8a] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Seeta High School Style) */}
        <div
          className={`absolute left-0 right-0 bg-white shadow-xl lg:hidden transform transition-all duration-300 origin-top overflow-hidden ${
            mobileMenuOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
          style={{ top: '100%' }}
        >
          <nav className="flex flex-col">
            {mobileNavLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4 text-base border-b border-slate-200 flex justify-between items-center transition-colors ${
                  isActive(item.href)
                    ? "text-[#1e3a8a] font-bold bg-slate-50"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>{item.name}</span>
                {/* Adding the '+' sign to mimic the screenshot style */}
                <span className="text-slate-400 text-xl font-light leading-none">+</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
