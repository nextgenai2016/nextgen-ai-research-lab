"use client";

import { useMemo, useState } from "react";
import type { Publication, PublicationType } from "@/data/publications";
import { publicationTypes } from "@/data/publications";

type PublicationsExplorerProps = {
  publications: Publication[];
};

type FilterGroupProps = {
  title: string;
  options: { label: string; value: string; count: number }[];
  selected: Set<string>;
  onToggle: (value: string) => void;
};

type PublicationLinkKey = keyof NonNullable<Publication["links"]>;

const linkLabels: Record<PublicationLinkKey, string> = {
  paper: "Paper",
  doi: "DOI",
  citation: "Citation",
  code: "Code",
  demo: "Demo",
};

const linkOrder: PublicationLinkKey[] = ["paper", "doi", "citation", "code", "demo"];

function countValues<T extends string | number>(
  publications: Publication[],
  getValues: (publication: Publication) => T[],
) {
  return publications.reduce<Map<T, number>>((counts, publication) => {
    getValues(publication).forEach((value) => {
      counts.set(value, (counts.get(value) ?? 0) + 1);
    });
    return counts;
  }, new Map<T, number>());
}

function FilterGroup({ title, options, selected, onToggle }: FilterGroupProps) {
  return (
    <section className="border-b border-zinc-200 pb-4 last:border-b-0 last:pb-0">
      <h2 className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-500">
        {title}
      </h2>
      <div className="mt-2.5 space-y-1.5">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 text-xs leading-5 text-zinc-600 transition hover:text-zinc-950"
          >
            <input
              type="checkbox"
              checked={selected.has(option.value)}
              onChange={() => onToggle(option.value)}
              className="h-3 w-3 rounded-sm border-zinc-300 bg-white text-sky-600 accent-sky-600"
            />
            <span className="min-w-0 flex-1 truncate">{option.label}</span>
            <span className="font-mono text-[0.65rem] text-zinc-600">
              {option.count}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}

function toggleSetValue(values: Set<string>, value: string) {
  const next = new Set(values);

  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }

  return next;
}

function getPublicationTypeClass(type: PublicationType) {
  const styles: Record<PublicationType, string> = {
    Book: "border-amber-300 bg-amber-50 text-amber-700",
    Chapter: "border-violet-300 bg-violet-50 text-violet-700",
    Conference: "border-emerald-300 bg-emerald-50 text-emerald-700",
    Journal: "border-sky-300 bg-sky-50 text-sky-700",
  };

  return styles[type];
}

function PublicationCard({ publication }: { publication: Publication }) {
  const links = publication.links
    ? linkOrder
        .map((key) => ({ key, href: publication.links?.[key] }))
        .filter((link): link is { key: PublicationLinkKey; href: string } => Boolean(link.href))
    : [];

  return (
    <article className="border-b border-zinc-200 py-4 transition-colors hover:bg-zinc-50 sm:px-1 last:border-b-0">
      <div className="grid gap-3 sm:grid-cols-[5.75rem_minmax(0,1fr)] sm:gap-4">
        <div className="flex items-center gap-2 sm:block">
          <span
            className={`inline-flex rounded border px-2 py-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] ${getPublicationTypeClass(
              publication.type,
            )}`}
          >
            {publication.type}
          </span>
          <span className="font-mono text-[0.7rem] text-zinc-500 sm:mt-2 sm:block">
            {publication.year}
          </span>
        </div>

        <div className="min-w-0">
          <h2 className="text-[0.95rem] font-medium leading-snug tracking-tight text-zinc-950 min-[1920px]:text-base">
            {publication.title}
          </h2>
          <p className="mt-1.5 text-xs leading-5 text-zinc-600 min-[1920px]:text-sm">
            {publication.summary}
          </p>
          <p className="mt-1.5 text-xs leading-5 text-zinc-500">
            <span className="text-zinc-800">Authors:</span> {publication.authors.join(", ")}
          </p>

          {links.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {links.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-[0.7rem] font-medium text-zinc-700 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-950"
                >
                  {linkLabels[key]}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function PublicationsExplorer({ publications }: PublicationsExplorerProps) {
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedYears, setSelectedYears] = useState<Set<string>>(new Set());
  const [selectedAuthors, setSelectedAuthors] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const typeCounts = useMemo(
    () => countValues(publications, (publication) => [publication.type]),
    [publications],
  );
  const yearCounts = useMemo(
    () => countValues(publications, (publication) => [publication.year]),
    [publications],
  );
  const authorCounts = useMemo(
    () => countValues(publications, (publication) => publication.authors),
    [publications],
  );

  const typeOptions = useMemo(
    () =>
      publicationTypes.map((type) => ({
        label: type,
        value: type,
        count: typeCounts.get(type) ?? 0,
      })),
    [typeCounts],
  );

  const yearOptions = useMemo(
    () =>
      Array.from(yearCounts.entries())
        .sort(([a], [b]) => b - a)
        .map(([year, count]) => ({
          label: String(year),
          value: String(year),
          count,
        })),
    [yearCounts],
  );

  const authorOptions = useMemo(
    () =>
      Array.from(authorCounts.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([author, count]) => ({
          label: author,
          value: author,
          count,
        })),
    [authorCounts],
  );

  const filteredPublications = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return publications.filter((publication) => {
      const matchesType = selectedTypes.size === 0 || selectedTypes.has(publication.type);
      const matchesYear =
        selectedYears.size === 0 || selectedYears.has(String(publication.year));
      const matchesAuthor =
        selectedAuthors.size === 0 ||
        publication.authors.some((author) => selectedAuthors.has(author));
      const matchesSearch =
        normalizedSearch.length === 0 ||
        publication.title.toLowerCase().includes(normalizedSearch);

      return matchesType && matchesYear && matchesAuthor && matchesSearch;
    });
  }, [publications, searchTerm, selectedAuthors, selectedTypes, selectedYears]);

  const hasActiveFilters =
    selectedTypes.size > 0 ||
    selectedYears.size > 0 ||
    selectedAuthors.size > 0 ||
    searchTerm.trim().length > 0;

  function clearFilters() {
    setSelectedTypes(new Set());
    setSelectedYears(new Set());
    setSelectedAuthors(new Set());
    setSearchTerm("");
  }

  const filters = (
    <aside className="rounded-md border border-zinc-200 bg-zinc-50 p-3 lg:sticky lg:top-28 min-[1920px]:p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-medium text-zinc-950">Filter Publications</h2>
          {/* <p className="mt-0.5 text-[0.7rem] leading-4 text-zinc-500">
            Narrow the list by metadata or title.
          </p> */}
        </div>
        <button
          type="button"
          onClick={clearFilters}
          disabled={!hasActiveFilters}
          className="shrink-0 rounded border border-zinc-300 px-2 py-1 text-[0.7rem] font-medium text-zinc-600 transition hover:border-sky-400 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear
        </button>
      </div>

      <div className="mt-4">
        <label
          htmlFor="publication-search"
          className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-500"
        >
          Publication Name
        </label>
        <input
          id="publication-search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by title"
          className="mt-2 w-full rounded border border-zinc-300 bg-white px-2.5 py-2 text-xs text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-sky-500"
        />
      </div>

      <div className="mt-4 space-y-4">
        <FilterGroup
          title="Document Type"
          options={typeOptions}
          selected={selectedTypes}
          onToggle={(value) => setSelectedTypes((current) => toggleSetValue(current, value))}
        />
        <FilterGroup
          title="Publication Year"
          options={yearOptions}
          selected={selectedYears}
          onToggle={(value) => setSelectedYears((current) => toggleSetValue(current, value))}
        />
        <FilterGroup
          title="Author Name"
          options={authorOptions}
          selected={selectedAuthors}
          onToggle={(value) => setSelectedAuthors((current) => toggleSetValue(current, value))}
        />
      </div>
    </aside>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:items-start min-[1920px]:grid-cols-[17rem_minmax(0,1fr)] min-[1920px]:gap-8">
      {filters}

      <section aria-live="polite">
        <div className="mb-2.5 border-b border-zinc-200 pb-3">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
              {filteredPublications.length} of {publications.length} publications
            </p>
            <h2 className="mt-1 text-lg font-medium tracking-tight text-zinc-950">
              Research Output
            </h2>
          </div>
        </div>

        {filteredPublications.length > 0 ? (
          <div className="divide-y-0">
            {filteredPublications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
            <h2 className="text-sm font-medium text-zinc-950">No publications found</h2>
            <p className="mt-2 text-xs text-zinc-500">
              Try clearing filters or searching for a different publication title.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
