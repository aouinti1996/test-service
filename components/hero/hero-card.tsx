import { Navbar } from "@/components/navbar";
import { HeroContent } from "./hero-content";
import { HeroGradient } from "./hero-gradient";
import { HeroPhone } from "./hero-phone";

export function HeroCard() {
  return (
    <div className="relative flex flex-col overflow-visible bg-transparent pb-0 xl:min-h-0 xl:flex-1 xl:overflow-hidden xl:rounded-[24px] xl:border xl:border-border-subtle xl:bg-bg-elevated xl:pb-20">
      <HeroGradient />
      <div className="hidden xl:block">
        <HeroPhone />
      </div>

      <div className="relative z-10 flex flex-col xl:min-h-0 xl:flex-1 xl:gap-[120px]">
        <div className="hidden shrink-0 xl:block">
          <Navbar variant="embedded" activeHref="/" className="shrink-0" />
        </div>

        <div className="xl:px-20">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}
