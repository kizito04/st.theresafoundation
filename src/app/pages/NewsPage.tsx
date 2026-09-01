import { Link } from "react-router";
import { Newspaper, Calendar, ArrowRight, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function RevealCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Silver Jubilee Celebration of Rev. Fr. Paul Bigirwa Announced for 05 July 2025",
      date: "05 July 2025",
      author: "Foundation Secretariat",
      category: "Jubilee Celebration",
      summary:
        "Hoima Catholic Diocese and community members prepare for 25 years of priestly thanksgiving service and the official inauguration of St. Theresa Foundation programs.",
      image: "/images/founder.png",
    },
    {
      id: 2,
      title: "Education Fund Launches Annual Campaign to Sponsor 200 Vulnerable Learners",
      date: "15 August 2025",
      author: "Sponsorship Desk",
      category: "Education Fund",
      summary:
        "Targeting £40,000 annually, the Foundation calls upon donors and well-wishers to support orphans and disadvantaged students across Kakumiro, Kibaale, and Hoima.",
      image: "/images/hero.png",
    },
    {
      id: 3,
      title: "Sports Academy Champions Excel in Regional Football & Chess Tournament",
      date: "20 August 2025",
      author: "Academy Coach",
      category: "Sports Academy",
      summary:
        "Inspired by Queen of Katwe, young chess proteges and football stars display remarkable discipline and sportsmanship at the regional youth games.",
      image: "/images/sports.png",
    },
    {
      id: 4,
      title: "St. Theresa Transporters Expands Daily Routes to Murubya Outreach Campus",
      date: "28 August 2025",
      author: "Logistics Team",
      category: "Logistics & Fleet",
      summary:
        "New daily minibus routes ensure children in remote rural sub-counties arrive safely at school with subsidized fare options.",
      image: "/images/transporters.png",
    },
  ];

  const categoryColors: Record<string, string> = {
    "Jubilee Celebration": "bg-blue-600",
    "Education Fund": "bg-indigo-600",
    "Sports Academy": "bg-emerald-600",
    "Logistics & Fleet": "bg-violet-600",
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
            <Newspaper className="w-3.5 h-3.5" />
            News &amp; Updates
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Latest News &amp; Community Stories
          </h1>
          <p className="text-blue-200 max-w-xl mx-auto mt-4 text-base">
            Stay updated with school milestones, program launches, and community stories across
            St. Theresa Foundation.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles.map((article, i) => (
              <RevealCard key={article.id} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <span
                      className={`absolute top-4 left-4 ${
                        categoryColors[article.category] ?? "bg-blue-600"
                      } text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-blue-500" />
                        {article.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-3 flex-1">
                      {article.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed mb-5">
                      {article.summary}
                    </p>

                    <Link
                      to={`/news#${article.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                    >
                      Read Full Article
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
