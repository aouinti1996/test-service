import {
  CoverageCommunitiesSection,
  CoverageGlanceSection,
  CoverageHeroSection,
  CoverageMattersSection,
  CoverageServicesSection,
} from "@/components/coverage-page";
import { OperatorsSection } from "@/components/operators";

export default function CoveragePage() {
  return (
    <>
      <CoverageHeroSection />
      <CoverageGlanceSection />
      <OperatorsSection />
      <CoverageServicesSection />
      <CoverageCommunitiesSection />
      <CoverageMattersSection />
    </>
  );
}
