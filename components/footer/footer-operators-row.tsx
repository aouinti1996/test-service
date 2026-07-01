import { FOOTER_OPERATORS } from "./footer-config";
import { FooterOperatorPill } from "./footer-operator-pill";
import { FooterSocialLinks } from "./footer-social-links";

export function FooterOperatorsRow() {
  return (
    <div className="flex w-full flex-col gap-6 border-y border-border-subtle bg-bg-elevated p-4 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:rounded-xl xl:px-20 xl:py-8">
      <div className="flex flex-col gap-2 xl:gap-4">
        <p className="text-body-small-medium text-text-heading xl:whitespace-nowrap">
          We Support All Major Operators
        </p>
        <div className="flex flex-wrap content-start items-start gap-2">
          {FOOTER_OPERATORS.map((operator) => (
            <FooterOperatorPill key={operator.name} {...operator} />
          ))}
        </div>
      </div>

      <FooterSocialLinks />
    </div>
  );
}
