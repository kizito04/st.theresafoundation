import { Link } from "react-router";
import { Newspaper, Calendar, Sparkles, ArrowRight, User } from "lucide-react";

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Silver Jubilee Celebration of Rev. Fr. Paul Bigirwa Announced for 05 July 2025",
      date: "05 July 2025",
      author: "Foundation Secretariat",
      category: "Jubilee Celebration",
      summary: "Hoima Catholic Diocese and community members prepare for 25 years of priestly thanksgiving service and the official inauguration of St. Theresa Foundation programs.",
      image: "/images/founder.png",
    },
    {
      id: 2,
      title: "Education Fund Launches Annual Campaign to Sponsor 200 Vulnerable Learners",
      date: "15 August 2025",
      author: "Sponsorship Desk",
      category: "Education Fund",
      summary: "Targeting £40,000 annually, the Foundation calls upon donors and well-wishers to support orphans and disadvantaged students across Kakumiro, Kibaale, and Hoima.",
      image: "/images/hero.png",
    },
    {
      id: 3,
      title: "Sports Academy Champions Excel in Regional Football & Chess Tournament",
      date: "20 August 2025",
      author: "Academy Coach",
      category: "Sports Academy",
      summary: "Inspired by Queen of Katwe, young chess proteges and football stars display remarkable discipline and sportsmanship at the regional youth games.",
      image: "/images/sports.png",
    },
    {
      id: 4,
      title: "St. Theresa Transporters Expands Daily Routes to Murubya Outreach Campus",
      date: "28 August 2025",
      author: "Logistics Team",
      category: "Logistics & Fleet",
      summary: "New daily minibus routes ensure children in remote rural sub-counties arrive safely at school with subsidized fare options.",
      image: "/images/transporters.png",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-r from-slate-950 via-rose-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Newspaper className="w-4 h-4 text-amber-300" />
            7.1 NEWS & UPDATES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Latest News & Community Stories
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-3">
            Stay updated with developments, school milestones, and community stories across St. Theresa Foundation.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-rose-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose-700" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-rose-700" />
                      {article.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-rose-900 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/news#${article.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-rose-900 hover:text-amber-600 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
