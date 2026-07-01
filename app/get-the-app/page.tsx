import { CtaSection } from "@/components/cta";
import {
  GetTheAppFeaturesSection,
  GetTheAppHeroSection,
} from "@/components/get-the-app-page";

export default function GetTheAppPage() {
  return (
    <>
      <GetTheAppHeroSection />
      <GetTheAppFeaturesSection />
      <CtaSection containerClassName="pt-10" />
    </>
  );
}
