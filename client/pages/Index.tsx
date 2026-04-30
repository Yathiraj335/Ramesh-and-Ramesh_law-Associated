import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F57134794e3d74be2b861b196562dad82%2Fddbc1a054e4d4d8599b546f14139e94c?format=webp&width=800&height=1200";

const practiceAreas = [
  {
    icon: "⚖️",
    title: "Civil Cases",
    description:
      "Comprehensive legal representation for civil matters and disputes",
  },
  {
    icon: "📋",
    title: "Criminal Cases",
    description:
      "Expert defense and prosecution support for criminal proceedings",
  },
  {
    icon: "🏠",
    title: "Property Cases",
    description:
      "Guidance on property disputes, transfers, and documentation",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Law",
    description:
      "Sensitive handling of family matters and personal legal issues",
  },
  {
    icon: "🔐",
    title: "Cyber Law",
    description:
      "Protection against digital crimes and cyber-related legal matters",
  },
  {
    icon: "📄",
    title: "Documentation",
    description:
      "Professional preparation and review of all legal documents",
  },
  {
    icon: "💼",
    title: "Legal Opinion",
    description: "Expert legal advice and opinion on complex matters",
  },
  {
    icon: "👥",
    title: "Family Consultation",
    description: "Confidential consultation for family-related concerns",
  },
  {
    icon: "🔗",
    title: "Document Registration",
    description:
      "Assistance with official registration of important documents",
  },
];

const faqItems = [
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can book a consultation by clicking the 'Book Consultation' button on our website or calling us directly. We typically accommodate new clients within 3-5 business days.",
  },
  {
    question: "What is your experience in criminal law?",
    answer:
      "We have over 21 years of experience handling criminal cases of varying complexity. Our team has successfully defended clients in numerous cases across different jurisdictions.",
  },
  {
    question: "Do you provide legal opinions?",
    answer:
      "Yes, we provide comprehensive legal opinions on various matters. Our expert advocates will analyze your situation and provide detailed written opinions.",
  },
  {
    question: "How are your fees structured?",
    answer:
      "Our fees are transparent and tailored to your specific needs. We offer various fee structures including hourly rates, fixed fees, and contingency arrangements for suitable cases.",
  },
  {
    question: "What is your document registration process?",
    answer:
      "We handle all aspects of document registration including property deeds, agreements, and other legal documents. We ensure compliance with all legal requirements.",
  },
  {
    question: "Are you available for online consultations?",
    answer:
      "Yes, we offer both in-person and online consultations to provide convenience and accessibility to our clients across different locations.",
  },
];

const whyChooseUs = [
  {
    title: "21+ Years Experience",
    description:
      "Over two decades of proven expertise in diverse legal matters",
  },
  {
    title: "Local Authority",
    description:
      "Deep understanding of Bangalore legal landscape and procedures",
  },
  {
    title: "Comprehensive Services",
    description:
      "Full-service legal practice covering all major practice areas",
  },
  {
    title: "Documentation Expertise",
    description:
      "Meticulous attention to legal documentation and compliance",
  },
  {
    title: "Client-Focused",
    description:
      "Personalized attention and transparent communication throughout",
  },
  {
    title: "Trustworthy Partnership",
    description:
      "Built on principles of justice, integrity, and professional excellence",
  },
];

export default function Index() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  return (
    <div className="w-full">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground py-20 md:py-32 overflow-hidden">
        {/* Legal background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="legal" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse"><g stroke="white" stroke-width="1" fill="none"><path d="M100,20 L100,180" opacity="0.3"/><circle cx="100" cy="100" r="40" opacity="0.2"/><path d="M60,100 L140,100" opacity="0.2"/><path d="M100,60 L100,140" opacity="0.2"/><path d="M70,70 L130,130" opacity="0.15"/><path d="M130,70 L70,130" opacity="0.15"/></g></pattern></defs><rect width="1200" height="800" fill="none"/><rect width="1200" height="800" fill="url(%23legal)"/></svg>')`,
            backgroundSize: "200px 200px",
          }}
        ></div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                21 Years of Trusted Legal Expertise
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                Experts in Civil, Criminal, Property, Family, Cyber Law,
                Documentation, and Registration Services. Your trusted legal
                partner in Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#consultation"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded font-bold hover:opacity-90 transition text-center"
                >
                  Book Consultation
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded font-bold hover:bg-primary-foreground/10 transition text-center"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="w-full max-w-sm relative">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
                <img
                  src={LOGO_URL}
                  alt="Ramesh and Ramesh Law Associates"
                  className="w-full h-auto drop-shadow-2xl relative z-10 brightness-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                21+
              </div>
              <div className="text-lg font-semibold text-primary mb-2">
                Years Experience
              </div>
              <p className="text-muted-foreground">
                Serving clients with excellence and dedication
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                Karnataka
              </div>
              <div className="text-lg font-semibold text-primary mb-2">
                Based Practice
              </div>
              <p className="text-muted-foreground">
                Local expertise with deep understanding of regional laws
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                9
              </div>
              <div className="text-lg font-semibold text-primary mb-2">
                Practice Areas
              </div>
              <p className="text-muted-foreground">
                Comprehensive legal services covering diverse matters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              About Ramesh & Ramesh Law Associates
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a full-service law firm dedicated to providing trusted
              legal guidance for individuals, families, and property matters.
              With over two decades of experience, we've helped countless clients
              navigate complex legal situations with confidence and peace of
              mind.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to justice, integrity, and expertise forms the
              foundation of everything we do. Whether you're facing a civil
              dispute, criminal matter, family issue, or need documentation
              assistance, our experienced advocates are here to guide you every
              step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section id="practice-areas" className="bg-muted py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Our Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-border"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground">
                    <span className="font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-muted py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition"
                >
                  <h3 className="font-serif font-bold text-primary text-left">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "text-accent flex-shrink-0 transition-transform",
                      expandedFAQ === idx && "rotate-180"
                    )}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 py-4 border-t border-border bg-white">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Banner */}
      <section id="consultation" className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Expert Legal Help?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact Ramesh & Ramesh Law Associates today for a confidential
            consultation. Our experienced advocates are ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-accent text-accent-foreground px-8 py-4 rounded font-bold hover:opacity-90 transition"
            >
              Call Us Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded font-bold hover:bg-primary-foreground/10 transition"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-6 py-3 rounded font-bold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">Phone</h4>
                  <a
                    href="tel:+919876543210"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Email</h4>
                  <a
                    href="mailto:info@rameshlaw.com"
                    className="text-muted-foreground hover:text-accent transition break-all"
                  >
                    info@rameshlaw.com
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">WhatsApp</h4>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Office Location</h4>
                  <p className="text-muted-foreground">
                    Mahalakshmi Puram<br />
                    Bangalore, India
                  </p>
                </div>
                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is a placeholder for Google Maps
                    integration. Add your embedded map here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
