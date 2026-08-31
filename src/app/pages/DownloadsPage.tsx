import { Download, FileText, Sparkles, CheckCircle2 } from "lucide-react";

export default function DownloadsPage() {
  const documents = [
    {
      title: "Child Sponsorship Application Form",
      category: "Education Fund",
      size: "245 KB",
      format: "PDF Document",
      desc: "Official form for individuals and partners pledging to sponsor a child (£200/year).",
      filename: "St_Theresa_Child_Sponsorship_Form.pdf",
    },
    {
      title: "St. Theresa Schools Admission Form 2025/2026",
      category: "Academics",
      size: "380 KB",
      format: "PDF Document",
      desc: "Enrollment & registration form for Main Campus, Annex Campus, and Murubya Outreach Campus.",
      filename: "St_Theresa_School_Admission_Form.pdf",
    },
    {
      title: "Silver Jubilee 2025 Foundation Profile Brochure",
      category: "Official Publication",
      size: "1.2 MB",
      format: "PDF Brochure",
      desc: "Full Silver Jubilee commemorative brochure detailing Fr. Paul Bigirwa's 25 years of priesthood.",
      filename: "St_Theresa_Foundation_Jubilee_Brochure.pdf",
    },
    {
      title: "Sports Academy & Chess Club Mentorship Form",
      category: "Sports Academy",
      size: "190 KB",
      format: "PDF Document",
      desc: "Registration sheet for football, athletics, netball, and chess coaching programs.",
      filename: "St_Theresa_Sports_Academy_Form.pdf",
    },
    {
      title: "St. Theresa Transporters Route & Fare Schedule",
      category: "Logistics",
      size: "150 KB",
      format: "PDF Document",
      desc: "Detailed pickup points across Kakumiro, Kibaale, Kagadi, Hoima, and Masindi.",
      filename: "St_Theresa_Transporters_Routes.pdf",
    },
  ];

  const handleDownload = (filename: string, title: string) => {
    // Generate a downloadable text blob as placeholder for demonstration PDF
    const content = `ST. THERESA FOUNDATION\nOfficial Document: ${title}\nFounded by Rev. Fr. Paul Bigirwa (Silver Jubilee 2025)\nContact: sttfoundation2@gmail.com | +256 772 543 737`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-r from-slate-950 via-rose-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Download className="w-4 h-4 text-amber-300" />
            7.4 DOWNLOAD CENTER
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Official Documents & Resources
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-3">
            Download registration forms, brochures, sponsorship flyers, and official schedule documents.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-900 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {doc.category}
                    </span>
                    <span className="text-[11px] text-gray-500">{doc.size} • {doc.format}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-slate-900">{doc.title}</h3>
                  <p className="text-xs text-gray-600">{doc.desc}</p>
                </div>
              </div>

              <button
                onClick={() => handleDownload(doc.filename, doc.title)}
                className="whitespace-nowrap bg-rose-900 hover:bg-rose-950 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Document
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
