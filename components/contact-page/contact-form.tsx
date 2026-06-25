"use client";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { CONTACT_FORM_ROWS } from "./contact-page-config";

export function ContactForm() {
  return (
    <form
      className="flex w-full flex-col gap-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-6">
        {CONTACT_FORM_ROWS.map((row) => (
          <div
            key={row.map((field) => field.id).join("-")}
            className={
              row.length === 1 && row[0]?.fullWidth
                ? "w-full"
                : "grid grid-cols-2 gap-5"
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

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
