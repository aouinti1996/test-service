"use client";

import { StaggerItem, StaggerReveal } from "@/components/motion";
import { OperatorCard } from "./operator-card";
import { OPERATOR_ROWS } from "./operators-config";

export function OperatorsGrid() {
  return (
    <StaggerReveal className="flex w-full flex-col gap-4">
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
  );
}
