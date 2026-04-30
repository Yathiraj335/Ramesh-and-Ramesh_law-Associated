import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Contact() {
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

          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Contact Ramesh & Ramesh Law Associates
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4 max-w-3xl mx-auto leading-relaxed">
            Trusted legal consultation with 21+ years of expertise serving
            individuals, families, and businesses across Karnataka.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side - Contact Details */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">

                {/* Primary Phone */}
                <a
                  href="tel:+919902877471"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition">
                    <Phone className="text-accent" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      Primary Contact
                    </h3>

                    <p className="text-muted-foreground">
                      +91 9902877471
                    </p>
                  </div>
                </a>

                {/* Secondary Phone */}
                <a
                  href="tel:+919148201637"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition">
                    <Phone className="text-accent" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      Secondary Contact
                    </h3>

                    <p className="text-muted-foreground">
                      +91 9148201637
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:kunaase@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition">
                    <Mail className="text-accent" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      Email
                    </h3>

                    <p className="text-muted-foreground break-all">
                      kunaase@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919902877471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition">
                    <MessageCircle className="text-accent" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      WhatsApp Consultation
                    </h3>

                    <p className="text-muted-foreground">
                      Instant consultation support
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="text-accent" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      Office Address
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      No. 119, 2nd Stage, 6th Main Rd,
                      <br />
                      Near Geleyarabalaga Circle,
                      <br />
                      2nd Phase, Mahalakshmipuram Layout,
                      <br />
                      Bengaluru, Karnataka - 560086
                    </p>

                    <p className="text-accent font-medium mt-2">
                      Serving Clients Across Karnataka
                    </p>

                    <a
                      href="https://www.google.com/maps/place/Ramesh+%26+Ramesh+Law+Associates/@13.0059731,77.5414572,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:opacity-90 transition"
                    >
                      Get Directions
                    </a>

                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Clock className="text-accent" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      Consultation Hours
                    </h3>

                    <p className="text-muted-foreground">
                      Monday – Saturday
                      <br />
                      By Appointment / Direct Consultation
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-muted rounded-xl p-8 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                Request a Consultation
              </h2>

              <form
                action="https://formsubmit.co/kunaase@gmail.com"
                method="POST"
                className="space-y-5"
              >
                {/* Hidden FormSubmit Fields */}
                <input type="hidden" name="_captcha" value="false" />

                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission - Ramesh & Ramesh Law Associates"
                />

                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:8080/thank-you"
                />

                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                />

                {/* Name */}
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
                    placeholder="Enter your email"
                    required
                    className="w-full border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Legal Concern */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Legal Requirement
                  </label>

                  <textarea
                    rows={5}
                    name="Legal Requirement"
                    placeholder="Briefly describe your legal concern"
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

              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Our legal team will review your request and contact you at the
                earliest opportunity.
              </p>

              <div className="mt-6 text-center">
                <a
                  href="/consultation"
                  className="inline-block text-primary font-semibold hover:text-accent transition"
                >
                  Prefer a detailed legal request? Book Full Consultation →
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Legal Support?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Connect with Ramesh & Ramesh Law Associates today for trusted legal
            guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:+919902877471"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919902877471"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition"
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
