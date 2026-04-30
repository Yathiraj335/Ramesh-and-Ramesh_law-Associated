import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function TermsOfService() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Terms of Service
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Terms governing the use of this website
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Website Use
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              This website is intended for informational purposes regarding
              Ramesh & Ramesh Law Associates and its services. Users agree to
              use this website lawfully and responsibly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              No Legal Advice
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Content on this website does not constitute formal legal advice
              and should not replace direct professional consultation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Intellectual Property
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Website content, branding, logos, design, and materials are the
              property of Ramesh & Ramesh Law Associates unless otherwise
              stated. Unauthorized reproduction is prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Limitation of Liability
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Ramesh & Ramesh Law Associates shall not be liable for decisions
              made based solely on website content without formal legal
              consultation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              External Links
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              External services or websites linked through this platform are not
              under our control and may have independent policies.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Updates
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify website content or policies at any
              time without prior notice.
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
