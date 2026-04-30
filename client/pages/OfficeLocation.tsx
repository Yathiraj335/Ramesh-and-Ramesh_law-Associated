import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function OfficeLocation() {
  return (
    <div className="w-full pb-24 md:pb-0">
      <TopContactBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Office Location
          </h1>

          <p className="text-lg text-primary-foreground/80 mt-4">
            Visit our Bangalore office or connect with us for trusted legal
            support across Karnataka
          </p>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
              Visit Our Office
            </h2>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1" size={24} />

                <div>
                  <h3 className="font-bold text-primary mb-2">
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

                  {/* Get Directions Button */}
                  <a
                    href="https://google.com/maps?q=Ramesh+%26+Ramesh+Law+Associates,+119,+2nd+Stage,+6th+Main+Rd,+near+Geleyarabalaga+Circle,+2nd+Phase,+Mahalakshmipuram+Layout,+Bengaluru,+Karnataka+560086&ftid=0x3bae3d9f1bf12f29:0x695bb6f031d0caec&entry=gps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold hover:opacity-90 transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1" size={24} />

                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Contact Numbers
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    +91 9902877471
                    <br />
                    +91 9148201637
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={24} />

                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Email
                  </h3>

                  <p className="text-muted-foreground">
                    kunaase@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="text-accent mt-1" size={24} />

                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Consultation Hours
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Monday – Saturday
                    <br />
                    By Appointment / Direct Consultation
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div className="pt-4">
                <p className="text-accent font-semibold text-lg">
                  Serving Clients Across Karnataka
                </p>
              </div>

            </div>
          </div>

          {/* Right Side - Exact Google Map */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-border h-full min-h-[420px]">
              <iframe
                title="Ramesh and Ramesh Law Associates Office Location"
                src="https://www.google.com/maps?q=13.0059731,77.5414572&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4 text-center">

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Visit Ramesh & Ramesh Law Associates?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            With over 21 years of trusted legal excellence, our office provides
            strategic consultation, legal representation, documentation,
            registration support, and practical legal solutions for clients
            across Karnataka.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Legal Guidance?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Visit us, call us, or book a consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:+919902877471"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition"
            >
              Call Now
            </a>

            <a
              href="/consultation"
              className="border-2 border-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition"
            >
              Book Consultation
            </a>

          </div>

        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
