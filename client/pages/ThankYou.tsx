import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <CheckCircle className="mx-auto mb-6 text-accent" size={72} />

          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Consultation Request Submitted
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Thank you for contacting Ramesh & Ramesh Law Associates.
            Our office will review your request and reach out using your
            provided details.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <div className="bg-white border border-border rounded-xl shadow-sm p-8 md:p-12">

            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              What Happens Next?
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                • Your legal inquiry has been securely submitted.
              </p>

              <p>
                • Our office will review your concern carefully.
              </p>

              <p>
                • A representative will contact you through phone or email.
              </p>

              <p>
                • Formal legal consultation will be scheduled based on your
                requirement.
              </p>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Please note: Submission of this form does not automatically create
              an advocate-client relationship.
            </p>

          </div>

        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Need Immediate Assistance?
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            For urgent legal matters, contact us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919902877471"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919902877471"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8">
            <a
              href="/"
              className="text-accent font-semibold hover:underline"
            >
              Return to Homepage
            </a>
          </div>

        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
