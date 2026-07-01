import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/icon";

export type RegulatoryInfoCardProps = {
  label?: string;
  license: string;
};

export function RegulatoryInfoCard({
  label = "Regulatory Information",
  license,
}: RegulatoryInfoCardProps) {
  return (
    <div className="flex w-fit flex-col gap-2 self-start rounded-xl border border-[#e5e7eb] bg-white p-4">
      <p className="text-xs font-bold leading-4 text-text-label xl:text-body-small-bold">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <Icon icon={ShieldCheck} variant="primary" size={20} strokeWidth={2} />
        <p className="text-sm font-bold leading-5 text-text-body xl:text-body-large-bold">
          {license}
        </p>
      </div>
    </div>
  );
}
