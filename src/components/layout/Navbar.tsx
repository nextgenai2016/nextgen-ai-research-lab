"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { layoutShell } from "@/components/layout/shell";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";

const brandShort = "Texas Christian University";

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
            ? "font-mono text-xs font-semibold uppercase tracking-[0.18em] transition-colors min-[1920px]:text-sm"
            : "block rounded-lg px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors";
        const state = active
          ? "text-sky-800"
          : "text-zinc-700 hover:bg-zinc-100 hover:text-sky-800";

        if (item.children && variant === "inline") {
          return (
            <li key={item.href} className="group relative">
              <Link href={item.href} onClick={onNavigate} className={`${base} ${state}`}>
                {item.label}
              </Link>
              <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-56 rounded-md border border-sky-100 bg-white p-2 shadow-lg shadow-sky-950/10">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-sky-50 hover:text-sky-800"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          );
        }

        if (item.children && variant === "stacked") {
          return (
            <li key={item.href}>
              <Link href={item.href} onClick={onNavigate} className={`${base} ${state}`}>
                {item.label}
              </Link>
              <ul className="ml-4 border-l border-zinc-200 pl-3">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={onNavigate}
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-sky-800"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

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
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-sky-50/95 shadow-sm shadow-sky-950/5 backdrop-blur">
      <div className={layoutShell}>
        <div className="flex h-16 items-center justify-between gap-6 min-[1920px]:h-20">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="flex min-w-0 shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
          >
            <Image
              src="/Lab logo.png"
              alt=""
              width={120}
              height={66}
              priority
              className="h-10 w-auto shrink-0 object-contain min-[1920px]:h-12"
            />
            <span className="truncate font-serif text-base font-semibold tracking-tight text-sky-900 min-[1920px]:text-lg">
              {brandShort}
            </span>
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
