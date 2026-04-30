import {
  Scale,
  ShieldCheck,
  Briefcase,
  Users,
  Landmark,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function About() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">

          {/* Full Brand Logo */}
          <div className="flex justify-center mb-10">
            <img
              src="/brand-full-logo.png"
              alt="Ramesh and Ramesh Law Associates"
              className="max-w-2xl w-full h-auto"
            />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            About Ramesh & Ramesh Law Associates
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4 max-w-3xl mx-auto leading-relaxed">
            Delivering trusted legal guidance with over 21 years of experience
            serving individuals, families, and businesses across Karnataka.
          </p>

        </div>
      </section>

      {/* Firm Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Trusted Legal Excellence Across Karnataka
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Ramesh and Ramesh Law Associates is a full-service legal practice
              committed to delivering dependable legal solutions built on
              experience, integrity, and practical advocacy.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              For over two decades, we have served clients across Karnataka in
              civil disputes, criminal proceedings, property matters, family
              law, cyber law, legal documentation, legal opinion, family
              consultation, and document registration.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission is to provide reliable legal guidance while protecting
              rights, resolving disputes, and ensuring clients receive
              transparent and ethical representation.
            </p>
          </div>

          {/* Right Stats Card */}
          <div className="bg-muted rounded-xl p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Our Legal Strength
            </h3>

            <div className="space-y-4 text-muted-foreground">

              <div className="flex items-center gap-3">
                <Scale className="text-accent" size={20} />
                <span>21+ Years of Legal Experience</span>
              </div>

              <div className="flex items-center gap-3">
                <Landmark className="text-accent" size={20} />
                <span>Serving Clients Across Karnataka</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-accent" size={20} />
                <span>9 Core Practice Areas</span>
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-accent" size={20} />
                <span>Individuals, Families & Businesses</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-accent" size={20} />
                <span>Justice-Driven, Ethical Representation</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4 text-center">

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12">
            Justice. Integrity. Expertise.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Justice */}
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <h3 className="font-bold text-xl text-primary mb-4">
                Justice
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting legal rights and pursuing fair,
                dependable outcomes for every client.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <h3 className="font-bold text-xl text-primary mb-4">
                Integrity
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Ethical legal representation, transparency, and trust remain at
                the heart of our practice.
              </p>
            </div>

            {/* Expertise */}
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <h3 className="font-bold text-xl text-primary mb-4">
                Expertise
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                With over 21 years of practical legal experience, we offer
                informed strategy across diverse legal domains.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Practice Focus */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Practice Focus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Civil Cases",
              "Criminal Cases",
              "Property Law",
              "Family Law",
              "Cyber Law",
              "Documentation & Registration",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-6 shadow-sm text-center hover:shadow-md transition"
              >
                <h3 className="font-bold text-primary text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

          <div className="text-center mt-10">
            <a
              href="/practice-areas"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
            >
              Explore All Practice Areas
            </a>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Trusted Legal Guidance?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact Ramesh and Ramesh Law Associates for dependable legal
            consultation, representation, and documentation services across
            Karnataka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/consultation"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
            >
              Book Consultation
            </a>

            <a
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition"
            >
              Contact Us
            </a>

          </div>

        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
