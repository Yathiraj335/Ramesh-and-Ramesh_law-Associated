import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import PracticeAreas from "./pages/PracticeAreas";
import LegalServices from "./pages/LegalServices";
import FAQ from "./pages/FAQ";
import OfficeLocation from "./pages/OfficeLocation";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>

              {/* Main Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Conversion */}
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/thank-you" element={<ThankYou />} />

              {/* Practice & Services */}
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/legal-services" element={<LegalServices />} />

              {/* Trust */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/office-location" element={<OfficeLocation />} />

              {/* Legal Compliance */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/disclaimer" element={<Disclaimer />} />

              {/* Catch-All */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </BrowserRouter>

        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}
