import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
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
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#002f54] text-white ${
          scrolled
            ? "shadow-[0_4px_25px_rgba(0,0,0,0.25)] bg-[#002f54]/95 backdrop-blur-md"
            : "shadow-md"
        }`}
      >
        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-[88px]">
            {/* Left side: Logo */}
            <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
              <span className="text-3xl sm:text-4xl leading-none drop-shadow-sm">🌹</span>
              <div className="leading-tight">
                <div className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-wider">
                  ST. THERESA
                </div>
                <div className="text-xs sm:text-sm text-amber-300 font-bold tracking-[0.2em] uppercase mt-0.5">
                  Foundation
                </div>
              </div>
            </Link>

            {/* Right side: Desktop Nav & Mobile Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-2.5 text-base font-bold transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-amber-300 font-extrabold"
                        : "text-white/85 hover:text-white hover:bg-white/10 rounded-lg"
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute bottom-1 left-3 right-3 h-[3px] bg-amber-400 rounded-full" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Hamburger bars on the right — mobile/tablet */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-md text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute left-3 right-3 sm:left-6 sm:right-6 top-[calc(100%+8px)] bg-[#002f54] text-white rounded-lg shadow-2xl border border-white/15 lg:hidden transform transition-all duration-300 origin-top overflow-hidden ${
            mobileMenuOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col">
            {mobileNavLinks.map((item, idx) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4.5 text-lg transition-colors ${
                  idx !== mobileNavLinks.length - 1 ? "border-b border-white/10" : ""
                } ${
                  isActive(item.href)
                    ? "text-amber-300 font-bold bg-white/10"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
