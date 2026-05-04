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

            {/* LEFT SIDE */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">

                <a href="tel:+919902877471" className="flex items-start gap-4">
                  <Phone className="text-accent" />
                  <div>
                    <h3 className="font-bold">Primary Contact</h3>
                    <p>+91 9902877471</p>
                  </div>
                </a>

                <a href="tel:+919148201637" className="flex items-start gap-4">
                  <Phone className="text-accent" />
                  <div>
                    <h3 className="font-bold">Secondary Contact</h3>
                    <p>+91 9148201637</p>
                  </div>
                </a>

                <a href="mailto:kunaase@gmail.com" className="flex items-start gap-4">
                  <Mail className="text-accent" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>kunaase@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919902877471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4"
                >
                  <MessageCircle className="text-accent" />
                  <div>
                    <h3 className="font-bold">WhatsApp Consultation</h3>
                    <p>Instant support</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin className="text-accent" />
                  <div>
                    <h3 className="font-bold">Office Address</h3>
                    <p>
                      No. 119, 2nd Stage, 6th Main Rd,<br />
                      Mahalakshmipuram, Bengaluru - 560086
                    </p>

                    <a
                      href="https://google.com/maps?q=13.0059731,77.5414572"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-primary text-white px-5 py-2 rounded"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-accent" />
                  <div>
                    <h3 className="font-bold">Consultation Hours</h3>
                    <p>Monday – Saturday</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-muted rounded-xl p-8">

              <h2 className="font-serif text-3xl font-bold mb-6">
                Request a Consultation
              </h2>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
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
                  value="New Contact Form Submission"
                />

                <input
                  type="hidden"
                  name="redirect"
                  value="https://rameshlawassociates.netlify.app/thankyou"
                />

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border px-4 py-3 rounded"
                />

                {/* PHONE */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border px-4 py-3 rounded"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full border px-4 py-3 rounded"
                />

                {/* MESSAGE */}
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe your legal issue"
                  required
                  className="w-full border px-4 py-3 rounded"
                />

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-4 rounded font-bold"
                >
                  Submit Consultation Request
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
