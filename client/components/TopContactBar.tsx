```tsx id="x7pq2m"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground py-3 px-4 border-b border-white/10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-sm">
          
          {/* Left Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
            
            {/* Primary Phone */}
            <a
              href="tel:+919902877471"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <Phone size={14} />
              <span>+91 9902877471</span>
            </a>

            {/* Secondary Phone */}
            <a
              href="tel:+919148201637"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <Phone size={14} />
              <span>+91 9148201637</span>
            </a>

            {/* Email */}
            <a
              href="mailto:kunaase@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <Mail size={14} />
              <span>kunaase@gmail.com</span>
            </a>

            {/* WhatsApp */}
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

          {/* Right Section */}
          <div className="flex items-center gap-2 text-center lg:text-right">
            <MapPin size={14} className="flex-shrink-0" />
            <span>
              Mahalakshmi Puram, Bangalore Office | Serving Clients Across Karnataka
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```
