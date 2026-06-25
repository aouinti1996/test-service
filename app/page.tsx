import { AtraCertifiedSection } from "@/components/atra-certified";
import { CtaSection } from "@/components/cta";
import { HeroSection } from "@/components/hero";
import { OperatorsSection } from "@/components/operators";
import { ServicesSection } from "@/components/services";
import { TestimonialsSection } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AtraCertifiedSection />
      <OperatorsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
