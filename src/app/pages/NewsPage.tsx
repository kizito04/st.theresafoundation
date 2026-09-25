import { useState } from "react";
import { X, Calendar, User, ArrowRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  image: string;
}

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const newsArticles: Article[] = [
    {
      id: 1,
      title: "Silver Jubilee Celebration of Rev. Fr. Paul Bigirwa Announced for 05 July 2025",
      date: "05 July 2025",
      author: "Foundation Secretariat",
      summary:
        "Hoima Catholic Diocese, parishioners, and community leaders prepare to celebrate 25 years of priestly dedication and service, marking the official inauguration of St. Theresa Foundation programs.",
      content: [
        "The Hoima Catholic Diocese together with parishioners of Igayaza and surrounding rural communities has announced the formal Silver Jubilee celebration for Rev. Fr. Paul Bigirwa, marking 25 fruitful years of holy priesthood on 05 July 2025.",
        "Over the past two and a half decades, Fr. Paul has championed rural education, uplifted vulnerable families, and founded schools that now provide high-quality learning and moral grounding to hundreds of children across Western Uganda.",
        "The Thanksgiving celebration will feature a solemn Mass, the blessing of newly constructed campus facilities, and the official kickoff of new sponsorships under the St. Theresa Education Fund.",
      ],
      image: "/images/Director 2.jpg",
    },
    {
      id: 2,
      title: "St. Theresa Education Fund Launches Campaign to Sponsor 200 Vulnerable Learners",
      date: "15 August 2025",
      author: "Sponsorship Desk",
      summary:
        "Targeting tuition subsidies, scholastic kits, and daily meals, the Foundation invites local and international partners to stand with rural orphans and underprivileged learners across Kakumiro District.",
      content: [
        "In response to rising economic hardships affecting rural households, the St. Theresa Education Fund has launched its annual outreach drive to sponsor over 200 needy children across the district.",
        "The initiative ensures that poverty does not force children out of the classroom. Sponsored pupils receive full tuition assistance, stationery, school uniforms, and access to the foundation's nutritious daily feeding program.",
        "Donors and well-wishers can sponsor a child annually or contribute to the general scholarship endowment fund.",
      ],
      image: "/images/Annex 4.png",
    },
    {
      id: 3,
      title: "St. Theresa Annex Expands Modern Classrooms & Early Childhood Learning Center",
      date: "22 August 2025",
      author: "Campus Administrator",
      summary:
        "Newly furnished classrooms and dedicated early learning spaces open at the Annex Campus, providing young learners with an inspiring, safe, and nurturing environment.",
      content: [
        "St. Theresa Nursery & Primary School Annex Campus has unveiled its newly completed lower primary classroom wing, specifically designed for early childhood development and foundational literacy.",
        "The new block includes child-friendly furniture, bright educational learning aids, reading corners, and clean sanitation facilities, reflecting the foundation's commitment to quality child-centered learning.",
        "Headmistress and teaching staff welcomed parents during an open day tour to inspect the state-of-the-art facilities ahead of the new school term.",
      ],
      image: "/images/annex 3.png",
    },
    {
      id: 6,
      title: "Pastoral Visits & Community Character Formation Outreach at Murubya Campus",
      date: "10 September 2025",
      author: "Pastoral Committee",
      summary:
        "Rev. Fr. Paul Bigirwa conducts campus blessing ceremonies, family guidance sessions, and interactive mentorship meetings with pupils and staff at Murubya Outreach Primary School.",
      content: [
        "Rev. Fr. Paul Bigirwa recently led a day of pastoral blessings and community dialogue at the Murubya Campus, engaging directly with pupils, teachers, and guardians.",
        "Addressing the school gathering, Fr. Paul emphasized the virtues of St. Theresa the Little Flower—doing ordinary things with extraordinary love, honesty, and mutual respect.",
        "The visit concluded with the distribution of scholastic materials and a shared community meal celebrating pupil achievements.",
      ],
      image: "/images/Fr with pupils.png",
    },
  ];

  return (
    <div className="space-y-16 pb-20 bg-white overflow-hidden">
      {/* ── Top Section ── */}
      <section
        className="relative text-white min-h-[460px] sm:min-h-[520px] flex items-center py-28 sm:py-36 overflow-hidden"
        style={{
          backgroundImage: "url('/images/news 1.png')",
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
                News &amp; Updates
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed pl-6 sm:pl-8">
              Stay updated with school milestones, program launches, pastoral stories, and community developments across St. Theresa Foundation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Articles List ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {newsArticles.map((article, idx) => (
            <article
              key={article.id}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Text Content */}
              <AnimatedSection
                variant={idx % 2 === 0 ? "fly-left" : "fly-right"}
                duration={850}
                className="lg:col-span-7 space-y-3.5"
              >
                <h2
                  onClick={() => setSelectedArticle(article)}
                  className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold text-[#002f54] leading-snug tracking-tight hover:text-[#8e1b38] transition-colors cursor-pointer"
                >
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight pt-1">
                  {article.date}
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                  {article.summary}
                </p>

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-block text-sm sm:text-base font-bold text-[#8e1b38] pb-1 border-b-2 border-[#8e1b38] hover:text-[#72142c] hover:border-[#72142c] transition-all cursor-pointer"
                  >
                    Read full article
                  </button>
                </div>
              </AnimatedSection>

              {/* Right Column: Image */}
              <AnimatedSection
                variant={idx % 2 === 0 ? "fly-right" : "fly-left"}
                duration={850}
                delay={120}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <div
                  onClick={() => setSelectedArticle(article)}
                  className="w-full sm:w-[380px] lg:w-[400px] h-[210px] sm:h-[230px] rounded-lg overflow-hidden shadow-sm border border-slate-200/80 cursor-pointer group flex-shrink-0"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            </article>
          ))}
        </div>
      </section>

      {/* ── Read Full Article Lightbox / Modal ── */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-[240px] sm:h-[320px] rounded-xl overflow-hidden mb-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 mb-3">
              <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                <Calendar className="w-4 h-4 text-blue-600" />
                {selectedArticle.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-slate-400" />
                {selectedArticle.author}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002f54] leading-snug tracking-tight mb-4">
              {selectedArticle.title}
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#002f54] hover:bg-[#00203a] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
