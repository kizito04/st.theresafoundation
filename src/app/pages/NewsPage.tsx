import { Link } from "react-router";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { newsArticles } from "../data/newsData";

export default function NewsPage() {
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
                {/* Category badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-slate-100 text-[#002f54] text-xs font-semibold px-2.5 py-1 rounded">
                    <Tag className="w-3 h-3 text-[#8e1b38]" />
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-medium">{article.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold text-[#002f54] leading-snug tracking-tight hover:text-[#8e1b38] transition-colors">
                  <Link to={`/news/${article.slug || article.id}`}>
                    {article.title}
                  </Link>
                </h2>

                <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-slate-600 pt-0.5">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-[#8e1b38]" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                  {article.summary}
                </p>

                <div className="pt-3">
                  <Link
                    to={`/news/${article.slug || article.id}`}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#8e1b38] pb-1 border-b-2 border-[#8e1b38] hover:text-[#72142c] hover:border-[#72142c] transition-all group"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Right Column: Image */}
              <AnimatedSection
                variant={idx % 2 === 0 ? "fly-right" : "fly-left"}
                duration={850}
                delay={120}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <Link
                  to={`/news/${article.slug || article.id}`}
                  className="w-full sm:w-[380px] lg:w-[400px] h-[210px] sm:h-[230px] rounded-lg overflow-hidden shadow-sm border border-slate-200/80 group flex-shrink-0 block"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </AnimatedSection>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
