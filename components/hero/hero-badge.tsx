import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/icon";

export function HeroBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-2 py-1 xl:px-4 xl:py-2">
      <Icon icon={ShieldCheck} variant="primary" size={20} strokeWidth={2} />
      <span className="text-[11px] font-medium leading-[14px] text-primary-subtle-text xl:whitespace-nowrap xl:text-body-small-medium xl:font-semibold">
        ATRA-Approved · Official Telecom Distributor
      </span>
    </div>
  );
}
