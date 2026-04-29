import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <TopContactBar />
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-32">
        <div className="text-center px-4">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-4">
            404
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Oops! Page not found
          </p>
          <p className="text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist. This might be a new
            section we're building. Please let us know if you need help with
            anything.
          </p>
          <a
            href="/"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Return to Home
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
