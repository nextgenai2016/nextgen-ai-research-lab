import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { homeCta } from "@/data/home";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(14,165,233,0.08),transparent)]" />
      </div>
      <Container className="relative py-20 sm:py-28 min-[1920px]:py-32 min-[2560px]:py-36">
        <div className="home-motion-in mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white px-8 py-14 text-center shadow-sm backdrop-blur-sm sm:px-12 min-[1920px]:max-w-4xl min-[1920px]:px-16 min-[1920px]:py-16">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl min-[1920px]:text-5xl">
            {homeCta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg min-[1920px]:text-xl min-[1920px]:leading-relaxed">
            {homeCta.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/research"
              className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800 min-[1920px]:px-7 min-[1920px]:py-3.5 min-[1920px]:text-base"
            >
              {homeCta.primaryLabel}
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 min-[1920px]:px-7 min-[1920px]:py-3.5 min-[1920px]:text-base"
            >
              {homeCta.secondaryLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
