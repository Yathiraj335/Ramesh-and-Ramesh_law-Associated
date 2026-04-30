import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="w-full">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            About Ramesh and Ramesh Law Associates
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-4 max-w-3xl mx-auto">
            Delivering trusted legal guidance with over 21 years of experience in
            civil, criminal, property, family, and cyber law.
          </p>
        </div>
      </section>

      {/* Firm Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Trusted Legal Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Ramesh and Ramesh Law Associates has been providing comprehensive
              legal solutions for individuals, families, and businesses in
              Bangalore for over two decades.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With expertise across civil, criminal, property, family, cyber law,
              legal documentation, legal opinion, family consultation, and
              document registration, our firm is committed to justice, integrity,
              and professional excellence.
            </p>
          </div>

          <div className="bg-muted rounded-lg p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold mb-4">
              21+ Years of Experience
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Civil Cases</li>
              <li>• Criminal Cases</li>
              <li>• Property Law</li>
              <li>• Family Law</li>
              <li>• Cyber Law</li>
              <li>• Documentation & Registration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10">
            Justice. Integrity. Expertise.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3">Justice</h3>
              <p className="text-muted-foreground">
                Committed to protecting legal rights through dependable advocacy.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Ethical legal representation built on trust and transparency.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3">Expertise</h3>
              <p className="text-muted-foreground">
                Over two decades of practical legal knowledge across diverse
                practice areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Trusted Legal Guidance?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact Ramesh and Ramesh Law Associates for reliable legal
            consultation and support.
          </p>

          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
