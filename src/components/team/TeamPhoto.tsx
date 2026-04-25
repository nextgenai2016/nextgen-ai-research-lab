import Image from "next/image";

type TeamPhotoProps = {
  name: string;
  alt: string;
  imageSrc?: string;
  size?: "md" | "lg";
};

const sizeClasses = {
  md: "h-40 w-40 sm:h-44 sm:w-44",
  lg: "h-48 w-48 sm:h-56 sm:w-56",
};

export function TeamPhoto({ name, alt, imageSrc, size = "md" }: TeamPhotoProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  if (imageSrc) {
    return (
      <div className="relative w-40 sm:w-48 aspect-[3/4] shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
  <Image
    src={imageSrc}
    alt={alt}
    fill
    className="object-cover object-center"
    sizes="192px"
  />
</div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 font-mono text-xs font-medium tracking-tight text-zinc-500 ${sizeClasses[size]}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
