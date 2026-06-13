import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Open Positions",
  description: `Open student research positions at ${site.name}.`,
};

export default function OpenPositionsPage() {
  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-10 min-[1920px]:pb-28 min-[1920px]:pt-12">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sky-800">
              Interested
            </p>
            <div className="h-px w-12 bg-sky-800/60" />
          </div>
          <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Open Positions
          </h1>
        </header>

        <section className="border-b border-zinc-200 py-10">
          <p className="max-w-3xl text-lg leading-8 text-zinc-800">
            I am actively seeking motivated undergraduate and graduate students interested in broad
            areas of AI, LLMs, and cybersecurity.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-700">
            If you are interested, please email me at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-600"
            >
              {contact.email}
            </a>{" "}
            with your resume and a brief statement of research interests.
          </p>
        </section>
      </div>
    </Container>
  );
}
