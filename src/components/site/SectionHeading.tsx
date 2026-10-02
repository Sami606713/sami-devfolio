export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs text-[var(--accent)]">{number}</p>
      <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-[46ch] text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
