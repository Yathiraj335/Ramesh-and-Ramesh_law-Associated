import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function NotFound() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      <section className="bg-primary text-primary-foreground py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6">
            404
          </h1>

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            The page you are looking for may have been moved, deleted, or the
            URL may be incorrect.
          </p>

          <a
            href="/"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
          >
            Return to Homepage
          </a>

        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <h3 className="font-serif text-3xl font-bold text-primary mb-4">
            Need Legal Assistance?
          </h3>

          <p className="text-muted-foreground text-lg mb-8">
            Contact Ramesh & Ramesh Law Associates for trusted legal guidance
            across Karnataka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919902877471"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919902877471"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold"
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
