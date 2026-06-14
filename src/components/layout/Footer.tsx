import { layoutShell } from "@/components/layout/shell";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

const emailLinkClass =
  "font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-600";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className={`${layoutShell} py-5`}>
        <div className="flex flex-col gap-3 text-sm text-zinc-600 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-semibold text-zinc-950">{site.name}</p>
            <p className="mt-1 text-xs text-zinc-500">{site.tagline}</p>
          </div>

          <address className="not-italic lg:text-right">
            <a href={`mailto:${contact.email}`} className={emailLinkClass}>
              {contact.email}
            </a>
            <p className="mt-1 text-xs text-zinc-500">{contact.address.join(" · ")}</p>
          </address>
        </div>

        <div className="mt-4 border-t border-zinc-100 pt-3">
          <p className="text-xs text-zinc-500">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
