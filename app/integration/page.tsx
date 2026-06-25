import {
  IntegrationCtaSection,
  IntegrationHeroSection,
  IntegrationHowItWorksSection,
  IntegrationInfrastructureSection,
  IntegrationOptionsSection,
  IntegrationUseCasesSection,
} from "@/components/integration-page";

export default function IntegrationPage() {
  return (
    <>
      <IntegrationHeroSection />
      <IntegrationInfrastructureSection />
      <IntegrationHowItWorksSection />
      <IntegrationOptionsSection />
      <IntegrationUseCasesSection />
      <IntegrationCtaSection />
    </>
  );
}
