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
    <div className="flex w-fit flex-col gap-2 self-start rounded-xl border border-gray-200 bg-bg-elevated p-4">
      <p className="whitespace-nowrap text-body-small-bold text-text-label">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <Icon icon={ShieldCheck} variant="primary" size={20} strokeWidth={2} />
        <p className="whitespace-nowrap text-body-large-bold text-text-body">
          {license}
        </p>
      </div>
    </div>
  );
}
