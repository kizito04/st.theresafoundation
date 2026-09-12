import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle2, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

interface CampusDetail {
  id: string;
  name: string;
  tagline: string;
  image: string;
  grades: string;
  location: string;
  overview: string;
  features: string[];
  contact: string;
}

export default function SchoolsPage() {
  const [selectedCampus, setSelectedCampus] = useState<CampusDetail | null>(null);

  const campusDetails: Record<string, CampusDetail> = {
    annex: {
      id: "annex",
      name: "St. Theresa Nursery & Primary School — Annex Campus",
      tagline: "Early Childhood Development & Foundational Primary Education",
      image: "/images/Annex 4.png",
      grades: "Baby Class to Primary Seven (P.7)",
      location: "Igayaza, Kakumiro District, Western Uganda",
      overview:
        "St. Theresa Annex Campus is an accredited Catholic institution dedicated to laying an unshakeable moral and academic foundation. With child-centered classrooms, caring certified educators, and active parental partnership, our pupils flourish academically and spiritually.",
      features: [
        "Fully equipped early childhood development (ECD) center",
        "Small pupil-to-teacher ratio ensuring individual attention",
        "Daily nutritious school feeding program",
        "Foundational literacy, numeracy, and phonics programs",
        "Catholic faith formation, prayer, and character building",
        "Safe, secure enclosed campus environment with play facilities",
      ],
      contact: "+256 772 543 737",
    },
    murubya: {
      id: "murubya",
      name: "St. Theresa Murubya Primary School (Rural Outreach)",
      tagline: "Accessible Quality Education for Every Rural Child",
      image: "/images/Murubya with director 1.jpg",
      grades: "Nursery to Upper Primary",
      location: "Murubya Village, Kakumiro District",
      overview:
        "Murubya Campus stands as the Foundation's vital rural outreach campus. Built to bridge the educational divide, it provides high-standard education, free scholastic materials, and subsidized tuition for children from remote farming villages.",
      features: [
        "Affordable and subsidized tuition supported by Education Fund",
        "Dedicated teachers living and serving within the community",
        "Clean water, sanitation, and school health support",
        "Community engagement and adult literacy empowerment",
        "Strong pastoral care guided by Rev. Fr. Paul Bigirwa",
        "Active sports, music, and cultural co-curricular activities",
      ],
      contact: "+256 772 543 737",
    },
  };

  const sharedValues = [
    { title: "Faith & Morals", desc: "Rooted in Catholic traditions, prayer, and Christian virtues.", icon: "✝️" },
    { title: "Academic Rigor", desc: "Instilling discipline, critical inquiry, and reading excellence.", icon: "📚" },
    { title: "Dignity of Every Child", desc: "Ensuring no child is left behind due to poverty or background.", icon: "🌱" },
    { title: "Gentle Love of St. Theresa", desc: "Doing little things each day with extraordinary love and humility.", icon: "🌹" },
  ];

  return (
    <div className="space-y-16 pb-20 bg-white">
      {/* ── Top Section: Similar to About Us and Contact Us pages ── */}
      <section
        className="relative text-white min-h-[460px] sm:min-h-[520px] flex items-center py-28 sm:py-36 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Gate.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay matching other pages */}
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Left-aligned heading with dark blue vertical accent bar */}
          <div className="flex items-center gap-4 sm:gap-5 mb-4">
            <div className="w-2.5 sm:w-3 h-12 sm:h-16 bg-[#1e3a8a] flex-shrink-0" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              St. Theresa Schools
            </h1>
          </div>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed pl-6 sm:pl-8">
            Providing accessible, high-quality Catholic education and nurturing young minds across specialized campuses in Western Uganda.
          </p>
        </div>
      </section>

      {/* ── Campus Cards Section (Following Screenshot 3 Banner Design) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* ── Card 1: Image on Left, Description on Right (Matching Screenshot 3) ── */}
        <div className="bg-[#002f54] text-white rounded-3xl overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px] sm:min-h-[430px]">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-full">
            <img
              src="/images/Annex 4.png"
              alt="St. Theresa Annex Campus Pupils"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Column: Description on Dark Navy with Curved Divider */}
          <div className="lg:col-span-6 bg-[#002f54] p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-20">
            {/* Elegant SVG Arc Curve on Left Edge (Desktop) */}
            <svg
              className="hidden lg:block absolute -left-12 top-0 bottom-0 h-full w-12 text-[#002f54] fill-current pointer-events-none z-20"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M100 0 C 25 15, 0 35, 0 50 C 0 65, 25 85, 100 100 Z" />
            </svg>

            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                St. Theresa Annex Campus
              </span>

              {/* Bold Headline matching Screenshot 3 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white leading-tight tracking-tight">
                Develop the knowledge, character, and skills needed to inspire positive change and lead with integrity.
              </h2>

              {/* Italic/Script Accent Line matching Screenshot 3 */}
              <p className="font-serif italic text-lg sm:text-xl text-amber-300 pt-1">
                St. Theresa Annex admissions &amp; scholarships are open!
              </p>

              {/* Action Link with Gold Underline matching Screenshot 3 */}
              <div className="pt-3">
                <button
                  onClick={() => setSelectedCampus(campusDetails.annex)}
                  className="inline-block text-sm sm:text-base font-bold text-white border-b-2 border-amber-400 pb-1 hover:text-amber-300 hover:border-amber-300 transition-colors cursor-pointer"
                >
                  Find out more about Annex Campus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 2: Image on Right, Description on Left (Alternated as requested) ── */}
        <div className="bg-[#002f54] text-white rounded-3xl overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px] sm:min-h-[430px]">
          {/* Left Column: Description on Dark Navy */}
          <div className="lg:col-span-6 bg-[#002f54] p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-20 order-2 lg:order-1">
            {/* Elegant SVG Arc Curve on Right Edge (Desktop) */}
            <svg
              className="hidden lg:block absolute -right-12 top-0 bottom-0 h-full w-12 text-[#002f54] fill-current pointer-events-none z-20"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 0 C 75 15, 100 35, 100 50 C 100 65, 75 85, 0 100 Z" />
            </svg>

            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-300">
                Murubya Rural Outreach Campus
              </span>

              {/* Bold Headline matching Screenshot 3 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white leading-tight tracking-tight">
                Empowering rural communities with accessible quality education, moral grounding, and compassionate care.
              </h2>

              {/* Italic/Script Accent Line matching Screenshot 3 */}
              <p className="font-serif italic text-lg sm:text-xl text-amber-300 pt-1">
                Walking alongside vulnerable families in Western Uganda!
              </p>

              {/* Action Link with Gold Underline matching Screenshot 3 */}
              <div className="pt-3">
                <button
                  onClick={() => setSelectedCampus(campusDetails.murubya)}
                  className="inline-block text-sm sm:text-base font-bold text-white border-b-2 border-amber-400 pb-1 hover:text-amber-300 hover:border-amber-300 transition-colors cursor-pointer"
                >
                  Find out more about Murubya Campus
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 relative overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-full order-1 lg:order-2">
            <img
              src="/images/Murubya with director 1.jpg"
              alt="Pupils with Director at Murubya Campus"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </section>

      {/* ── Shared Values Across Campuses ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-[#f0f4f9] rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002f54] tracking-tight mt-2">
              Shared Values Across Our Campuses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Guided by Catholic teaching and the pastoral care of Rev. Fr. Paul Bigirwa, every learner experiences love, dignity, and intellectual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sharedValues.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 text-center space-y-2.5 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block">{val.icon}</span>
                <h3 className="font-bold text-[#002f54] text-base font-serif">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus Details Lightbox / Modal ── */}
      {selectedCampus && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedCampus(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCampus(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-[240px] sm:h-[300px] rounded-xl overflow-hidden mb-6">
              <img
                src={selectedCampus.image}
                alt={selectedCampus.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                {selectedCampus.tagline}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002f54] tracking-tight">
                {selectedCampus.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs sm:text-sm text-slate-600 mb-5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{selectedCampus.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Admissions: {selectedCampus.contact}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {selectedCampus.overview}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Features &amp; Programs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCampus.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#8e1b38] hover:bg-[#72142c] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors shadow-md"
              >
                <span>Inquire About Admission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setSelectedCampus(null)}
                className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
