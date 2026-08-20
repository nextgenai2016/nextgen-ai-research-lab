"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryItem } from "@/data/media";

export function MediaSlideshow({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeItem = items[activeIndex];

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  if (!activeItem) return null;

  const showPrevious = () =>
    setActiveIndex((index) => (index - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % items.length);

  return (
    <div
      className="mt-10 overflow-hidden border border-zinc-200 bg-white"
      aria-roledescription="carousel"
      aria-label="Lab photo gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] bg-zinc-950 sm:aspect-[16/9]">
        <Image
          key={activeItem.src}
          src={activeItem.src}
          alt={activeItem.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-contain"
        />
        {items.length > 1 ? (
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3 sm:px-5">
            <button
              type="button"
              onClick={showPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl text-zinc-950 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Show previous photo"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={showNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl text-zinc-950 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Show next photo"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : null}
      </div>

      <div className="grid gap-5 px-5 py-5 sm:grid-cols-[1fr_auto] sm:px-7 sm:py-6">
        <div aria-live="polite">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
              {activeItem.title}
            </h3>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-zinc-500">
              {activeItem.date}
            </span>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600">
            {activeItem.caption}
          </p>
          {activeItem.href ? (
            <a
              href={activeItem.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-sky-800 transition hover:text-sky-600"
            >
              Related story <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>

        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:justify-between">
          <span className="font-mono text-xs tracking-wider text-zinc-500">
            {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2" aria-label="Choose a photo">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                  index === activeIndex ? "w-7 bg-sky-800" : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Show photo ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
