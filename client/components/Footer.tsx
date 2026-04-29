import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F57134794e3d74be2b861b196562dad82%2Fddbc1a054e4d4d8599b546f14139e94c?format=webp&width=800&height=1200";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <img
                  src={LOGO_URL}
                  alt="Ramesh and Ramesh Law Associates"
                  className="w-full h-full object-contain invert"
                />
              </div>
              <div>
                <div className="font-serif text-lg font-bold">
                  Ramesh & Ramesh
                </div>
                <div className="text-xs text-primary-foreground/80">
                  Law Associates
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 italic mb-4">
              "Justice. Integrity. Expertise."
            </p>
            <p className="text-sm text-primary-foreground/70">
              21+ Years of Trusted Legal Expertise
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-accent transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-accent transition">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Civil Cases</li>
              <li>Criminal Cases</li>
              <li>Property Cases</li>
              <li>Family Law</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@rameshlaw.com"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Mail size={16} />
                <span>info@rameshlaw.com</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Now</span>
              </a>
              <div className="flex items-center gap-2 mt-4">
                <MapPin size={16} />
                <div className="text-sm">
                  <div>Mahalakshmi Puram,</div>
                  <div>Bangalore, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              &copy; {currentYear} Ramesh and Ramesh Law Associates. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-accent transition">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-accent transition">
                Terms of Service
              </a>
              <a href="#disclaimer" className="hover:text-accent transition">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
