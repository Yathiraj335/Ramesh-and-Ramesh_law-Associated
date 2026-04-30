import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function PrivacyPolicy() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Your privacy and confidentiality are important to us
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Information We Collect
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              When you contact Ramesh & Ramesh Law Associates through our
              website, phone, WhatsApp, or email, we may collect personal
              information such as your name, contact details, and information
              relevant to your legal inquiry.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              How We Use Your Information
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Your information is used solely for responding to inquiries,
              providing consultation, legal communication, and improving client
              service. We do not sell or trade your personal information.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Confidentiality
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We value confidentiality; however, information submitted through
              this website should not be considered fully confidential until a
              formal advocate-client relationship has been established.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Data Security
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We take reasonable steps to protect your information, but no
              digital platform can guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Third-Party Services
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Third-party communication services such as WhatsApp, email
              providers, or embedded maps may have independent privacy policies.
              We encourage users to review them separately.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Consent
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              By using this website, you consent to this privacy policy and the
              collection of information as described.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Contact
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              For privacy-related concerns, please contact Ramesh & Ramesh Law
              Associates directly through official contact channels.
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
