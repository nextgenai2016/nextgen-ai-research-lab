import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

const emailAddresses = ["robin.chataut@tcu.edu", contact.email] as const;

export const metadata: Metadata = {
  title: "Contacts",
  description: `Contact ${site.name} at Texas Christian University.`,
};

export default function ContactsPage() {
  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-10 min-[1920px]:pb-28 min-[1920px]:pt-12">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sky-800">
              Contacts
            </p>
            <div className="h-px w-12 bg-sky-800/60" />
          </div>
          <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Contact the Lab
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700">
            Reach out about research collaborations, student opportunities, media inquiries, and
            lab activities.
          </p>
        </header>

        <div className="grid gap-10 border-b border-zinc-200 py-10 sm:grid-cols-2">
          <section>
            <h2 className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Email
            </h2>
            <div className="mt-4 space-y-3">
              {emailAddresses.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-base font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-600"
                >
                  {email}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Location
            </h2>
            <address className="mt-4 space-y-1 text-base leading-7 text-zinc-700 not-italic">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </section>
        </div>
      </div>
    </Container>
  );
}
