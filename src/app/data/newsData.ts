export interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  caption?: string;
  quote?: {
    text: string;
    author: string;
  };
  keyHighlights?: string[];
  additionalImages?: string[];
}

export const newsArticles: Article[] = [
  {
    id: 1,
    slug: "silver-jubilee-fr-paul-bigirwa",
    title: "Silver Jubilee Celebration of Rev. Fr. Paul Bigirwa Announced for 05 July 2025",
    date: "05 July 2025",
    author: "Foundation Secretariat",
    category: "Milestone & Celebration",
    readTime: "4 min read",
    summary:
      "Hoima Catholic Diocese, parishioners, and community leaders prepare to celebrate 25 years of priestly dedication and service, marking the official inauguration of St. Theresa Foundation programs.",
    content: [
      "The Hoima Catholic Diocese together with parishioners of Igayaza, Kakumiro District, and surrounding rural communities has formally announced the upcoming Silver Jubilee celebration for Rev. Fr. Paul Bigirwa, marking 25 fruitful years of holy priesthood on 05 July 2025.",
      "Over the past two and a half decades, Fr. Paul has championed rural education, uplifted vulnerable families, and founded schools that now provide high-quality learning, holistic care, and moral grounding to hundreds of children across Western Uganda.",
      "The Thanksgiving celebration will feature a solemn Mass, the blessing of newly constructed campus facilities, and the official kickoff of new sponsorships under the St. Theresa Education Fund.",
      "Community leaders, education stakeholders, parents, and alumni are expected to gather in prayer and thanksgiving for the tremendous fruits borne through Fr. Paul's selfless commitment to transforming rural lives through education and faith.",
      "All friends, partners, and well-wishers are warmly invited to take part in this historic milestone celebration as we honor 25 years of grace and chart the path for the next generation of learners."
    ],
    image: "/images/Director 2.jpg",
    caption: "Rev. Fr. Paul Bigirwa commemorating 25 years of faithful priestly ministry.",
    quote: {
      text: "True greatness lies not in grand honors, but in doing ordinary things with extraordinary love for God's little ones.",
      author: "Rev. Fr. Paul Bigirwa, Founder"
    },
    keyHighlights: [
      "Solemn Thanksgiving Holy Mass at Igayaza Parish",
      "Official blessing of new school infrastructure and classrooms",
      "Launch of the Silver Jubilee 200-Child Scholarship Endowment Fund",
      "Community reception and pupil cultural exhibitions"
    ],
    additionalImages: [
      "/images/Fr with pupils 1.png",
      "/images/Director.jpg",
      "/images/Murubya with director 1.jpg"
    ]
  },
  {
    id: 2,
    slug: "st-theresa-education-fund-sponsorship-campaign",
    title: "St. Theresa Education Fund Launches Campaign to Sponsor 200 Vulnerable Learners",
    date: "15 August 2025",
    author: "Sponsorship Desk",
    category: "Outreach & Scholarships",
    readTime: "3 min read",
    summary:
      "Targeting tuition subsidies, scholastic kits, and daily meals, the Foundation invites local and international partners to stand with rural orphans and underprivileged learners across Kakumiro District.",
    content: [
      "In response to rising economic hardships affecting rural households, the St. Theresa Education Fund has launched its annual outreach drive to sponsor over 200 needy children across Kakumiro District.",
      "The initiative ensures that poverty does not force talented children out of the classroom. Sponsored pupils receive full tuition assistance, stationery kits, school uniforms, and access to the foundation's nutritious daily feeding program.",
      "Donors and well-wishers can sponsor a child annually or contribute to the general scholarship endowment fund. Every contribution directly funds the child's enrollment, scholastic materials, medical checkups, and hot school lunches throughout the academic year.",
      "Through transparent reporting and annual progress updates, sponsors maintain a personal connection with the students they support, watching them grow into confident, educated young leaders."
    ],
    image: "/images/Annex 4.png",
    caption: "Early learners at St. Theresa Annex campus benefiting from the Education Fund.",
    quote: {
      text: "Education is the greatest equalizer. When we educate a child in a rural village, we ignite a light that lifts an entire family.",
      author: "St. Theresa Sponsorship Committee"
    },
    keyHighlights: [
      "Full tuition support for 200 vulnerable pupils in 2025/2026",
      "Comprehensive scholastic packages: books, pens, uniforms & shoes",
      "Daily balanced nutrition and health check-ups",
      "Direct sponsor-to-child correspondence and termly report cards"
    ],
    additionalImages: [
      "/images/Murubya pupils.png",
      "/images/Annex 1.png",
      "/images/news 2.png"
    ]
  },
  {
    id: 3,
    slug: "annex-modern-classrooms-early-childhood-center",
    title: "St. Theresa Annex Expands Modern Classrooms & Early Childhood Learning Center",
    date: "22 August 2025",
    author: "Campus Administrator",
    category: "Campus Development",
    readTime: "3 min read",
    summary:
      "Newly furnished classrooms and dedicated early learning spaces open at the Annex Campus, providing young learners with an inspiring, safe, and nurturing environment.",
    content: [
      "St. Theresa Nursery & Primary School Annex Campus has unveiled its newly completed lower primary classroom wing, specifically designed for early childhood development and foundational literacy.",
      "The new block includes child-friendly furniture, bright educational learning aids, reading corners, and clean sanitation facilities, reflecting the foundation's commitment to quality child-centered learning.",
      "Headmistress and teaching staff welcomed parents during an open day tour to inspect the state-of-the-art facilities ahead of the new school term.",
      "The new environment encourages active discovery, cooperative play, and phonics mastery, ensuring that children develop both academic curiosity and social-emotional resilience from the very start of their school journey."
    ],
    image: "/images/annex 3.png",
    caption: "The newly furnished classroom wing and learning facilities at St. Theresa Annex.",
    keyHighlights: [
      "Four new spacious, well-ventilated nursery & infant classrooms",
      "Dedicated reading and literacy exploration center",
      "Modern child-safe hygiene and handwashing stations",
      "Outdoor interactive early-learning play equipment"
    ],
    additionalImages: [
      "/images/annex 2.png",
      "/images/annex collection 1.png",
      "/images/House1.png"
    ]
  },
  {
    id: 4,
    slug: "pastoral-visits-murubya-campus",
    title: "Pastoral Visits & Community Character Formation Outreach at Murubya Campus",
    date: "10 September 2025",
    author: "Pastoral Committee",
    category: "Pastoral & Community",
    readTime: "4 min read",
    summary:
      "Rev. Fr. Paul Bigirwa conducts campus blessing ceremonies, family guidance sessions, and interactive mentorship meetings with pupils and staff at Murubya Outreach Primary School.",
    content: [
      "Rev. Fr. Paul Bigirwa recently led a day of pastoral blessings and community dialogue at the Murubya Campus, engaging directly with pupils, teachers, and guardians.",
      "Addressing the school gathering, Fr. Paul emphasized the virtues of St. Theresa the Little Flower—doing ordinary things with extraordinary love, honesty, and mutual respect.",
      "The visit concluded with the distribution of scholastic materials and a shared community meal celebrating pupil achievements.",
      "Parents expressed their heartfelt gratitude for the presence of a dedicated primary school in their locality, which has relieved young children of the long, perilous distances they previously walked to attend distant schools."
    ],
    image: "/images/Fr with pupils.png",
    caption: "Fr. Paul Bigirwa with enthusiastic pupils during his campus mentorship visit.",
    quote: {
      text: "Character is the backbone of knowledge. When we build faith and integrity in young hearts, success naturally follows.",
      author: "Rev. Fr. Paul Bigirwa"
    },
    keyHighlights: [
      "Interactive spiritual mentorship and prayer gathering",
      "Distribution of textbooks and writing stationery",
      "Parent-teacher consultative fellowship",
      "Blessing of new classroom desks and learning aids"
    ],
    additionalImages: [
      "/images/Murubya 1.png",
      "/images/Murubya 2.png",
      "/images/Murubya 3.png"
    ]
  },
  {
    id: 5,
    slug: "inter-house-sports-and-talent-gala",
    title: "Annual Inter-House Sports Gala & Pupil Talent Exhibition",
    date: "28 September 2025",
    author: "Sports Department",
    category: "Pupil Life & Co-Curricular",
    readTime: "3 min read",
    summary:
      "Pupils from both campuses demonstrate teamwork, athletic prowess, and creative talent in a thrilling day of track events, football, netball, and music dance.",
    content: [
      "The vibrant spirit of sportsmanship and youthful vigor came alive as St. Theresa Schools held their annual Inter-House Sports Gala and Talent Exhibition.",
      "Children competed with enthusiasm across sprint races, relay heats, football, netball, and traditional folk dance competitions. The event brought together hundreds of parents, local leaders, and community well-wishers cheering passionately from the sidelines.",
      "Physical education and co-curricular pursuits are core to our holistic development philosophy, building discipline, cooperation, leadership, and self-confidence in every child.",
      "Trophies and recognition certificates were awarded to winning houses, with special commendations given to pupils who demonstrated outstanding sportsmanship and fair play."
    ],
    image: "/images/sports.png",
    caption: "Pupils celebrating athletic achievements and teamwork at the annual sports day.",
    keyHighlights: [
      "Track and field sprint races, relays, and hurdles",
      "Inter-campus friendly football and netball matches",
      "Cultural music, traditional dance, and poetry recitations",
      "Award ceremony celebrating discipline, effort, and team spirit"
    ],
    additionalImages: [
      "/images/pele.png",
      "/images/queen 1.png",
      "/images/House 1.jpg"
    ]
  },
  {
    id: 6,
    slug: "safe-transportation-rural-pupils-initiative",
    title: "Safe Transportation Initiative: Ensuring Rural Pupils Travel Safely to School",
    date: "05 October 2025",
    author: "Logistics & Welfare",
    category: "Safety & Welfare",
    readTime: "3 min read",
    summary:
      "St. Theresa Foundation enhances dedicated student transport arrangements to ensure safe, punctual transit for children residing in distant rural settlements.",
    content: [
      "Ensuring children arrive at school safely and on time is paramount. St. Theresa Foundation has introduced organized transportation routes connecting remote villages across the district to our campuses.",
      "Many pupils previously faced several kilometers of unpaved, rainy roads every morning. With coordinated transport vans and dedicated chaperone staff, learners now commute safely, rested, and ready for full daily academic engagement.",
      "The school transport team adheres to strict vehicle safety protocols, routine inspections, and road safety guidelines to guarantee the well-being of every young commuter.",
      "Parents have welcomed this relief, noting significant improvements in pupil attendance, energy levels, and overall academic performance."
    ],
    image: "/images/transporters.png",
    caption: "School transit vans ensuring safe daily journeys for rural learners.",
    keyHighlights: [
      "Designated pickup and drop-off points in outlying rural villages",
      "Trained student transport chaperones on every route",
      "Improved morning punctuality and reduced fatigue",
      "Regular vehicle mechanical compliance and safety certifications"
    ],
    additionalImages: [
      "/images/gate.png",
      "/images/signpost.png",
      "/images/Annex 2.jpg"
    ]
  }
];

export function getArticleBySlugOrId(identifier: string | number): Article | undefined {
  if (typeof identifier === "number" || !isNaN(Number(identifier))) {
    return newsArticles.find((a) => a.id === Number(identifier));
  }
  return newsArticles.find((a) => a.slug === identifier);
}
