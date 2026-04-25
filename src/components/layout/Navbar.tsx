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
          ? "flex items-center gap-7 min-[1920px]:gap-9"
          : "flex flex-col gap-0.5"
      }
    >
      {mainNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        const base =
          variant === "inline"
            ? "text-sm font-medium transition-colors"
            : "block rounded-lg px-4 py-3.5 text-base font-medium transition-colors";
        const state = active
          ? "text-zinc-950"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950";
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
    <header className="sticky top-0 z-50 bg-white/80 pt-4 pb-3 backdrop-blur sm:pt-5 sm:pb-4">
      <div className={layoutShell}>
        <div className="flex justify-center">
          <div
            className={`flex w-full max-w-5xl items-center gap-3 rounded-full border border-zinc-200 bg-white/95 py-2.5 pl-3 pr-2 shadow-sm backdrop-blur-xl sm:gap-4 sm:py-3 sm:pl-5 sm:pr-3 min-[1920px]:max-w-6xl`}
          >
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="min-w-0 shrink-0 truncate rounded-full py-0.5 pr-1 font-medium tracking-tight text-zinc-950 text-sm transition-opacity hover:opacity-80 sm:text-base min-[1920px]:text-lg"
            >
              {brandShort}
            </Link>

            <nav
              className="ml-auto hidden flex-1 items-center justify-end lg:flex"
              aria-label="Main"
            >
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
