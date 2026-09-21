import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

// Add GalleryCard component at the top, just below imports
function GalleryCard({ item, onClick }: { item: any; onClick: () => void }) {
  const [isInCenter, setIsInCenter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply intersection observer on small screens (width < 640px)
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (mediaQuery.matches) {
          setIsInCenter(entry.isIntersecting);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px", // triggers when the middle 20% of the screen intersects
        threshold: 0,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const handleResize = () => {
      if (!mediaQuery.matches) {
        setIsInCenter(false);
      }
    };
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="relative group overflow-hidden rounded-2xl bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-[290px] sm:h-[330px] border border-slate-200/70"
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover object-center sm:group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Soft overlay gradient on hover/center */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${isInCenter ? 'opacity-100' : 'opacity-0 sm:group-hover:opacity-100'}`} />

      {/* Top Zoom hint on hover/center */}
      <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-opacity duration-300 ${isInCenter ? 'opacity-100' : 'opacity-0 sm:group-hover:opacity-100'}`}>
        <ZoomIn className="w-4 h-4" />
      </div>

      {/* Description that appears from the bottom on hover/center */}
      <div className={`absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-transform duration-300 ease-out flex flex-col justify-end text-white z-10 ${isInCenter ? 'translate-y-0' : 'translate-y-full sm:group-hover:translate-y-0'}`}>
        <div className="w-8 h-1 bg-[#8e1b38] rounded-full mb-2" />
        <h3 className="font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 mt-1.5 line-clamp-3 leading-relaxed drop-shadow-sm">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Murubya Pupils with Director Rev. Fr. Paul Bigirwa",
      desc: "Rev. Fr. Paul Bigirwa gathering with joyful primary pupils during pastoral campus visits in Kakumiro.",
      src: "/images/Fr with pupils 1.png",
    },
    {
      id: 2,
      title: "St. Theresa Annex Early Learners & Pupils",
      desc: "Pupils celebrating together in front of the St. Theresa Annex campus in their vibrant school uniforms.",
      src: "/images/Annex 4.png",
    },
    {
      id: 3,
      title: "Mentorship & Campus Assembly with Fr. Paul",
      desc: "Father Paul Bigirwa mentoring pupils on Christian faith, academic perseverance, and ethical values.",
      src: "/images/Fr with pupils.png",
    },
    {
      id: 6,
      title: "Classroom Learning & Joyful School Life",
      desc: "Energetic learners participating actively in structured lessons and group activities at Murubya.",
      src: "/images/Murubya pupils.png",
    },
    {
      id: 7,
      title: "St. Theresa Annex Classrooms & Grounds",
      desc: "The bright primary block and learning spaces nurturing rural children with high standards of education.",
      src: "/images/annex 3.png",
    },
    {
      id: 11,
      title: "St. Theresa Foundation Main Campus Gate",
      desc: "The grand entrance gate welcoming students, guardians, and visitors to the foundation grounds in Igayaza.",
      src: "/images/gate.png",
    },
    {
      id: 12,
      title: "Official Campus Signpost & Diocese Location",
      desc: "St. Theresa Nursery and Primary School signpost under Hoima Catholic Diocese in Kakumiro District.",
      src: "/images/signpost.png",
    },
    {
      id: 15,
      title: "Rev. Fr. Paul Bigirwa — Founder & Director",
      desc: "25 Years of Priesthood (Silver Jubilee 05 July 2025), dedicated to children's education and rural welfare.",
      src: "/images/Director 2.jpg",
    },
    {
      id: 16,
      title: "Director Pastoral Community Outreach",
      desc: "Fr. Paul Bigirwa guiding local families and educational initiatives across Western Uganda.",
      src: "/images/Director 3.jpg",
    },
    {
      id: 17,
      title: "St. Theresa of the Child Jesus Patronage",
      desc: "Spreading the gentle love, humility, and prayerful dedication of St. Theresa, our holy patroness.",
      src: "/images/Theresa.jpg",
    },
    {
      id: 18,
      title: "Foundation Development & Facilities",
      desc: "Staff residences and community development quarters advancing rural infrastructure in Igayaza.",
      src: "/images/house 2.png",
    },
    {
      id: 19,
      title: "Murubya Campus Grounds & Learning Environment",
      desc: "Scenic rural school grounds offering a peaceful, focused atmosphere for pupils at Murubya.",
      src: "/images/Murubya 1.png",
    },
    {
      id: 20,
      title: "Classroom Buildings at Murubya Primary",
      desc: "Dedicated primary school classrooms constructed to serve remote farming families in Kakumiro.",
      src: "/images/Murubya 2.png",
    },
    {
      id: 21,
      title: "School Compound & Daily Pupil Gathering",
      desc: "Learners assembling during morning devotion and outdoor recreational activities.",
      src: "/images/Murubya 3.png",
    },
    {
      id: 22,
      title: "Murubya School Facility Overview",
      desc: "Expanding education facilities ensuring no rural child is left behind.",
      src: "/images/Murubya 4.png",
    },
    {
      id: 23,
      title: "Staff & Guest Residences — Campus Quarters",
      desc: "Residential facilities supporting dedicated teaching staff and community volunteers.",
      src: "/images/House1.png",
    },
  ];

  const currentIndex = selectedImage
    ? galleryItems.findIndex((item) => item.src === selectedImage.src)
    : -1;

  const showPrev = () => {
    if (currentIndex > 0) {
      const prev = galleryItems[currentIndex - 1];
      setSelectedImage({ src: prev.src, title: prev.title, desc: prev.desc });
    } else {
      const last = galleryItems[galleryItems.length - 1];
      setSelectedImage({ src: last.src, title: last.title, desc: last.desc });
    }
  };

  const showNext = () => {
    if (currentIndex < galleryItems.length - 1) {
      const next = galleryItems[currentIndex + 1];
      setSelectedImage({ src: next.src, title: next.title, desc: next.desc });
    } else {
      const first = galleryItems[0];
      setSelectedImage({ src: first.src, title: first.title, desc: first.desc });
    }
  };

  return (
    <div className="space-y-16 pb-20 bg-white overflow-hidden">
      {/* ── Header Banner ── */}
      <section
        className="relative text-white min-h-[460px] sm:min-h-[520px] flex items-center py-28 sm:py-36 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Fr with pupils 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection variant="fly-left" duration={850}>
            <div className="flex items-center gap-4 sm:gap-5 mb-4">
              <div className="w-2.5 sm:w-3 h-12 sm:h-16 bg-[#1e3a8a] flex-shrink-0" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Photo Gallery
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed pl-6 sm:pl-8">
              Explore authentic moments from our classrooms, sports training, pastoral visits with Fr. Paul Bigirwa, and community celebrations in Kakumiro.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Gallery Cards Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <AnimatedSection
              key={item.id}
              variant="grow"
              duration={750}
              delay={(index % 3) * 120}
            >
              <GalleryCard
                item={item}
                onClick={() => setSelectedImage({ src: item.src, title: item.title, desc: item.desc })}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>


      {/* ── Fullscreen Lightbox Modal ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-h-[68vh] overflow-hidden rounded-xl flex items-center justify-center bg-black/40">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[68vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <h3 className="text-lg sm:text-xl font-bold font-serif">{selectedImage.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
