import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground py-2 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-6 items-center">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="mailto:kunaase@gmail.com"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <Mail size={14} />
              <span>kunaase@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Mahalakshmi Puram, Bangalore</span>
          </div>
        </div>
      </div>
    </div>
  );
}
