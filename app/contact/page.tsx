import {
  ContactHeroSection,
  ContactMessageSection,
} from "@/components/contact-page";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar activeHref="/contact" />
      <ContactHeroSection />
      <ContactMessageSection />
    </>
  );
}
