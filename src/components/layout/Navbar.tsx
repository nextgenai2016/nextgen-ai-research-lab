"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { layoutShell } from "@/components/layout/shell";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";

/** Short label for the bar; full name stays in footer / metadata. */
const brandShort = "NextGen AI Research Lab";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinks({
  pathname,
  variant,
  onNavigate,
}: {
  pathname: string;
  variant: "inline" | "stacked";
  onNavigate?: () => void;
}) {
  return (
    <ul
      className={
        variant === "inline"
          ? "flex items-center gap-8 min-[1920px]:gap-10"
          : "flex flex-col gap-0.5"
      }
    >
      {mainNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        const base =
          variant === "inline"
            ? "font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-colors"
            : "block rounded-lg px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors";
        const state = active
          ? "text-sky-800"
          : "text-zinc-700 hover:bg-zinc-100 hover:text-sky-800";
        return (
          <li key={item.href}>
            <Link href={item.href} onClick={onNavigate} className={`${base} ${state}`}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur">
      <div className={layoutShell}>
        <div className="flex h-16 items-center justify-between gap-6 min-[1920px]:h-20">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="min-w-0 shrink-0 truncate font-serif text-base font-semibold tracking-tight text-sky-900 transition-opacity hover:opacity-75 min-[1920px]:text-lg"
          >
            {brandShort}
          </Link>

          <nav className="hidden items-center justify-end lg:flex" aria-label="Main">
            <NavLinks pathname={pathname} variant="inline" />
          </nav>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 p-2.5 text-zinc-700 transition hover:bg-zinc-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-zinc-700/20 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            className="relative z-10 mx-4 mt-24 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-900/10 sm:mt-28"
            aria-label="Main mobile"
          >
            <NavLinks pathname={pathname} variant="stacked" onNavigate={closeMenu} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
