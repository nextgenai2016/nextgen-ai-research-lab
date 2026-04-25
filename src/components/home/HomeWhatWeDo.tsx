import { Container } from "@/components/layout/Container";
import { homeWhatWeDo } from "@/data/home";

export function HomeWhatWeDo() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <Container className="py-20 sm:py-24 min-[1920px]:py-28 min-[2560px]:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="home-motion-in font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
            {homeWhatWeDo.eyebrow}
          </p>
          <h2 className="home-motion-in home-motion-delay-1 mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl min-[1920px]:text-5xl">
            {homeWhatWeDo.title}
          </h2>
          <p className="home-motion-in home-motion-delay-2 mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg min-[1920px]:text-xl min-[1920px]:leading-relaxed">
            {homeWhatWeDo.description}
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {homeWhatWeDo.pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className={`home-motion-in group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:border-zinc-300 hover:shadow-md min-[1920px]:p-10 ${
                i === 0
                  ? ""
                  : i === 1
                    ? "home-motion-delay-3"
                    : "home-motion-delay-4"
              }`}
            >
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-sky-500/80"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-950 min-[1920px]:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 min-[1920px]:text-base min-[1920px]:leading-relaxed">
                {pillar.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
