import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Disclaimer() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Disclaimer
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Important legal information regarding the use of this website
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              General Information Only
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              The information provided on this website is for general
              informational purposes only and should not be considered legal
              advice. Visitors should not act upon any information on this
              website without seeking professional legal consultation specific
              to their circumstances.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              No Advocate-Client Relationship
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Use of this website, including submitting inquiries or contacting
              Ramesh & Ramesh Law Associates through this platform, does not
              automatically create an advocate-client relationship.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Confidentiality
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Any information transmitted through this website or email should
              not be considered confidential until a formal professional
              relationship has been established.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Accuracy of Information
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              While we strive to keep information accurate and updated, legal
              regulations and interpretations may change. Ramesh & Ramesh Law
              Associates makes no guarantees regarding completeness, accuracy,
              or applicability.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              External Links
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              This website may contain external references for convenience.
              Ramesh & Ramesh Law Associates is not responsible for external
              website content or policies.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Contact for Legal Consultation
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              For legal advice tailored to your situation, please directly
              contact Ramesh & Ramesh Law Associates for a formal consultation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
