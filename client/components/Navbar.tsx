import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL = "/logo-light.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Legal Services", href: "/legal-services" },
    { label: "FAQ", href: "/faq" },
    { label: "Office", href: "/office-location" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16">
              <img
                src={LOGO_URL}
                alt="Ramesh and Ramesh Law Associates"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-lg md:text-2xl font-bold text-primary">
                Ramesh & Ramesh
              </div>

              <div className="text-xs md:text-sm text-accent font-semibold tracking-wide uppercase">
                {"  "}Law Associates
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition whitespace-nowrap",
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center">
            <Link
              to="/consultation"
              className="bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition shadow-sm whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-muted rounded transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-border pb-4 bg-white">
            <div className="flex flex-col gap-2 pt-3">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-semibold rounded transition",
                    location.pathname === link.href
                      ? "text-accent bg-muted"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/consultation"
                className="mx-4 bg-accent text-accent-foreground px-4 py-3 rounded font-semibold text-center hover:opacity-90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
