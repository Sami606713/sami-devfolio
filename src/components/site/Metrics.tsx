import { Reveal } from "./Reveal";

const items = [
  { value: "2+", label: "years shipping production AI" },
  { value: "7", label: "agents under one coordinator" },
  { value: "40+", label: "live tool integrations" },
  { value: "14+", label: "langctl releases on PyPI" },
];

export function Metrics() {
  return (
    <div className="grid grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-4">
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={i * 0.05}
          className="bg-[var(--bg-2)] px-5 py-8 md:px-6"
        >
          <p className="font-mono text-3xl tracking-tight md:text-4xl">{item.value}</p>
          <p className="mt-2 text-sm leading-snug text-[var(--muted)]">{item.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
