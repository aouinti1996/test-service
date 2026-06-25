import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/icon";

export function HeroBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
      <Icon icon={ShieldCheck} variant="primary" size={20} strokeWidth={2} />
      <span className="whitespace-nowrap text-body-small-medium font-semibold text-primary-subtle-text">
        ATRA-Approved · Official Telecom Distributor
      </span>
    </div>
  );
}
