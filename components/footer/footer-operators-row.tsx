import { FOOTER_OPERATORS } from "./footer-config";
import { FooterOperatorPill } from "./footer-operator-pill";
import { FooterSocialLinks } from "./footer-social-links";

export function FooterOperatorsRow() {
  return (
    <div className="flex w-full items-center justify-between border-y border-border-subtle bg-bg-elevated px-20 py-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <p className="whitespace-nowrap text-body-small-medium text-text-heading">
          We Support All Major Operators
        </p>
        <div className="flex flex-wrap items-start gap-2">
          {FOOTER_OPERATORS.map((operator) => (
            <FooterOperatorPill key={operator.name} {...operator} />
          ))}
        </div>
      </div>

      <FooterSocialLinks />
    </div>
  );
}
