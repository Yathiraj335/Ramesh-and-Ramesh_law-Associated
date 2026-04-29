import { Phone, MessageCircle } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-border z-40">
      <div className="flex gap-2 p-3">
        <a
          href="tel:+919876543210"
          className="flex-1 bg-primary text-primary-foreground py-3 rounded font-medium flex items-center justify-center gap-2 hover:opacity-90 transition text-sm"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-accent text-accent-foreground py-3 rounded font-medium flex items-center justify-center gap-2 hover:opacity-90 transition text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
