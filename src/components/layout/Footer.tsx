import { layoutShell } from "@/components/layout/shell";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

const footerEmails = ["robin.chataut@tcu.edu", "ailabs@tcu.edu"] as const;

const emailLinkClass =
  "block text-sm text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-sky-700 hover:decoration-sky-300 2xl:text-[0.9375rem] min-[1920px]:text-base";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div
        className={`${layoutShell} py-10 2xl:py-12 min-[1920px]:py-14 min-[2560px]:py-16`}
      >
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16 2xl:gap-20">
          <div className="max-w-md min-[1920px]:max-w-lg">
            <p className="font-mono font-semibold text-zinc-950 text-sm sm:text-base 2xl:text-lg min-[1920px]:text-xl min-[2560px]:text-2xl">
              {site.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 2xl:text-[0.9375rem] 2xl:leading-relaxed min-[1920px]:text-base min-[2560px]:text-lg min-[2560px]:leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:justify-end sm:gap-10 lg:gap-14 2xl:gap-16">
            <div className="min-w-0 sm:max-w-xs lg:text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                Email
              </p>
              <div className="mt-2 space-y-2">
                {footerEmails.map((addr) => (
                  <a key={addr} href={`mailto:${addr}`} className={emailLinkClass}>
                    {addr}
                  </a>
                ))}
              </div>
            </div>

            <address className="min-w-0 not-italic sm:max-w-xs lg:text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                Location
              </p>
              <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-zinc-600 2xl:text-[0.9375rem] min-[1920px]:text-base">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </div>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div
          className={`${layoutShell} py-5 text-zinc-500 2xl:py-6 min-[1920px]:py-7`}
        >
          <p className="text-xs 2xl:text-sm min-[1920px]:text-base">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
