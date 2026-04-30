import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Consultation() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Book a Legal Consultation
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Request trusted legal guidance from experienced advocates serving
            clients across Karnataka
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white border border-border rounded-xl shadow-sm p-8 md:p-10">

            <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
              Consultation Request Form
            </h2>

            <form
              action="https://formsubmit.co/kunaase@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Legal Consultation Request - Ramesh & Ramesh Law Associates"
              />
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="Full Name"
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="Phone Number"
                  placeholder="Enter your phone number"
                  required
                  className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="Email Address"
                  placeholder="Enter your email address"
                  required
                  className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Legal Requirement */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Legal Requirement
                </label>

                <select
                  name="Legal Requirement"
                  required
                  className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select Legal Category</option>
                  <option>Civil Cases</option>
                  <option>Criminal Cases</option>
                  <option>Property Cases</option>
                  <option>Family Law</option>
                  <option>Cyber Law</option>
                  <option>Documentation</option>
                  <option>Legal Opinion</option>
                  <option>Family Consultation</option>
                  <option>Document Registration</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Describe Your Legal Concern
                </label>

                <textarea
                  name="Legal Concern"
                  rows={6}
                  placeholder="Briefly explain your legal concern"
                  required
                  className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 rounded-md font-bold hover:opacity-90 transition"
              >
                Submit Consultation Request
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center leading-relaxed">
              By submitting this form, you acknowledge that website submissions
              do not automatically establish an advocate-client relationship.
              Our office will review your request and contact you through your
              provided details.
            </p>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Prefer Direct Contact?
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Reach us directly through phone or WhatsApp for faster consultation.
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
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
