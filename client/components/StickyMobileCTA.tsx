import { Phone, MessageCircle } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-sm border-t border-border shadow-lg z-50">
      <div className="flex gap-3 p-3">

        {/* Call Now */}
        <a
          href="tel:+919902877471"
          className="flex-1 bg-primary text-primary-foreground py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition text-sm shadow-sm"
        >
          <Phone size={18} />
          Call Now
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919902877471"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-accent text-accent-foreground py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition text-sm shadow-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {/* Optional Trust Strip */}
      <div className="text-center text-[11px] text-muted-foreground pb-2 px-3">
        21+ Years of Trusted Legal Expertise Across Karnataka
      </div>
    </div>
  );
}
