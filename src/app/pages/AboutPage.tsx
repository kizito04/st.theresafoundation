export default function AboutPage() {

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner — Annex 2 background image */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Annex 2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/80 via-rose-900/70 to-slate-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Our Story &amp; Founder's Vision
          </h1>
          <p className="text-lg text-rose-100/80 max-w-2xl mx-auto mt-3">
            Born out of 25 years of priestly gratitude, dedicated to transforming young lives through faith, education, and love.
          </p>
        </div>
      </section>

      {/* Founder Section — Screenshot 2 design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative">
          {/* Light slate-blue backdrop container */}
          <div className="bg-[#edf2f7] rounded-none sm:rounded-lg pt-12 pb-12 px-6 sm:px-12 lg:px-16 lg:ml-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Spacer for overlapping image on desktop */}
              <div className="hidden lg:block lg:col-span-3" />

              {/* Founder quote and bio text */}
              <div className="lg:col-span-9 space-y-5 lg:pl-6">
                {/* Quotation icon outline */}
                <div className="text-slate-400">
                  <svg
                    className="w-10 h-10 text-slate-400"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 18c-2.8 0-5-2.2-5-5s2.2-5 5-5c1.4 0 2.5 1.1 2.5 2.5 0 4.1-3.4 7.5-7.5 7.5M24 18c-2.8 0-5-2.2-5-5s2.2-5 5-5c1.4 0 2.5 1.1 2.5 2.5 0 4.1-3.4 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Hello. Welcome to<br className="hidden sm:inline" /> St. Theresa Foundation.
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                  Our commitment is to give back to the community for the Lord's goodness — providing each child with the tools, spiritual formation, and educational opportunities they need to achieve their highest potential. We strive to create an environment fostering academic excellence and personal growth.
                </p>

                <div className="pt-2 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Rev. Fr. Paul Bigirwa</h3>
                    <p className="text-sm text-slate-500">Founder &amp; Director, St. Theresa Foundation</p>
                  </div>
                  {/* Subtle decorative right bracket */}
                  <div className="hidden sm:block text-slate-300 select-none">
                    <div className="w-8 h-8 border-b-2 border-r-2 border-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Director photo overlapping on the left */}
          <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[320px] xl:w-[360px] mx-auto mb-6 lg:mb-0">
            <div className="relative shadow-2xl overflow-hidden bg-white">
              <img
                src="/images/Director 2.jpg"
                alt="Rev. Fr. Paul Bigirwa - Director"
                className="w-full h-[380px] sm:h-[440px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Living Memory of Gratitude — Screenshot 3 design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white">
          {/* Top section: Wide image with overlapping dark navy badge */}
          <div className="relative">
            {/* Murubya pupils 1 banner image */}
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden">
              <img
                src="/images/Murubya pupils 1.jpg"
                alt="Murubya Pupils - St. Theresa Foundation"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Overlapping dark navy card on bottom-left */}
            <div className="sm:absolute sm:-bottom-12 sm:left-8 lg:left-12 bg-[#10243e] text-white p-8 sm:p-10 sm:max-w-md lg:max-w-lg shadow-xl">
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 mb-3">
                About
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
                A living memory of gratitude
              </h2>
            </div>
          </div>

          {/* Lower section: Decorative grid on left, descriptive text on right */}
          <div className="pt-12 sm:pt-20 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Decorative cross/grid element matching screenshot */}
            <div className="hidden lg:flex lg:col-span-4 items-center justify-start pl-12 pt-6">
              <div className="relative w-28 h-28">
                {/* Thin structural grid lines */}
                <div className="absolute top-0 bottom-0 left-10 w-[1.5px] bg-slate-800" />
                <div className="absolute left-0 right-0 top-10 h-[1.5px] bg-slate-800" />
                <div className="absolute left-0 top-0 w-10 h-10 border-t border-l border-slate-300" />
                <div className="absolute right-0 bottom-0 w-10 h-10 border-b border-r border-slate-300" />
              </div>
            </div>

            {/* Right: Narrative paragraphs */}
            <div className="lg:col-span-8 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                The St. Theresa Foundation was born out of 25 years of priestly gratitude, dedicated to transforming young lives through faith, education, and love. Established by Rev. Fr. Paul Bigirwa as his lasting silver jubilee gift back to the soil and community that nurtured him, it creates enduring opportunities for generations of children.
              </p>
              <p>
                Throughout the years, the foundation has expanded its facilities, introduced new programs, and embraced technological and vocational advancements to enhance the learning experience. We have built a strong reputation for fostering a culture of excellence, where students are encouraged to explore their passions, develop critical thinking skills, and become active, responsible members of the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3 Inspirations Behind the Foundation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-rose-700 font-bold text-xs uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            1.3 Guiding Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Inspirations Behind the Foundation
          </h2>
          <p className="text-gray-600 mt-2">
            Three powerful stories that shape our devotion, passion, and strategic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Inspiration 1: Queen of Katwe */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl font-bold">
                ♟️
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Queen of Katwe
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A reminder that brilliance can emerge from the most unexpected places when a child is given a chance. Phiona Mutesi's journey from a slum child to an international chess icon inspires our academic and chess mentorship programs.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-amber-800">
              Key Lesson: Opportunity unlocks potential.
            </div>
          </div>

          {/* Inspiration 2: Pelé */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-2xl font-bold">
                ⚽
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Pelé: Birth of a Legend
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A testimony that talent, when nurtured, can transform a life and inspire a nation. From playing with improvised socks stuffed with rags to world glory, Pelé's grit guides our Sports Academy.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
              Key Lesson: Nurtured talent transforms lives.
            </div>
          </div>

          {/* Inspiration 3: St. Theresa of Lisieux */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-900 flex items-center justify-center text-2xl font-bold">
                🌹
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                St. Theresa of Lisieux
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Patron of simplicity, love, and small acts that change the world — "the Little Flower". She inspires us to perform small, daily acts of kindness with profound love for every vulnerable learner.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-rose-800">
              Key Lesson: Small acts done with great love.
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — Screenshot 4 design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with red underline accent matching Screenshot 4 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-slate-900">
            Our Commitment
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-none border border-slate-200 border-t-4 border-t-slate-900 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To raise a generation of confident, educated, spiritually grounded, and socially responsible young people capable of leading transformation in Uganda and globally.
              </p>
              <ul className="space-y-3 pt-3">
                {[
                  "Raising confident & spiritually grounded youth",
                  "Transformative leadership across Uganda & globally",
                  "Holistic character development through faith and love",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <span className="text-red-600 font-bold text-base leading-none mt-0.5 select-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-none border border-slate-200 border-t-4 border-t-slate-900 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To support education, nurture talent, strengthen families, and create pathways for children to rise beyond limitations, poverty, and financial hardship.
              </p>
              <ul className="space-y-3 pt-3">
                {[
                  "Comprehensive education & school sponsorship",
                  "Talent nurturing in sports, arts, and leadership",
                  "Strengthening vulnerable families and communities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <span className="text-red-600 font-bold text-base leading-none mt-0.5 select-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
