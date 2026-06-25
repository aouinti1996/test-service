"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { DISTRIBUTOR_FORM_ROWS } from "./distributor-page-config";

export function DistributorRegistrationForm() {
  return (
    <form
      className="flex w-full max-w-[1000px] flex-col gap-12"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-6">
        {DISTRIBUTOR_FORM_ROWS.map((row) => (
          <div
            key={row.map((field) => field.id).join("-")}
            className={
              row.length === 1 && row[0]?.fullWidth
                ? "w-full"
                : "grid grid-cols-2 gap-6"
            }
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

      <div className="flex flex-col items-center gap-4">
        <Button type="submit">Submit Application</Button>
        <p className="text-center text-caption-large-regular text-text-secondary">
          By submitting this form you agree to our Distributor Terms &amp;
          Conditions.
        </p>
      </div>
    </form>
  );
}
