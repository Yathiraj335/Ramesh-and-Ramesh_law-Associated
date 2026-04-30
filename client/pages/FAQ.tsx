import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "How do I book a consultation?",
    answer:
      "You can contact us directly via phone, WhatsApp, email, or through the website consultation form.",
  },
  {
    question: "Do you serve clients across Karnataka?",
    answer:
      "Yes, Ramesh & Ramesh Law Associates serves clients across Karnataka while operating from our Bangalore office.",
  },
  {
    question: "What legal areas do you specialize in?",
    answer:
      "We specialize in Civil Cases, Criminal Cases, Property Cases, Family Law, Cyber Law, Documentation, Legal Opinion, Family Consultation, and Document Registration.",
  },
  {
    question: "Do you provide online consultations?",
    answer:
      "Yes, both online and direct consultations are available depending on your legal needs.",
  },
  {
    question: "Can you assist with legal documentation and registration?",
    answer:
      "Yes, we provide drafting, review, documentation, and registration support.",
  },
  {
    question: "Is my legal matter confidential?",
    answer:
      "We value privacy and confidentiality. Formal confidentiality protections apply after professional engagement.",
  },
  {
    question: "How are legal fees structured?",
    answer:
      "Fees vary depending on the nature and complexity of the case. Transparent fee discussions are provided during consultation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Practical answers to common legal and consultation questions
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-semibold text-primary">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      openIndex === idx && "rotate-180"
                    )}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Still Need Legal Guidance?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact Ramesh & Ramesh Law Associates for trusted legal
            consultation across Karnataka.
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
