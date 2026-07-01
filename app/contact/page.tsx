import {
  ContactHeroSection,
  ContactMessageSection,
} from "@/components/contact-page";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <>
      <div className="hidden xl:block">
        <Navbar activeHref="/contact" />
      </div>
      <ContactHeroSection />
      <ContactMessageSection />
    </>
  );
}
