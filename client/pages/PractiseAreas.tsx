import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const practiceAreas = [
  {
    title: "Civil Cases",
    description:
      "Comprehensive representation in civil disputes, recovery matters, injunctions, contractual issues, and general civil litigation.",
  },
  {
    title: "Criminal Cases",
    description:
      "Strategic defense and representation for criminal proceedings with professional advocacy and legal protection.",
  },
  {
    title: "Property Cases",
    description:
      "Legal support for property disputes, registrations, title verification, documentation, and transfers.",
  },
  {
    title: "Family Law",
    description:
      "Legal guidance for family disputes, matrimonial matters, family consultation, and sensitive legal concerns.",
  },
  {
    title: "Cyber Law",
    description:
      "Support for cybercrime matters, online fraud, digital legal concerns, and cyber-related disputes.",
  },
  {
    title: "Documentation",
    description:
      "Professional drafting, verification, and legal review of agreements, affidavits, and legal records.",
  },
  {
    title: "Legal Opinion",
    description:
      "Reliable legal consultation and expert legal opinions for informed decisions.",
  },
  {
    title: "Family Consultation",
    description:
      "Confidential legal consultation for family-related legal planning and concerns.",
  },
  {
    title: "Document Registration",
    description:
      "End-to-end support for legal registration processes and documentation compliance.",
  },
];

export default function PracticeAreas() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Our Practice Areas
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Comprehensive legal expertise across diverse practice areas serving
            clients across Karnataka
          </p>
        </div>
      </section>

      {/* Practice Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {practiceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                  {area.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Clients Trust Us
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 21 years of legal excellence, Ramesh & Ramesh Law
            Associates delivers trusted legal solutions grounded in justice,
            integrity, and practical advocacy across Karnataka.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Legal Assistance?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Speak to trusted legal professionals for guidance, consultation,
            and representation.
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
