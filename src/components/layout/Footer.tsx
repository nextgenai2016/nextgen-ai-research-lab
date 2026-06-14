import { layoutShell } from "@/components/layout/shell";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

const emailLinkClass =
  "text-sm font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-600";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className={`${layoutShell} py-6`}>
        <div className="flex flex-col gap-4 text-sm text-zinc-600 lg:flex-row lg:items-start lg:justify-between">
          <p className="text-xs text-zinc-500">© {year} {site.name}</p>

          <address className="min-w-0 not-italic lg:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>
            <a href={`mailto:${contact.email}`} className={`mt-2 block ${emailLinkClass}`}>
              {contact.email}
            </a>
            <div className="mt-2 space-y-0.5 leading-relaxed">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}
