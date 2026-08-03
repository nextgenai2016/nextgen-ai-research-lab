import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Open Positions",
  description: `Ph.D., undergraduate research, and collaboration opportunities at ${site.name}.`,
};

const phdProgramUrl = "https://cse.tcu.edu/computer-science/graduate/phd-in-cs.php";

function EmailLink({ subject, children }: { subject: string; children: React.ReactNode }) {
  return (
    <a
      href={`mailto:${contact.email}?subject=${encodeURIComponent(subject)}`}
      className="font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-600"
    >
      {children}
    </a>
  );
}

export default function OpenPositionsPage() {
  return (
    <Container className="pb-20 pt-12 sm:pb-28 sm:pt-20 min-[1920px]:pt-24">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-zinc-200 pb-10 sm:pb-14">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sky-800">
              Join the lab
            </p>
            <div className="h-px w-12 bg-sky-800/60" />
          </div>
          <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Open Positions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
            Thank you for your interest in the TCU NextGen AI Lab. We are always looking for
            talented, motivated, and curious students who are passionate about advancing
            artificial intelligence and developing technologies that make a positive societal
            impact.
          </p>
        </header>

        <section id="phd-students" className="scroll-mt-24 border-b border-zinc-200 py-10 sm:py-14">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Prospective Ph.D. Students
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-zinc-700">
            <p>
              The TCU NextGen AI Lab welcomes applications from highly motivated students
              interested in pursuing a Ph.D. in Computer Science at Texas Christian University.
              Prospective students should review the official{" "}
              <a
                href={phdProgramUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-600"
              >
                TCU Ph.D. in Computer Science program
              </a>{" "}
              and apply through the university admissions process.
            </p>

            <p>
              Competitive applicants typically have a strong academic background in Computer
              Science, Computer Engineering, Electrical Engineering, Mathematics, Data Science,
              or a related discipline. Strong programming ability in Python, C/C++, Java, or a
              similar language is expected, along with knowledge of artificial intelligence,
              machine learning, or data science. Experience with PyTorch, TensorFlow, Hugging
              Face, or related tools is helpful but not required.
            </p>

            <p>
              Applicants should demonstrate strong analytical, problem-solving, and communication
              skills, as well as the motivation to conduct original research and contribute to the
              scientific community. Previous research experience, publications, or industry
              research experience are beneficial but not required.
            </p>

            <p>
              If your research interests align with those of the lab, email{" "}
              <EmailLink subject="Prospective Ph.D. Student – Your Name">
                {contact.email}
              </EmailLink>{" "}
              with your curriculum vitae, unofficial academic transcripts, and a brief statement
              of research interests. You may also include publications, a GitHub profile, a
              portfolio, or other supporting materials. Please use the subject line
              <strong className="font-semibold text-zinc-950">
                {" "}“Prospective Ph.D. Student – Your Name.”
              </strong>
            </p>
          </div>
        </section>

        <section
          id="undergraduate-research"
          className="scroll-mt-24 border-b border-zinc-200 py-10 sm:py-14"
        >
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Undergraduate Research Opportunities
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-zinc-700">
            <p>
              The TCU NextGen AI Lab welcomes motivated undergraduate students interested in
              gaining hands-on research experience. Undergraduate researchers work closely with
              faculty and Ph.D. students on cutting-edge projects and may contribute to
              peer-reviewed publications, present research at regional and international
              conferences, and develop open-source software and research prototypes. This work can
              provide valuable preparation for graduate study and research careers.
            </p>

            <p>
              Prior research experience is not required. We value curiosity, initiative,
              creativity, strong programming skills, and a willingness to learn.
            </p>

            <p>
              Interested students should email{" "}
              <EmailLink subject="Undergraduate Research Inquiry – Your Name">
                {contact.email}
              </EmailLink>{" "}
              with a resume or CV, an unofficial transcript, and a brief statement describing
              their research interests and career goals. A GitHub profile or portfolio may also be
              included.
            </p>
          </div>
        </section>

        <section
          id="visiting-collaborators"
          className="scroll-mt-24 border-b border-zinc-200 py-10 sm:py-14"
        >
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Visiting Students and Research Collaborators
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-zinc-700">
            <p>
              We welcome inquiries from visiting Ph.D. students, undergraduate researchers,
              faculty collaborators, and visiting scholars whose research interests align with
              those of the TCU NextGen AI Lab.
            </p>

            <p>
              If you are interested in a research visit or collaboration, email{" "}
              <EmailLink subject="Research Collaboration Inquiry">{contact.email}</EmailLink> with
              your CV and a brief description of your research background and proposed
              collaboration.
            </p>
          </div>
        </section>

        <footer className="py-10 sm:py-12">
          <p className="max-w-3xl text-sm leading-7 text-zinc-500">
            We receive many inquiries throughout the year. While we carefully review every
            application, we may only be able to respond to applicants whose interests and
            backgrounds closely align with current research opportunities.
          </p>
        </footer>
      </article>
    </Container>
  );
}
