import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const legalServices = [
  {
    title: "Legal Consultation",
    description:
      "Professional legal guidance tailored to your situation, helping clients understand rights, obligations, and strategic legal options.",
  },
  {
    title: "Court Representation & Litigation",
    description:
      "Strong legal representation in civil, criminal, property, and family matters before relevant legal forums.",
  },
  {
    title: "Documentation Services",
    description:
      "Drafting, reviewing, and verification of agreements, affidavits, deeds, notices, and legal paperwork.",
  },
  {
    title: "Document Registration",
    description:
      "Legal support for registration procedures, compliance, and official documentation processes.",
  },
  {
    title: "Legal Opinion",
    description:
      "Detailed legal analysis and professional opinions for disputes, property, family matters, and business concerns.",
  },
  {
    title: "Family Legal Consultation",
    description:
      "Confidential support for family disputes, planning, matrimonial matters, and family legal protection.",
  },
  {
    title: "Property Documentation Support",
    description:
      "Title verification, property documentation, transfer paperwork, and dispute-related legal support.",
  },
  {
    title: "Cyber Legal Assistance",
    description:
      "Legal support in cybercrime, fraud, online disputes, and digital legal concerns.",
  },
];

export default function LegalServices() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Legal Services
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Practical legal solutions, consultation, representation, and
            documentation support across Karnataka
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {legalServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
            Trusted Legal Service Built on Experience
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Ramesh & Ramesh Law Associates combines 21+ years of practical legal
            expertise with client-focused service, strategic advocacy, and
            dependable legal support.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Professional Legal Support?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact us today for consultation, documentation, or trusted legal
            representation.
          </p>

          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
