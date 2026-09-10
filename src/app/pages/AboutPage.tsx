export default function AboutPage() {

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner — Screenshot 3 design with dark blue line & Annex 2 background */}
      <section
        className="relative text-white min-h-[460px] sm:min-h-[520px] flex items-center py-28 sm:py-36 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Annex 2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay without red gradient */}
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Left-aligned heading with dark blue vertical accent bar */}
          <div className="flex items-center gap-4 sm:gap-5 mb-4">
            <div className="w-2.5 sm:w-3 h-12 sm:h-16 bg-[#1e3a8a] flex-shrink-0" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Our Story &amp; Founder's Vision
            </h1>
          </div>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed pl-6 sm:pl-8">
            Born out of 25 years of priestly gratitude, dedicated to transforming young lives through faith, education, and love.
          </p>
        </div>
      </section>

      {/* About St. Theresa Foundation — Screenshot 1 design (Second top of About page, before Director) */}
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
                About St. Theresa Foundation
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
                St. Theresa Foundation was established as a thanksgiving initiative following the Silver Jubilee of priesthood of Rev. Fr. Paul Bigirwa.
              </p>
              <p>
                The Foundation seeks to transform gratitude into meaningful service by supporting children, families and communities through education, talent development, sports and other community initiatives.
              </p>
            </div>
          </div>
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


      {/* Inspirations Behind the Foundation — Screenshot 2 design (single 3-column card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Inspirations Behind the Foundation
          </h2>
        </div>

        {/* Single card with 3 columns and vertical divider lines */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Column 1: Queen of Katwe */}
            <div className="py-6 md:py-2 md:px-8 first:md:pl-2 space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                Queen of Katwe — Phiona Mutesi
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A reminder that brilliance can emerge from the most unexpected places when a child is given a chance.
              </p>
            </div>

            {/* Column 2: Pelé */}
            <div className="py-6 md:py-2 md:px-8 space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                Pelé: Birth of a Legend
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A testimony that talent, when nurtured, can transform a life and inspire a nation.
              </p>
            </div>

            {/* Column 3: St. Theresa of Lisieux */}
            <div className="py-6 md:py-2 md:px-8 last:md:pr-2 space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                St. Theresa of Lisieux
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Patron of simplicity, love, and small acts that change the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values — Screenshot 4 design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with red underline accent matching Screenshot 4 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-slate-900">
            Our Commitment
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          {/* Values Card */}
          <div className="bg-white rounded-none border border-slate-200 border-t-4 border-t-slate-900 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Our Values
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The core convictions and moral compass that inspire our dedication to every child.
              </p>
              <ul className="space-y-3 pt-3">
                {[
                  "Faith",
                  "Discipline",
                  "Excellence",
                  "Compassion",
                  "Opportunity for every child",
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

      {/* Jubilee Gift to the Community (Before Footer — Matching Screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Message with blue horizontal accent bar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-16 h-1 bg-blue-600 rounded-full" />

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Jubilee Gift to the Community
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              The Foundation was born from a simple but profound desire:
            </p>

            <blockquote className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
              <p className="font-serif italic text-xl sm:text-2xl text-slate-900 font-semibold leading-relaxed">
                “To give back to the community for the Lord’s goodness in my life.”
              </p>
              <footer className="text-sm font-bold text-blue-900 mt-3">
                — Rev. Fr. Paul Bigirwa (Silver Jubilee Message)
              </footer>
            </blockquote>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As a living prayer of thanksgiving, the Foundation translates this gratitude into tangible impact — providing life-changing education, nurturing innate gifts, and fostering dignity and hope for generations of children.
            </p>
          </div>

          {/* Right: Video player */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video border border-slate-200">
              <video
                src="/images/Video.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
