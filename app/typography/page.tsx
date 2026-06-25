import { typographySections } from "@/lib/design-tokens/typography";

function StyleRow({
  token,
  font,
  size,
  lineHeight,
  preview,
  className,
  tnum,
}: {
  token: string;
  font: string;
  size: string;
  lineHeight: string;
  preview: string;
  className: string;
  tnum?: boolean;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] items-center gap-6 border-b border-border-subtle px-4 py-5 last:border-b-0">
      <div>
        <p className="text-body-small-medium text-text-heading">{token}</p>
        {tnum ? (
          <p className="mt-1 text-caption-small-medium text-primary-subtle-text">
            TNUM
          </p>
        ) : null}
      </div>
      <div className="text-body-small-regular text-text-secondary">
        <p>{font}</p>
        <p>
          {size} · {lineHeight} LH
        </p>
      </div>
      <p className={`${className} text-text-heading`}>{preview}</p>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div className="min-h-full bg-bg-surface">
      <header className="border-b border-border-subtle px-8 py-8">
        <h1 className="text-heading-h1-bold text-text-heading">
          Typography Style Guide
        </h1>
        <p className="mt-2 text-body-small-regular text-text-secondary">
          Financial &amp; Utility App · Poppins (Headings) + Roboto (Display /
          Body / Data / Caption) · 30 Styles · 4px/8px Grid
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-8 py-8">
        <div className="mb-4 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-6 px-4 text-caption-large-medium uppercase tracking-wider text-text-secondary">
          <span>Style Token</span>
          <span>Font · Weight · Size / LH</span>
          <span>Preview</span>
        </div>

        {typographySections.map((section) => (
          <section key={section.title} className="mb-10">
            <div className="mb-3 inline-flex rounded-full bg-primary-subtle-bg px-3 py-1">
              <span className="text-caption-large-bold text-primary-subtle-text">
                {section.title}
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated">
              {section.styles.map((style) => (
                <StyleRow
                  key={style.token}
                  token={style.token}
                  font={style.font}
                  size={style.size}
                  lineHeight={style.lineHeight}
                  preview={style.preview}
                  className={style.className}
                  tnum={style.tnum}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
