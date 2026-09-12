import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
      id: 4,
      title: "Murubya Outreach Pupils & Director",
      desc: "Pupils gathered with Foundation Director Rev. Fr. Paul Bigirwa at Murubya Primary School.",
      src: "/images/Murubya with director 1.jpg",
    },
    {
      id: 5,
      title: "Primary Pupils Community Assembly",
      desc: "Eager learners listening attentively at the outdoor assembly grounds during morning devotions.",
      src: "/images/Murubya with director 2.jpg",
    },
    {
      id: 6,
      title: "Classroom Learning & Joyful School Life",
      desc: "Energetic learners participating actively in structured lessons and group activities at Murubya.",
      src: "/images/Murubya pupils 1.jpg",
    },
    {
      id: 7,
      title: "St. Theresa Annex Classrooms & Grounds",
      desc: "The bright primary block and learning spaces nurturing rural children with high standards of education.",
      src: "/images/Annex 3.jpg",
    },
    {
      id: 8,
      title: "Pupils at Annex Campus Grounds",
      desc: "Young learners developing friendship, team spirit, and discipline in a safe school environment.",
      src: "/images/Annex 2.jpg",
    },
    {
      id: 9,
      title: "Annex Campus Main Entrance",
      desc: "Welcome to St. Theresa Nursery and Primary School Annex, providing early childhood education.",
      src: "/images/Annex1.jpg",
    },
    {
      id: 10,
      title: "Annex Campus Pupil Community Collection",
      desc: "Vibrant snapshots of daily learning, playtime, and pupil fellowship at the Annex campus.",
      src: "/images/Annex collection.jpg",
    },
    {
      id: 11,
      title: "St. Theresa Foundation Main Campus Gate",
      desc: "The grand entrance gate welcoming students, guardians, and visitors to the foundation grounds in Igayaza.",
      src: "/images/Gate.jpeg",
    },
    {
      id: 12,
      title: "Official Campus Signpost & Diocese Location",
      desc: "St. Theresa Nursery and Primary School signpost under Hoima Catholic Diocese in Kakumiro District.",
      src: "/images/Signpost.jpeg",
    },
    {
      id: 13,
      title: "St. Theresa Sports Academy Football Training",
      desc: "Youth football training fostering fitness, team communication, and talent discovery for rural boys and girls.",
      src: "/images/sports.png",
    },
    {
      id: 14,
      title: "St. Theresa Transporters School Fleet",
      desc: "Dedicated minivans and buses ensuring safe, reliable daily transit for learners across remote villages.",
      src: "/images/transporters.png",
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
      src: "/images/House 2.jpg",
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
    <div className="space-y-16 pb-20 bg-white">
      {/* ── Header Banner — Matching Other Pages style with Fr with pupils 1 background ── */}
      <section
        className="relative text-white min-h-[460px] sm:min-h-[520px] flex items-center py-28 sm:py-36 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Fr with pupils 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay matching About Us and Contact Us pages */}
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Left-aligned heading with dark blue vertical accent bar */}
          <div className="flex items-center gap-4 sm:gap-5 mb-4">
            <div className="w-2.5 sm:w-3 h-12 sm:h-16 bg-[#1e3a8a] flex-shrink-0" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Photo Gallery
            </h1>
          </div>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed pl-6 sm:pl-8">
            Explore authentic moments from our classrooms, sports training, pastoral visits with Fr. Paul Bigirwa, and community celebrations in Kakumiro.
          </p>
        </div>
      </section>

      {/* ── Gallery Cards Grid (Cards have description that appears from bottom on hover) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ src: item.src, title: item.title, desc: item.desc })}
              className="relative group overflow-hidden rounded-2xl bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-[290px] sm:h-[330px] border border-slate-200/70"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Soft overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Zoom hint on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Description that appears from the bottom on hover */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-end text-white z-10">
                <div className="w-8 h-1 bg-[#8e1b38] rounded-full mb-2" />
                <h3 className="font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1.5 line-clamp-3 leading-relaxed drop-shadow-sm">
                  {item.desc}
                </p>
              </div>
            </div>
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
