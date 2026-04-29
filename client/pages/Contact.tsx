import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="w-full">
      <TopContactBar />
      <Navbar />

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 mt-4">
            Get in touch with our legal experts
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            This page is being developed. Please continue interacting with the app
            to build out this section. You can ask me to add a detailed contact
            form, office hours, team information, or any other contact-related
            content.
          </p>
          <a
            href="/"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Back to Home
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
