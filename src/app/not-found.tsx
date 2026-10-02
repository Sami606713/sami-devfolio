import Link from "next/link";
import { buttonPrimary, shell } from "@/components/site/styles";

export default function NotFound() {
  return (
    <div className={`${shell} pt-28 pb-24`}>
      <h1 className="text-4xl font-medium tracking-tight">Page not found.</h1>
      <p className="mt-4 text-[var(--muted)]">That address is not part of this site.</p>
      <Link className={`${buttonPrimary} mt-8`} href="/">
        Home
      </Link>
    </div>
  );
}
