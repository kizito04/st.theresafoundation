import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  ChevronRight,
  BookOpen,
  Sparkles,
  Tag,
  ArrowRight
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { newsArticles, getArticleBySlugOrId } from "../data/newsData";

export default function NewsDetailPage() {
  const { idOrSlug } = useParams<{ idOrSlug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find the current article
  const article = idOrSlug ? getArticleBySlugOrId(idOrSlug) : undefined;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idOrSlug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="w-16 h-16 bg-rose-100 text-[#8e1b38] rounded-full flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">Article Not Found</h1>
          <p className="text-slate-600 text-sm">
            We couldn't locate the news story you're looking for. It may have been moved or updated.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center justify-center gap-2 bg-[#002f54] hover:bg-[#00203a] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All News
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (excluding the current one)
  const relatedArticles = newsArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  // Find index for next/prev
  const currentIndex = newsArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null;

  return (
    <div className="bg-white min-h-screen pb-24 overflow-hidden">
      {/* ── Top Hero / Breadcrumb Header ── */}
      <section className="bg-slate-900 text-white pt-28 pb-14 sm:pt-36 sm:pb-20 relative overflow-hidden">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${article.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fly-left" duration={800}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 flex-wrap">
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/news" className="hover:text-amber-400 transition-colors">
                News &amp; Updates
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs">
                {article.category}
              </span>
            </nav>

            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#8e1b38] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
              <Tag className="w-3 h-3" />
              {article.category}
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 border-t border-slate-700/60 pt-5">
              <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                <Calendar className="w-4 h-4 text-amber-400" />
                {article.date}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <User className="w-4 h-4 text-amber-400" />
                {article.author}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Clock className="w-4 h-4 text-amber-400" />
                {article.readTime}
              </span>

              {/* Share button */}
              <div className="ml-auto">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer backdrop-blur-sm"
                  title="Copy link to share"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Story</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Main Article Body ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <article className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-6 sm:p-10 lg:p-12">
          {/* Main Featured Image */}
          <AnimatedSection variant="grow" duration={850}>
            <div className="w-full h-[300px] sm:h-[420px] lg:h-[480px] rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {article.caption && (
              <p className="text-xs sm:text-sm text-slate-500 italic text-center mb-8 pb-4 border-b border-slate-100">
                {article.caption}
              </p>
            )}
          </AnimatedSection>

          {/* Summary Callout */}
          <AnimatedSection variant="fly-left" duration={800} className="mb-8">
            <div className="bg-blue-50/70 border-l-4 border-[#002f54] p-5 sm:p-6 rounded-r-xl">
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed italic">
                "{article.summary}"
              </p>
            </div>
          </AnimatedSection>

          {/* Paragraphs */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "text-slate-800 font-normal first-letter:text-4xl first-letter:font-extrabold first-letter:text-[#8e1b38] first-letter:mr-2 first-letter:float-left" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Highlights (if available) */}
          {article.keyHighlights && article.keyHighlights.length > 0 && (
            <AnimatedSection variant="grow" duration={800} className="mt-10 pt-8 border-t border-slate-100">
              <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                <div className="flex items-center gap-2 text-[#002f54] font-bold text-lg mb-4">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <h3>Key Highlights &amp; Takeaways</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {article.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-[#8e1b38] mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}

          {/* Pull Quote (if available) */}
          {article.quote && (
            <AnimatedSection variant="grow" duration={800} className="my-10">
              <blockquote className="relative p-6 sm:p-8 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl border-l-4 border-[#8e1b38] text-slate-800">
                <p className="text-lg sm:text-xl font-serif italic mb-3">
                  "{article.quote.text}"
                </p>
                <footer className="text-xs sm:text-sm font-bold text-[#8e1b38] uppercase tracking-wider">
                  — {article.quote.author}
                </footer>
              </blockquote>
            </AnimatedSection>
          )}

          {/* Additional Photos Gallery (if available) */}
          {article.additionalImages && article.additionalImages.length > 0 && (
            <div className="mt-10 pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Related Photos from this Event
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {article.additionalImages.map((imgSrc, idx) => (
                  <div key={idx} className="h-44 rounded-lg overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src={imgSrc}
                      alt={`Event photo ${idx + 1}`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation bar between articles */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevArticle ? (
              <Link
                to={`/news/${prevArticle.slug || prevArticle.id}`}
                className="flex items-center gap-3 text-left group max-w-xs"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#002f54] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold block">Previous Story</span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-[#8e1b38] line-clamp-1 transition-colors">
                    {prevArticle.title}
                  </span>
                </div>
              </Link>
            ) : <div />}

            <Link
              to="/news"
              className="inline-flex items-center gap-2 bg-[#002f54] hover:bg-[#00203a] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors shadow"
            >
              <BookOpen className="w-4 h-4" />
              All News Articles
            </Link>

            {nextArticle ? (
              <Link
                to={`/news/${nextArticle.slug || nextArticle.id}`}
                className="flex items-center gap-3 text-right group max-w-xs justify-end"
              >
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold block">Next Story</span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-[#8e1b38] line-clamp-1 transition-colors">
                    {nextArticle.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#002f54] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </article>
      </main>

      {/* ── Related Recent Stories Section ── */}
      {relatedArticles.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8e1b38]">
                Explore More
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                More Stories &amp; Updates
              </h2>
            </div>
            <Link
              to="/news"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-[#8e1b38] hover:text-[#72142c] transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/news/${rel.slug || rel.id}`)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 cursor-pointer group flex flex-col h-full"
              >
                <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#002f54]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {rel.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500">{rel.date}</p>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-[#8e1b38] transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#8e1b38] gap-1 group-hover:gap-2 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
