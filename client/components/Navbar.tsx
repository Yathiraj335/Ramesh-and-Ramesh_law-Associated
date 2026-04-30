import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F57134794e3d74be2b861b196562dad82%2Fddbc1a054e4d4d8599b546f14139e94c?format=webp&width=800&height=1200";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.practice-areas"), href: "/#practice-areas" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.faq"), href: "/#faq" },
    { label: t("nav.contact"), href: "/contact" },
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
                Law Associates
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-semibold transition",
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground hover:text-accent transition"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5">

            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-sm border-l border-border pl-4">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "font-semibold transition",
                  language === "en"
                    ? "text-accent"
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                EN
              </button>

              <span className="text-muted-foreground">|</span>

              <button
                onClick={() => setLanguage("kn")}
                className={cn(
                  "font-semibold transition",
                  language === "kn"
                    ? "text-accent"
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                ಕನ್ನಡ
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="/#consultation"
              className="bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition shadow-sm"
            >
              {t("nav.book-consultation")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
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
          <div className="lg:hidden border-t border-border pb-4 bg-white">
            <div className="flex flex-col gap-2 pt-3">

              {navLinks.map((link) =>
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}

              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-3 px-4 py-3 border-t border-border mt-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "font-semibold transition",
                    language === "en"
                      ? "text-accent"
                      : "text-muted-foreground"
                  )}
                >
                  EN
                </button>

                <span className="text-muted-foreground">|</span>

                <button
                  onClick={() => setLanguage("kn")}
                  className={cn(
                    "font-semibold transition",
                    language === "kn"
                      ? "text-accent"
                      : "text-muted-foreground"
                  )}
                >
                  ಕನ್ನಡ
                </button>
              </div>

              {/* Mobile CTA */}
              <a
                href="/#consultation"
                className="mx-4 bg-accent text-accent-foreground px-4 py-3 rounded font-semibold text-center hover:opacity-90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.book-consultation")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
