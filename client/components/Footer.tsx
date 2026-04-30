import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F57134794e3d74be2b861b196562dad82%2Fddbc1a054e4d4d8599b546f14139e94c?format=webp&width=800&height=1200";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14">
                <img
                  src={LOGO_URL}
                  alt="Ramesh and Ramesh Law Associates"
                  className="w-full h-full object-contain invert brightness-200"
                />
              </div>

              <div>
                <div className="font-serif text-xl font-bold leading-tight">
                  Ramesh & Ramesh
                </div>

                <div className="text-sm text-accent font-semibold uppercase tracking-wide">
                  Law Associates
                </div>
              </div>
            </Link>

            <p className="text-sm italic text-primary-foreground/90 mb-4">
              Justice. Integrity. Expertise.
            </p>

            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              Serving clients across Karnataka with over 21 years of trusted
              legal excellence in civil, criminal, property, family, cyber law,
              legal documentation, legal opinion, and registration services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <Link to="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/practice-areas"
                  className="hover:text-accent transition"
                >
                  Practice Areas
                </Link>
              </li>

              <li>
                <Link
                  to="/legal-services"
                  className="hover:text-accent transition"
                >
                  Legal Services
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-accent transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/office-location"
                  className="hover:text-accent transition"
                >
                  Office Location
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-accent transition">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/consultation"
                  className="hover:text-accent transition font-semibold text-accent"
                >
                  Book Consultation
                </Link>
              </li>

            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-5">
              Legal Services
            </h4>

            <ul className="space-y-3 text-sm text-primary-foreground/85">
              <li>Civil Cases</li>
              <li>Criminal Cases</li>
              <li>Property Cases</li>
              <li>Family Law</li>
              <li>Cyber Law</li>
              <li>Documentation</li>
              <li>Legal Opinion</li>
              <li>Family Consultation</li>
              <li>Document Registration</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-5">
              Get In Touch
            </h4>

            <div className="space-y-4 text-sm">

              <a
                href="tel:+919902877471"
                className="flex items-center gap-3 hover:text-accent transition"
              >
                <Phone size={16} />
                <span>+91 9902877471</span>
              </a>

              <a
                href="tel:+919148201637"
                className="flex items-center gap-3 hover:text-accent transition"
              >
                <Phone size={16} />
                <span>+91 9148201637</span>
              </a>

              <a
                href="mailto:kunaase@gmail.com"
                className="flex items-center gap-3 hover:text-accent transition break-all"
              >
                <Mail size={16} />
                <span>kunaase@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919902877471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Consultation</span>
              </a>

              <a
                href="https://www.google.com/maps/place/Ramesh+%26+Ramesh+Law+Associates/@13.0059731,77.5414572,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 pt-2 hover:text-accent transition"
              >
                <MapPin size={16} className="mt-1 flex-shrink-0" />

                <div className="text-sm text-primary-foreground/85 leading-relaxed">
                  <div>
                    No. 119, 2nd Stage, 6th Main Rd,
                  </div>

                  <div>
                    Near Geleyarabalaga Circle,
                  </div>

                  <div>
                    2nd Phase, Mahalakshmipuram Layout,
                  </div>

                  <div>
                    Bengaluru, Karnataka - 560086
                  </div>

                  <div className="mt-1 font-medium text-accent">
                    Serving Clients Across Karnataka
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">

            <p className="text-center lg:text-left">
              © {currentYear} Ramesh & Ramesh Law Associates. All rights
              reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5">

              <Link
                to="/privacy-policy"
                className="hover:text-accent transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-of-service"
                className="hover:text-accent transition"
              >
                Terms of Service
              </Link>

              <Link
                to="/disclaimer"
                className="hover:text-accent transition"
              >
                Disclaimer
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
