import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

// Store root in window to prevent duplicate createRoot calls during HMR
declare global {
  interface Window {
    __REACT_APP_ROOT__?: Root;
  }
}

function renderApp() {
  const container = document.getElementById("root");
  if (!container) return;

  // Only create root once, reuse it for HMR updates
  if (!window.__REACT_APP_ROOT__) {
    window.__REACT_APP_ROOT__ = createRoot(container);
  }
  window.__REACT_APP_ROOT__.render(<App />);
}

// Render on initial load
if (document.readyState !== "loading") {
  renderApp();
} else {
  document.addEventListener("DOMContentLoaded", renderApp);
}

// Handle HMR updates
if (import.meta.hot) {
  import.meta.hot.accept(["./pages/Index", "./pages/About", "./pages/Contact"], () => {
    renderApp();
  });
}
