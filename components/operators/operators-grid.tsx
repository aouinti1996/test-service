"use client";

import { StaggerItem, StaggerReveal } from "@/components/motion";
import { OperatorCard } from "./operator-card";
import { OPERATOR_ROWS, OPERATOR_ROWS_MOBILE } from "./operators-config";

export function OperatorsGrid() {
  return (
    <>
      <StaggerReveal className="flex w-full flex-col gap-2 xl:hidden">
        {OPERATOR_ROWS_MOBILE.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full items-start gap-2">
            {row.map((operator) => (
              <StaggerItem key={operator.name} className="min-w-0 flex-1">
                <OperatorCard {...operator} />
              </StaggerItem>
            ))}
          </div>
        ))}
      </StaggerReveal>

      <StaggerReveal className="hidden w-full flex-col gap-4 xl:flex">
        {OPERATOR_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full items-start gap-4">
            {row.map((operator) => (
              <StaggerItem key={operator.name} className="min-w-0 flex-1">
                <OperatorCard {...operator} />
              </StaggerItem>
            ))}
          </div>
        ))}
      </StaggerReveal>
    </>
  );
}
