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

      {/* Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white border rounded-xl shadow-sm p-8 md:p-10">

            <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
              Consultation Request Form
            </h2>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              {/* REQUIRED */}
              <input
                type="hidden"
                name="access_key"
                value="8d172e9f-9e6b-456c-a6d3-90d18bc1ac39"
              />

              <input
                type="hidden"
                name="subject"
                value="New Legal Consultation Request"
              />

              <input
                type="hidden"
                name="redirect"
                value="https://rameshlawassociates.netlify.app/thank-you"
              />

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border rounded-md px-4 py-3"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border rounded-md px-4 py-3"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border rounded-md px-4 py-3"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Legal Category
                </label>
                <select
                  name="category"
                  required
                  className="w-full border rounded-md px-4 py-3"
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
                  <option>Divorce Cases</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Describe Your Legal Concern
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full border rounded-md px-4 py-3"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-4 rounded-md font-bold"
              >
                Submit Consultation Request
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              Our office will review your request and contact you shortly.
            </p>

          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-16 bg-muted/30 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Prefer Direct Contact?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="tel:+919902877471"
              className="bg-primary text-white px-8 py-4 rounded-md font-bold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919902877471"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-4 rounded-md font-bold"
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
