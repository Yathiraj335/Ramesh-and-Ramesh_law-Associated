import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F57134794e3d74be2b861b196562dad82%2Fddbc1a054e4d4d8599b546f14139e94c?format=webp&width=800&height=1200";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Practice Areas", href: "#practice-areas" },
    { label: "Legal Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14">
              <img
                src={LOGO_URL}
                alt="Ramesh and Ramesh Law Associates"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-lg md:text-xl font-bold text-primary">
                Ramesh & Ramesh
              </div>
              <div className="text-xs md:text-sm text-accent font-medium">
                Law Associates
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - Language toggle + Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm border-l border-border pl-4">
              <button className="text-foreground font-medium hover:text-accent transition">
                EN
              </button>
              <span className="text-muted-foreground">|</span>
              <button className="text-muted-foreground hover:text-accent transition">
                KN
              </button>
            </div>
            <a
              href="#consultation"
              className="bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:opacity-90 transition"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-muted rounded transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border pb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-4 py-2 text-sm border-t border-border mt-2">
                <button className="text-foreground font-medium hover:text-accent transition">
                  EN
                </button>
                <span className="text-muted-foreground">|</span>
                <button className="text-muted-foreground hover:text-accent transition">
                  KN
                </button>
              </div>
              <a
                href="#consultation"
                className="mx-4 bg-accent text-accent-foreground px-4 py-2 rounded font-medium text-center hover:opacity-90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
