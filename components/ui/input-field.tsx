import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputFieldBaseProps = {
  label: string;
  className?: string;
};

export type InputFieldProps = InputFieldBaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    multiline?: false;
  };

export type TextareaFieldProps = InputFieldBaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    multiline: true;
  };

export function InputField({
  label,
  className,
  id,
  multiline,
  ...props
}: InputFieldProps | TextareaFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const controlClassName =
    "w-full rounded-lg border border-border-subtle bg-bg-input px-4 text-body-small-medium text-text-heading outline-none placeholder:text-text-disabled focus:border-primary-default";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={fieldId} className="text-body-small-bold text-text-heading">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={fieldId}
          className={cn(controlClassName, "min-h-[72px] resize-none py-3")}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          className={cn(controlClassName, "h-11")}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
