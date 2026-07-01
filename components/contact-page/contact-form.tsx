"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { cn } from "@/lib/utils";
import { CONTACT_FORM_ROWS } from "./contact-page-config";

export function ContactForm() {
  return (
    <form
      className="flex w-full flex-col gap-4 xl:gap-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-6 xl:gap-6">
        {CONTACT_FORM_ROWS.map((row) => (
          <div
            key={row.map((field) => field.id).join("-")}
            className={cn(
              row.length === 1 && row[0]?.fullWidth
                ? "w-full"
                : "grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-5",
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
                  className="[&_textarea]:min-h-[96px] xl:[&_textarea]:min-h-[72px]"
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

      <Button type="submit" className="w-full whitespace-nowrap">
        Send Message
      </Button>
    </form>
  );
}
