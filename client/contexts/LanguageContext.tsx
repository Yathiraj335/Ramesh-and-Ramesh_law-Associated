import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "kn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.practice-areas": "Practice Areas",
    "nav.services": "Legal Services",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.book-consultation": "Book Consultation",
    "hero.headline": "21 Years of Trusted Legal Expertise",
    "hero.subheadline":
      "Experts in Civil, Criminal, Property, Family, Cyber Law, Documentation, and Registration Services. Your trusted legal partner in Bangalore.",
    "hero.book-consultation": "Book Consultation",
    "hero.whatsapp": "WhatsApp Now",
    "trust.years": "21+",
    "trust.years-label": "Years Experience",
    "trust.years-desc": "Serving clients with excellence and dedication",
    "trust.location": "Karnataka",
    "trust.location-label": "Based Practice",
    "trust.location-desc": "Local expertise with deep understanding of regional laws",
    "trust.areas": "9",
    "trust.areas-label": "Practice Areas",
    "trust.areas-desc": "Comprehensive legal services covering diverse matters",
    "about.title": "About Ramesh & Ramesh Law Associates",
    "about.desc1":
      "We are a full-service law firm dedicated to providing trusted legal guidance for individuals, families, and property matters. With over two decades of experience, we've helped countless clients navigate complex legal situations with confidence and peace of mind.",
    "about.desc2":
      "Our commitment to justice, integrity, and expertise forms the foundation of everything we do. Whether you're facing a civil dispute, criminal matter, family issue, or need documentation assistance, our experienced advocates are here to guide you every step of the way.",
    "practice.title": "Our Practice Areas",
    "civil-cases": "Civil Cases",
    "civil-desc":
      "Comprehensive legal representation for civil matters and disputes",
    "criminal-cases": "Criminal Cases",
    "criminal-desc":
      "Expert defense and prosecution support for criminal proceedings",
    "property-cases": "Property Cases",
    "property-desc":
      "Guidance on property disputes, transfers, and documentation",
    "family-law": "Family Law",
    "family-desc": "Sensitive handling of family matters and personal legal issues",
    "cyber-law": "Cyber Law",
    "cyber-desc": "Protection against digital crimes and cyber-related legal matters",
    "documentation": "Documentation",
    "documentation-desc": "Professional preparation and review of all legal documents",
    "legal-opinion": "Legal Opinion",
    "legal-opinion-desc": "Expert legal advice and opinion on complex matters",
    "family-consultation": "Family Consultation",
    "family-consultation-desc":
      "Confidential consultation for family-related concerns",
    "document-registration": "Document Registration",
    "document-registration-desc":
      "Assistance with official registration of important documents",
    "why-choose.title": "Why Choose Us",
    "why-choose.experience": "21+ Years Experience",
    "why-choose.experience-desc":
      "Over two decades of proven expertise in diverse legal matters",
    "why-choose.authority": "Local Authority",
    "why-choose.authority-desc":
      "Deep understanding of Bangalore legal landscape and procedures",
    "why-choose.comprehensive": "Comprehensive Services",
    "why-choose.comprehensive-desc":
      "Full-service legal practice covering all major practice areas",
    "why-choose.documentation": "Documentation Expertise",
    "why-choose.documentation-desc":
      "Meticulous attention to legal documentation and compliance",
    "why-choose.client-focused": "Client-Focused",
    "why-choose.client-focused-desc":
      "Personalized attention and transparent communication throughout",
    "why-choose.trust": "Trustworthy Partnership",
    "why-choose.trust-desc":
      "Built on principles of justice, integrity, and professional excellence",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How do I schedule a consultation?",
    "faq.a1":
      "You can book a consultation by clicking the 'Book Consultation' button on our website or calling us directly. We typically accommodate new clients within 3-5 business days.",
    "faq.q2": "What is your experience in criminal law?",
    "faq.a2":
      "We have over 21 years of experience handling criminal cases of varying complexity. Our team has successfully defended clients in numerous cases across different jurisdictions.",
    "faq.q3": "Do you provide legal opinions?",
    "faq.a3":
      "Yes, we provide comprehensive legal opinions on various matters. Our expert advocates will analyze your situation and provide detailed written opinions.",
    "faq.q4": "How are your fees structured?",
    "faq.a4":
      "Our fees are transparent and tailored to your specific needs. We offer various fee structures including hourly rates, fixed fees, and contingency arrangements for suitable cases.",
    "faq.q5": "What is your document registration process?",
    "faq.a5":
      "We handle all aspects of document registration including property deeds, agreements, and other legal documents. We ensure compliance with all legal requirements.",
    "faq.q6": "Are you available for online consultations?",
    "faq.a6":
      "Yes, we offer both in-person and online consultations to provide convenience and accessibility to our clients across different locations.",
    "cta.title": "Ready to Get Expert Legal Help?",
    "cta.desc":
      "Contact Ramesh & Ramesh Law Associates today for a confidential consultation. Our experienced advocates are ready to assist you.",
    "cta.call": "Call Us Now",
    "cta.whatsapp": "Message on WhatsApp",
    "contact.title": "Get In Touch",
    "contact.form-title": "Send us a Message",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.phone": "Your Phone",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.info-title": "Contact Information",
    "contact.phone-label": "Phone",
    "contact.email-label": "Email",
    "contact.whatsapp-label": "WhatsApp",
    "contact.location-label": "Office Location",
    "footer.tagline": "Justice. Integrity. Expertise.",
    "footer.experience": "21+ Years of Trusted Legal Expertise",
    "footer.quick-links": "Quick Links",
    "footer.services": "Our Services",
    "footer.get-in-touch": "Get In Touch",
    "footer.copyright": "All rights reserved.",
  },
  kn: {
    "nav.home": "ಮುಖ್ಯಪುಟ",
    "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav.practice-areas": "ಅಭ್ಯಾಸ ಕ್ಷೇತ್ರಗಳು",
    "nav.services": "ಕಾನೂನು ಸೇವೆಗಳು",
    "nav.faq": "ತಾಯ್ತಾರ ಪ್ರಶ್ನೆಗಳು",
    "nav.contact": "ಸಂಪರ್ಕ",
    "nav.book-consultation": "ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ",
    "hero.headline": "೨೧ ವರ್ಷಗಳ ವಿಶ್ವಾಸಾರ್ಹ ಕಾನೂನು ಕೌಶಲ್ಯ",
    "hero.subheadline":
      "ನಾಗರಿಕ, ಅಪರಾಧ, ಆಸ್ತಿ, ಕುಟುಂಬ, ಸೈಬರ್ ಕಾನೂನು, ದಾಖಲಾತಿ ಮತ್ತು ನೋಂದಣಿ ಸೇವೆಗಳಲ್ಲಿ ತಜ್ಞರು.",
    "hero.book-consultation": "ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ",
    "hero.whatsapp": "WhatsApp ನಲ್ಲಿ ಸಂಪರ್ಕ ಮಾಡಿ",
    "trust.years": "೨೧+",
    "trust.years-label": "ವರ್ಷಗಳ ಅನುಭವ",
    "trust.years-desc": "ಉತ್ತಮತೆ ಮತ್ತು ಸಮರ್ಪಣೆಯೊಂದಿಗೆ ಗ್ರಾಹಕರನ್ನು ಸೇವೆ ಮಾಡುವುದು",
    "trust.location": "ಕರ್ನಾಟಕ",
    "trust.location-label": "ಆಧಾರಿತ ಅಭ್ಯಾಸ",
    "trust.location-desc": "ಪ್ರಾದೇಶಿಕ ಕಾನೂನುಗಳ ಆಳವಾದ ತಿಳುವಳಿಕೆ",
    "trust.areas": "೯",
    "trust.areas-label": "ಅಭ್ಯಾಸ ಕ್ಷೇತ್ರಗಳು",
    "trust.areas-desc": "ವೈವಿಧ್ಯಮಯ ಸಂದರ್ಭಗಳನ್ನು ಒಳಗೊಂಡ ಸಾಮಾನ್ಯ ಕಾನೂನು ಸೇವೆಗಳು",
    "about.title": "ರಾಮೇಶ್ & ರಾಮೇಶ್ ಕಾನೂನು ಸಹಯೋಗಿಗಳ ಬಗ್ಗೆ",
    "about.desc1":
      "ನಾವು ವ್ಯಕ್ತಿಗಳು, ಕುಟುಂಬಗಳು ಮತ್ತು ಆಸ್ತಿ ಸಂದರ್ಭಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಕಾನೂನು ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಸಮರ್ಪಿತ ಸಂಪೂರ್ಣ-ಸೇವಾ ಕಾನೂನು ಸಂಸ್ಥೆಯಾಗಿದೆ.",
    "about.desc2":
      "ನ್ಯಾಯ, ಸಮಗ್ರತೆ ಮತ್ತು ದಕ್ಷತೆಗೆ ನಮ್ಮ ಪ್ರತಿಬದ್ಧತೆ ನಾವು ಮಾಡುವ ಎಲ್ಲದರ ಅಸ್ತಿತ್ವವೀ ಆಧಾರವಾಗಿದೆ.",
    "practice.title": "ನಮ್ಮ ಅಭ್ಯಾಸ ಕ್ಷೇತ್ರಗಳು",
    "civil-cases": "ನಾಗರಿಕ ಪ್ರಕರಣಗಳು",
    "civil-desc": "ನಾಗರಿಕ ಸಂದರ್ಭಗಳಿಗೆ ಸಾಮಾನ್ಯ ಕಾನೂನು ಪ್ರತಿನಿಧಿತ್ವ",
    "criminal-cases": "ಅಪರಾಧ ಪ್ರಕರಣಗಳು",
    "criminal-desc": "ಅಪರಾಧ ಕಾರ್ಯವಾಹಿಗೆ ತಜ್ಞ ರಕ್ಷಣೆ",
    "property-cases": "ಆಸ್ತಿ ಪ್ರಕರಣಗಳು",
    "property-desc": "ಆಸ್ತಿ ವಿವಾದಗಳ ಮಾರ್ಗದರ್ಶನ",
    "family-law": "ಕುಟುಂಬ ಕಾನೂನು",
    "family-desc": "ಕುಟುಂಬ ಸಂದರ್ಭಗಳ ಸುಷ್ಠು ನಿರ್ವಹಣೆ",
    "cyber-law": "ಸೈಬರ್ ಕಾನೂನು",
    "cyber-desc": "ಡಿಜಿಟಲ್ ಅಪರಾಧಗಳ ವಿರುದ್ಧ ರಕ್ಷಣೆ",
    "documentation": "ದಾಖಲಾತಿ",
    "documentation-desc": "ಕಾನೂನು ದಾಖಲೆಗಳ ಪರಿಶೀಲನೆ",
    "legal-opinion": "ಕಾನೂನು ಅಭಿಪ್ರಾಯ",
    "legal-opinion-desc": "ಸಂಕೀರ್ಣ ಸಂದರ್ಭಗಳಲ್ಲಿ ತಜ್ಞ ಕಾನೂನು ಸಲಹೆ",
    "family-consultation": "ಕುಟುಂಬ ಸಮಾಲೋಚನೆ",
    "family-consultation-desc":
      "ಕುಟುಂಬ-ಸಂಬಂಧಿತ ಕಾಳಜಿಗಳ ಗೌಪ್ಯ ಸಮಾಲೋಚನೆ",
    "document-registration": "ದಾಖಲೆ ನೋಂದಣಿ",
    "document-registration-desc": "ಮುಖ್ಯ ದಾಖಲೆಗಳ ಅಧಿಕೃತ ನೋಂದಣಿಗೆ ಸಹಾಯತೆ",
    "why-choose.title": "ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸಿ",
    "why-choose.experience": "೨೧+ ವರ್ಷಗಳ ಅನುಭವ",
    "why-choose.experience-desc":
      "ವೈವಿಧ್ಯಮಯ ಕಾನೂನು ಸಂದರ್ಭಗಳಲ್ಲಿ ಎರಡು ದಶಕದ ಪ್ರಮಾಣಿತ ದಕ್ಷತೆ",
    "why-choose.authority": "ಸ್ಥಳೀಯ ಅಧಿಕಾರ",
    "why-choose.authority-desc":
      "ಬೆಂಗಳೂರಿನ ಕಾನೂನು ಭೂದೃಶ್ಯದ ಆಳವಾದ ತಿಳುವಳಿಕೆ",
    "why-choose.comprehensive": "ವ್ಯಾಪಕ ಸೇವೆಗಳು",
    "why-choose.comprehensive-desc":
      "ಮುಖ್ಯ ಅಭ್ಯಾಸ ಕ್ಷೇತ್ರಗಳನ್ನು ಒಳಗೊಂಡ ಸಂಪೂರ್ಣ-ಸೇವಾ ಕಾನೂನು ಅಭ್ಯಾಸ",
    "why-choose.documentation": "ದಾಖಲಾತಿ ದಕ್ಷತೆ",
    "why-choose.documentation-desc":
      "ಕಾನೂನು ದಾಖಲಾತಿ ಮತ್ತು ಸಮ್ಮತಿಗೆ ವಿವರವಾದ ಗಮನ",
    "why-choose.client-focused": "ಗ್ರಾಹಕ-ಕೇಂದ್ರಿತ",
    "why-choose.client-focused-desc":
      "ವ್ಯಕ್ತಿಗತ ಗಮನ ಮತ್ತು ಪಾರದರ್ಶಕ ಸಂಪರ್ಕ",
    "why-choose.trust": "ನಿರ್ভರಣೀಯ ಸಮ್ಮತಿ",
    "why-choose.trust-desc":
      "ನ್ಯಾಯ, ಸಮಗ್ರತೆ ಮತ್ತು ಕೌಶಲ್ಯದ ನೀತಿಗಳ ಮೇಲೆ ನಿರ್ಮಿತ",
    "faq.title": "ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳಿದ ಪ್ರಶ್ನೆಗಳು",
    "faq.q1": "ನಾನು ಸಮಾಲೋಚನೆಯನ್ನು ಯೋಜಿಸುವುದು ಹೇಗೆ?",
    "faq.a1":
      "ನೀವು ನಮ್ಮ ವೆಬ್ಸೈಟ್ನಲ್ಲಿ 'ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ' ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ನಮ್ಮನ್ನು ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ.",
    "faq.q2": "ಅಪರಾಧ ಕಾನೂನಿನಲ್ಲಿ ನಿಮ್ಮ ಅನುಭವ ಏನು?",
    "faq.a2":
      "ನಾವು ಅಪರಾಧ ಪ್ರಕರಣಗಳನ್ನು ನಿರ್ವಹಿಸುವಲ್ಲಿ ೨೧ ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿದೆ.",
    "faq.q3": "ನೀವು ಕಾನೂನು ಅಭಿಪ್ರಾಯಗಳನ್ನು ನೀಡುತ್ತೀರಾ?",
    "faq.a3":
      "ಹೌದು, ನಾವು ವಿವಿಧ ಸಂದರ್ಭಗಳಲ್ಲಿ ವ್ಯಾಪಕ ಕಾನೂನು ಅಭಿಪ್ರಾಯಗಳನ್ನು ನೀಡುತ್ತೇವೆ.",
    "faq.q4": "ನಿಮ್ಮ ಫೀಗಳನ್ನು ಹೇಗೆ ರಚನೆ ಮಾಡಲಾಗುತ್ತದೆ?",
    "faq.a4":
      "ನಮ್ಮ ಫೀಗಳು ನಿರ್ದಿಷ್ಟ ಅಗತ್ಯಗಳಿಗೆ ಅನುಸ್ವರೂಪವಾಗಿರುತ್ತವೆ ಮತ್ತು ಸ್ವಚ್ಛವಾಗಿರುತ್ತವೆ.",
    "faq.q5": "ನಿಮ್ಮ ದಾಖಲೆ ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆ ಏನು?",
    "faq.a5":
      "ನಾವು ದಾಖಲೆ ನೋಂದಣಿಯ ಎಲ್ಲ ಅಂಶಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
    "faq.q6": "ನೀವು ಆನ್‌ಲೈನ್ ಸಮಾಲೋಚನೆಗಳಿಗೆ ಲಭ್ಯವಿದ್ದೀರಾ?",
    "faq.a6":
      "ಹೌದು, ನಾವು ವ್ಯಕ್ತಿಗತ ಮತ್ತು ಆನ್‌ಲೈನ್ ಸಮಾಲೋಚನೆಗಳನ್ನು ನೀಡುತ್ತೇವೆ.",
    "cta.title": "ತಜ್ಞ ಕಾನೂನು ಸಹಾಯತೆ ಪಡೆಯಲು ಸಿದ್ಧರಾ?",
    "cta.desc":
      "ರಾಮೇಶ್ & ರಾಮೇಶ್ ಕಾನೂನು ಸಹಯೋಗಿಗಳನ್ನು ಅಂತಿಮ ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕ ಮಾಡಿ.",
    "cta.call": "ಈಗ ಕರೆ ಮಾಡಿ",
    "cta.whatsapp": "WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಮಾಡಿ",
    "contact.title": "ಸಂಪರ್ಕ ಹೊಂದಿ",
    "contact.form-title": "ನಮಗೆ ಸಂದೇಶ ಮಾಡಿ",
    "contact.name": "ನಿಮ್ಮ ಹೆಸರು",
    "contact.email": "ನಿಮ್ಮ ಇಮೇಲ್",
    "contact.phone": "ನಿಮ್ಮ ಫೋನ್",
    "contact.subject": "ವಿಷಯ",
    "contact.message": "ನಿಮ್ಮ ಸಂದೇಶ",
    "contact.send": "ಸಂದೇಶ ಘಳಿಕೆ ಮಾಡಿ",
    "contact.info-title": "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    "contact.phone-label": "ಫೋನ್",
    "contact.email-label": "ಇಮೇಲ್",
    "contact.whatsapp-label": "WhatsApp",
    "contact.location-label": "ಕಚೇರಿ ಸ್ಥಳ",
    "footer.tagline": "ನ್ಯಾಯ. ಸಮಗ್ರತೆ. ದಕ್ಷತೆ.",
    "footer.experience": "೨೧+ ವರ್ಷಗಳ ವಿಶ್ವಾಸಾರ್ಹ ಕಾನೂನು ಸೇವೆ",
    "footer.quick-links": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    "footer.services": "ನಮ್ಮ ಸೇವೆಗಳು",
    "footer.get-in-touch": "ನಮಗೆ ಸಂಪರ್ಕ ಮಾಡಿ",
    "footer.copyright": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಸಂರಕ್ಷಿತ.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
