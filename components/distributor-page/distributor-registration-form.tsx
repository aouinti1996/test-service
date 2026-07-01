"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { cn } from "@/lib/utils";
import { DISTRIBUTOR_FORM_ROWS } from "./distributor-page-config";

export function DistributorRegistrationForm() {
  return (
    <form
      className="flex w-full max-w-[1000px] flex-col gap-8 xl:gap-12"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-4 xl:gap-6">
        {DISTRIBUTOR_FORM_ROWS.map((row) => (
          <div
            key={row.map((field) => field.id).join("-")}
            className={cn(
              row.length === 1 && row[0]?.fullWidth
                ? "w-full"
                : "grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6",
            )}
          >
            {row.map((field) =>
              field.fullWidth ? (
                <InputField
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  name={field.id}
                  multiline
                />
              ) : (
                <InputField
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  name={field.id}
                  type={field.type ?? "text"}
                />
              ),
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-stretch gap-4 xl:items-center">
        <Button type="submit" className="w-full xl:w-auto">
          Submit Application
        </Button>
        <p className="text-center text-xs leading-4 text-text-secondary xl:text-caption-large-regular">
          By submitting this form you agree to our Distributor Terms &amp;
          Conditions.
        </p>
      </div>
    </form>
  );
}
