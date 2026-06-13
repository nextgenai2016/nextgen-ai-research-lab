import { FileText } from "lucide-react";
import type { PrincipalInvestigator } from "@/data/team";

type ProfileLinksProps = {
  profile: Pick<PrincipalInvestigator, "googleScholar" | "github" | "linkedin">;
  className?: string;
};

const linkClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:border-violet-500 hover:text-violet-700";

function GoogleScholarLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M12 3 1.8 10.35 12 17.7l10.2-7.35L12 3Zm0 2.72 5.88 4.23L12 14.18 6.12 9.95 12 5.72Z" />
      <path d="M6.2 13.7a5.8 5.8 0 0 0 11.6 0h-2.1a3.7 3.7 0 0 1-7.4 0H6.2Z" />
    </svg>
  );
}

function GithubLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.35 9.6 8 11.15.58.1.8-.25.8-.56v-2.14c-3.25.72-3.94-1.42-3.94-1.42-.53-1.38-1.3-1.75-1.3-1.75-1.07-.75.08-.73.08-.73 1.18.08 1.8 1.24 1.8 1.24 1.05 1.84 2.75 1.31 3.42 1 .1-.78.41-1.31.75-1.61-2.6-.3-5.33-1.33-5.33-5.9 0-1.3.45-2.36 1.2-3.2-.12-.3-.52-1.52.12-3.15 0 0 .99-.32 3.22 1.22a10.9 10.9 0 0 1 5.86 0c2.23-1.54 3.21-1.22 3.21-1.22.64 1.63.24 2.85.12 3.15.75.84 1.2 1.9 1.2 3.2 0 4.58-2.74 5.6-5.35 5.9.42.37.8 1.1.8 2.22v3.3c0 .31.21.67.81.56A11.82 11.82 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.65H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.35 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.57V9h3.56v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

export function ProfileLinks({ profile, className = "" }: ProfileLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="/contents/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CV"
        title="Curriculum Vitae"
        className={linkClass}
      >
        <FileText size={18} strokeWidth={1.8} />
      </a>

      <a
        href={profile.googleScholar}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Scholar"
        title="Google Scholar"
        className={linkClass}
      >
        <GoogleScholarLogo />
      </a>

      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
        className={linkClass}
      >
        <GithubLogo />
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={linkClass}
      >
        <LinkedInLogo />
      </a>
    </div>
  );
}
