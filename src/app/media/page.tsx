import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { galleryItems } from "@/data/media";
import { newsItems } from "@/data/news";
import { site } from "@/data/site";

const pressItems = newsItems.filter((item) => item.category === "Media");

export const metadata: Metadata = {
  title: "Media",
  description: `Press coverage, interviews, articles, and photo highlights from ${site.name}.`,
};

export default function MediaPage() {
  return (
    <>
      <section className="border-b border-sky-100 bg-sky-50">
        <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24 min-[1920px]:pb-24 min-[1920px]:pt-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-800">Media</p>
              <div className="h-px w-12 bg-sky-800/60" />
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl min-[1920px]:text-6xl">
              Stories from the lab
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Explore press coverage, expert commentary, and moments from our research,
              presentations, competitions, and community.
            </p>
            <nav className="mt-9 flex gap-3" aria-label="Media page sections">
              <a
                href="#press"
                className="bg-sky-800 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-sky-900"
              >
                Press
              </a>
              <a
                href="#gallery"
                className="border border-sky-800 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky-900 transition hover:bg-white"
              >
                Gallery
              </a>
            </nav>
          </div>
        </Container>
      </section>

      <Container className="pb-24 pt-16 sm:pb-28 sm:pt-20">
        <section id="press" className="scroll-mt-24">
          <div className="grid gap-8 border-b border-zinc-200 pb-10 md:grid-cols-[14rem_1fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
                Press
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                In the media
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
              Features, interviews, and articles sharing the lab’s perspective on artificial
              intelligence, cybersecurity, digital privacy, and emerging technology.
            </p>
          </div>

          <div className="divide-y divide-zinc-200">
            {pressItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr] sm:gap-8 min-[1920px]:py-9"
              >
                <time className="font-mono text-xs tracking-wide text-zinc-500">{item.date}</time>
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-950 min-[1920px]:text-xl">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-sky-700"
                      >
                        {item.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="scroll-mt-24 pt-20 sm:pt-28">
          <div className="grid gap-8 border-b border-zinc-200 pb-10 md:grid-cols-[14rem_1fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                Lab moments
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
              Students and researchers representing TCU through scholarship, collaboration,
              competition, and public engagement.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                className={item.featured ? "md:col-span-2" : undefined}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden bg-zinc-100"
                >
                  <div
                    className={`relative overflow-hidden ${
                      item.featured ? "aspect-[2.2/1]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes={item.featured ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 768px) 100vw, 50vw"}
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
                <figcaption className="border-x border-b border-zinc-200 px-5 py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-zinc-500">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            Photos courtesy of TCU Davis College of Science &amp; Engineering.
          </p>
        </section>
      </Container>
    </>
  );
}
