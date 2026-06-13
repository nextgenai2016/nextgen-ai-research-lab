import Image from "next/image";

type TeamPhotoProps = {
  name: string;
  alt: string;
  imageSrc?: string;
  size?: "md" | "lg";
};

const sizeClasses = {
  md: "w-40 sm:w-48",
  lg: "w-48 sm:w-56",
};

const fallbackImageSrc = "/team/generic-profile.svg";

export function TeamPhoto({ alt, imageSrc, size = "md" }: TeamPhotoProps) {
  const src = imageSrc ?? fallbackImageSrc;
  const frameClass = imageSrc
    ? "overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100"
    : "";
  const imageClass = imageSrc ? "object-cover object-center" : "object-contain object-center";

  return (
    <div className={`relative aspect-[3/4] shrink-0 ${frameClass} ${sizeClasses[size]}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClass}
        sizes={size === "lg" ? "224px" : "192px"}
      />
    </div>
  );
}
