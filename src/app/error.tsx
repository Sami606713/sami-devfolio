"use client";

import Link from "next/link";
import { useEffect } from "react";
import { buttonPrimary, buttonQuiet, shell } from "@/components/site/styles";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={`${shell} pt-28 pb-24`}>
      <h1 className="text-4xl font-medium tracking-tight">This page failed to load.</h1>
      <p className="mt-4 max-w-[42ch] text-[var(--muted)]">The section did not render. You can retry, or go home.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" className={buttonPrimary} onClick={reset}>
          Try again
        </button>
        <Link className={buttonQuiet} href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
