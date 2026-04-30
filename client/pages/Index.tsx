import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { cn } from "@/lib/utils";

const HERO_BG = "/lady-justice.jpg"; // Save image inside public folder

const practiceAreas = [
  {
    icon: "⚖️",
    title: "Civil Cases",
    description:
      "Comprehensive legal representation for civil disputes, litigation, and legal resolutions across Karnataka.",
  },
  {
    icon: "📋",
    title: "Criminal Cases",
    description:
      "Strong legal defense and representation in criminal proceedings with strategic advocacy.",
  },
  {
    icon: "🏠",
    title: "Property Cases",
    description:
      "Expert legal support for property disputes, transfers, registrations, and documentation.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Law",
    description:
      "Professional guidance for family disputes, matrimonial issues, and sensitive legal matters.",
  },
  {
    icon: "🔐",
    title: "Cyber Law",
    description:
      "Legal assistance in cybercrime, digital fraud, and technology-related disputes.",
  },
  {
    icon: "📄",
    title: "Documentation",
    description:
      "Reliable drafting, review, and legal verification of important documents.",
  },
  {
    icon: "💼",
    title: "Legal Opinion",
    description:
      "Strategic legal advice and expert opinions for informed decision-making.",
  },
  {
    icon: "👥",
    title: "Family Consultation",
    description:
      "Confidential consultation for family-related legal challenges and solutions.",
  },
  {
    icon: "🔗",
    title: "Document Registration",
    description:
      "End-to-end support for legal registration and compliance services.",
  },
];

const faqItems = [
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by contacting us directly through phone, WhatsApp, or our consultation request form.",
  },
  {
    question: "Do you serve clients outside Bangalore?",
    answer:
      "Yes, Ramesh & Ramesh Law Associates serves clients across Karnataka.",
  },
  {
    question: "Do you provide legal documentation and registration support?",
    answer:
      "Yes, we provide complete legal documentation, drafting, verification, and registration services.",
  },
  {
    question: "Can I get online legal consultation?",
    answer:
      "Yes, we offer both in-person and online legal consultations.",
  },
];

const whyChooseUs = [
  {
    title: "21+ Years of Experience",
    description:
      "Over two decades of trusted legal excellence across Karnataka.",
  },
  {
    title: "Karnataka-Wide Legal Reach",
    description:
      "Serving individuals, families, and businesses throughout Karnataka.",
  },
  {
    title: "Comprehensive Legal Solutions",
    description:
      "Civil, Criminal, Property, Family, Cyber Law, Documentation & Registration.",
  },
  {
    title: "Client-Centered Approach",
    description:
      "Transparent, ethical, and practical legal support.",
  },
];

export default function Index() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  return (
    <div className="w-full">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative text-white py-24 md:py-36 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11,31,58,0.75), rgba(11,31,58,0.8)), url(${HERO_BG})`,
        }}
      >
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
              21 Years of Trusted Legal Expertise Across Karnataka
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Experts in Civil, Criminal, Property, Family, Cyber Law,
              Documentation, Legal Opinion, Family Consultation, and Document
              Registration.
            </p>

            <p className="text-xl md:text-2xl font-semibold text-accent mb-10">
              Justice. Integrity. Expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultation"
                className="bg-accent text-accent-foreground px-8 py-4 rounded font-bold hover:opacity-90 transition text-center"
              >
                Book Consultation
              </a>

              <a
                href="https://wa.me/919902877471"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white px-8 py-4 rounded font-bold hover:bg-white/10 transition text-center"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-14">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div>
              <div className="text-5xl font-bold text-accent">21+</div>
              <div className="font-semibold text-primary mt-2">
                Years Experience
              </div>
            </div>

            <div>
              <div className="text-5xl font-bold text-accent">
                Karnataka
              </div>
              <div className="font-semibold text-primary mt-2">
                Statewide Legal Service
              </div>
            </div>

            <div>
              <div className="text-5xl font-bold text-accent">9</div>
              <div className="font-semibold text-primary mt-2">
                Practice Areas
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            About Ramesh & Ramesh Law Associates
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Ramesh & Ramesh Law Associates is a trusted full-service legal
            practice with over 21 years of experience serving clients across
            Karnataka.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Built on the principles of Justice, Integrity, and Expertise, we
            provide strategic legal representation, consultation, documentation,
            and registration services for individuals, families, and businesses.
          </p>

          <div className="mt-8">
            <a
              href="/about"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded font-bold hover:opacity-90 transition"
            >
              Learn More About Us
            </a>
          </div>

        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Our Practice Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{area.icon}</div>

                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {area.title}
                </h3>

                <p className="text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/practice-areas"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded font-bold hover:opacity-90 transition"
            >
              Explore All Practice Areas
            </a>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex gap-4">

                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                  ✓
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border">

                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 flex justify-between items-center"
                >
                  <span className="font-bold text-left">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      expandedFAQ === idx && "rotate-180"
                    )}
                  />
                </button>

                {expandedFAQ === idx && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </div>
                )}

              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/faq"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded font-bold hover:opacity-90 transition"
            >
              View All FAQs
            </a>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-16 md:py-24 text-center">
        <div className="container max-w-4xl mx-auto px-4">

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Need Trusted Legal Guidance?
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Contact Ramesh & Ramesh Law Associates for expert legal
            consultation across Karnataka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/consultation"
              className="bg-white text-primary px-8 py-4 rounded font-bold hover:opacity-90 transition"
            >
              Book Consultation
            </a>

            <a
              href="tel:+919902877471"
              className="bg-accent text-accent-foreground px-8 py-4 rounded font-bold hover:opacity-90 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919902877471"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-8 py-4 rounded font-bold hover:bg-white/10 transition"
            >
              WhatsApp Consultation
            </a>

          </div>

        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
