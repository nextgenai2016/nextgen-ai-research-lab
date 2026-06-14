import Link from "next/link";
import { layoutShell } from "@/components/layout/shell";
import { contact } from "@/data/contact";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";

const footerNav = mainNav.filter((item) => item.href !== "/");

const emailLinkClass =
  "text-sm font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-600";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-sky-100 bg-sky-50/70">
      <div className={`${layoutShell} py-8 min-[1920px]:py-10`}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start lg:gap-12">
          <div className="max-w-sm">
            <p className="font-serif text-lg font-semibold tracking-tight text-sky-900">
              {site.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Explore
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 lg:max-w-sm">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-700 transition hover:text-sky-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <address className="min-w-0 not-italic lg:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>
            <a href={`mailto:${contact.email}`} className={`mt-3 block ${emailLinkClass}`}>
              {contact.email}
            </a>
            <div className="mt-3 space-y-0.5 text-sm leading-relaxed text-zinc-600">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-sky-100">
        <div className={`${layoutShell} py-4 text-zinc-500`}>
          <p className="text-xs">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
