export default function Page() {
  const faqs = [
    {
      q: "What file formats do you support?",
      a: "Upload PDFs, JPGs, PNGs of receipts, or CSV/OFX bank statement exports. Our AI extracts line items automatically."
    },
    {
      q: "How accurate is the AI categorization?",
      a: "Each expense gets a confidence score. High-confidence items are auto-filed; low-confidence ones are flagged for your review before export."
    },
    {
      q: "Is the output IRS-compliant?",
      a: "Yes. Reports map to Schedule C categories with IRS compliance notes, ready to hand to your accountant or import into tax software."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Tax Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Guessing Which Expenses{" "}
          <span className="text-[#58a6ff]">Are Tax Deductible</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your receipts or bank statements. Our AI instantly categorizes every expense by IRS deduction type, assigns confidence scores, and generates a Schedule C-ready report.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📄", title: "Receipt & Statement Upload", desc: "PDF, image, CSV, OFX — all supported" },
          { icon: "🤖", title: "AI Categorization", desc: "OpenAI maps each expense to IRS Schedule C lines" },
          { icon: "✅", title: "Confidence Scoring", desc: "Know exactly which items need your review" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-bold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stay IRS-ready year-round</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited receipt & statement uploads",
              "AI expense categorization + confidence scores",
              "IRS Schedule C compliance notes",
              "Exportable PDF & CSV tax reports",
              "Flagged review queue for low-confidence items",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-1">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} FreelanceTax. Built for freelancers, consultants &amp; agencies.
      </footer>
    </main>
  );
}
