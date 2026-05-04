import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground py-3 px-4 border-b border-white/10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-sm">

          {/* Left Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">

            <a
              href="tel:+919902877471"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <Phone size={14} />
              <span>+91 9902877471</span>
            </a>

            <a
              href="tel:+919148201637"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <Phone size={14} />
              <span>+91 9148201637</span>
            </a>

            <a
              href="mailto:kunaase@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <Mail size={14} />
              <span>kunaase@gmail.com</span>
            </a>

            <a
              href="https://wa.me/919902877471"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Consultation</span>
            </a>

          </div>

          {/* Right Section (FIXED + CLICKABLE MAP) */}
          <div className="flex items-start gap-2 text-left max-w-sm">

            <MapPin size={14} className="mt-[2px] flex-shrink-0" />

            <a
              href="https://google.com/maps?q=13.0059731,77.5414572"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-snug hover:text-accent transition"
            >
              Mahalakshmi Puram, Bangalore Office <br />
              Serving Clients Across Karnataka
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}
