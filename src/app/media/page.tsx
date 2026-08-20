import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { MediaSlideshow } from "@/components/media/MediaSlideshow";
import { galleryItems } from "@/data/media";
import { newsItems } from "@/data/news";
import { site } from "@/data/site";

const pressItems = newsItems.filter((item) => item.category === "Media");

export const metadata: Metadata = {
  title: "Media",
  description: `Photo highlights, press coverage, interviews, and articles from ${site.name}.`,
};

export default function MediaPage() {
  return (
    <>
      <Container className="pb-24 pt-12 sm:pb-28 sm:pt-16">
        <section id="gallery" className="scroll-mt-24">
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

          <MediaSlideshow items={galleryItems} />
          <p className="mt-5 text-sm text-zinc-500">
            Photos courtesy of TCU Davis College of Science &amp; Engineering.
          </p>
        </section>

        <section id="press" className="scroll-mt-24 pt-20 sm:pt-28">
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
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
