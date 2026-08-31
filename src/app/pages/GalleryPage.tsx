import { useState } from "react";
import { Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; album: string } | null>(null);

  const albums = [
    { id: "all", name: "All Moments" },
    { id: "jubilee", name: "Silver Jubilee 2025" },
    { id: "schools", name: "School Activities" },
    { id: "sports", name: "Sports Academy Highlights" },
    { id: "outreach", name: "Foundation Outreach" },
    { id: "celebrations", name: "Community Celebrations" },
    { id: "projects", name: "Construction & Development Projects" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Silver Jubilee Thanksgiving Mass",
      album: "jubilee",
      albumName: "Silver Jubilee 2025",
      src: "/images/founder.png",
      date: "July 05, 2025",
    },
    {
      id: 2,
      title: "Main Campus Primary Learners in Class",
      album: "schools",
      albumName: "School Activities",
      src: "/images/hero.png",
      date: "Term 1, 2025",
    },
    {
      id: 3,
      title: "Youth Football Tournament Finalists",
      album: "sports",
      albumName: "Sports Academy Highlights",
      src: "/images/sports.png",
      date: "August 2025",
    },
    {
      id: 4,
      title: "St. Theresa Transporters Minibus Fleet",
      album: "projects",
      albumName: "Construction & Projects",
      src: "/images/transporters.png",
      date: "June 2025",
    },
    {
      id: 5,
      title: "Chess Mentorship Training Session",
      album: "sports",
      albumName: "Sports Academy Highlights",
      src: "/images/sports.png",
      date: "May 2025",
    },
    {
      id: 6,
      title: "Education Fund Scholastic Material Distribution",
      album: "outreach",
      albumName: "Foundation Outreach",
      src: "/images/hero.png",
      date: "January 2025",
    },
    {
      id: 7,
      title: "Community Cultural Feast & Celebration",
      album: "celebrations",
      albumName: "Community Celebrations",
      src: "/images/founder.png",
      date: "July 2025",
    },
    {
      id: 8,
      title: "Murubya Outreach Classroom Construction",
      album: "projects",
      albumName: "Construction & Projects",
      src: "/images/hero.png",
      date: "April 2025",
    },
  ];

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.album === activeTab);

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-pink-950 via-slate-900 to-rose-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-300 border border-pink-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <ImageIcon className="w-4 h-4 text-pink-300" />
            6. PHOTO GALLERY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Capturing Growth, Joy & Transformation
          </h1>
          <p className="text-lg text-pink-100/80 max-w-2xl mx-auto mt-3">
            A joyful collection of moments that tell our story from the Silver Jubilee celebrations to daily school life.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {albums.map((alb) => (
            <button
              key={alb.id}
              onClick={() => setActiveTab(alb.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === alb.id
                  ? "bg-rose-900 text-white shadow-lg scale-105"
                  : "bg-white text-slate-700 hover:bg-rose-50 hover:text-rose-900 border border-slate-200"
              }`}
            >
              {alb.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border border-slate-200/80 transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    Click to view photo
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <span className="bg-rose-100 text-rose-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {item.albumName}
                </span>
                <h3 className="font-bold text-slate-900 text-sm font-serif group-hover:text-rose-900 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-rose-900 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
              />
            </div>

            <div className="p-6 bg-slate-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {selectedImage.album}
                </span>
                <h3 className="text-xl font-bold font-serif mt-2">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-xl border border-white/20"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
