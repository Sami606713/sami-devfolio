import { shell } from "@/components/site/styles";

export default function Loading() {
  return (
    <div className={`${shell} pt-24 pb-24`} aria-busy="true" aria-live="polite">
      <div className="h-12 w-56 rounded-xl bg-[var(--bg-2)]" />
      <div className="mt-6 h-6 w-full max-w-md rounded-xl bg-[var(--bg-2)]" />
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <div className="aspect-[16/10] rounded-xl bg-[var(--bg-2)]" />
        <div className="aspect-[16/10] rounded-xl bg-[var(--bg-2)]" />
      </div>
    </div>
  );
}
