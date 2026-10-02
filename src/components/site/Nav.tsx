"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { nav, person } from "@/content/site";
import { layers } from "./layers";
import { shell } from "./styles";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header
      className="fixed inset-x-0 top-0 border-b border-[var(--line)] bg-[var(--bg)]"
      style={{ zIndex: layers.nav }}
    >
      <div className={`${shell} flex h-16 items-center justify-between gap-4`}>
        <Link href="/" className="shrink-0 text-sm font-medium tracking-tight">
          {person.name}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm ${active ? "text-[var(--text)]" : "text-[var(--muted)]"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className={`${shell} flex flex-col gap-1 border-t border-[var(--line)] py-3 lg:hidden`} aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-base">
              {item.label}
            </Link>
          ))}
          <a className="py-2 text-base" href={`mailto:${person.email}`}>
            Email
          </a>
        </nav>
      ) : null}
    </header>
  );
}
