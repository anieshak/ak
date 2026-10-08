import { HiOutlineArrowLeft, HiOutlineArrowUpRight } from "react-icons/hi2";
import { anieshPrep } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[65rem] px-4 py-6 md:px-6 md:py-10">
      <div className="rounded-md bg-white p-6 text-gray-700 shadow-xl sm:p-10">
        <a href="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
          <HiOutlineArrowLeft aria-hidden="true" /> Back to Aniesh
        </a>
        <header className="mt-6 border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">Projects</h1>
          <p className="mt-3 max-w-2xl leading-relaxed">Products and projects built around practical problems.</p>
        </header>

        <article aria-labelledby="aniesh-prep-title" className="pt-8">
          <div className="flex items-center gap-4">
            <img src="/aniesh-prep-icon.png" width="48" height="48" alt="" className="size-12 shrink-0 object-contain" />
            <div>
              <p className="text-sm text-gray-500">Early-stage product · Certification preparation</p>
              <h2 id="aniesh-prep-title" className="mt-1 text-2xl font-semibold tracking-tight text-black sm:text-3xl">Aniesh Prep</h2>
            </div>
          </div>
          <p className="mt-6 text-xl font-semibold leading-snug text-violet-900 sm:text-2xl">Certification practice that explains the tradeoffs.</p>
          <p className="mt-4 max-w-3xl leading-relaxed">An independent preparation platform for cloud and AI professionals, starting with Claude Certified Architect – Foundations. Practise realistic questions, compare authored explanations, and optionally explore your selected answer with Claude.</p>
          <nav aria-label="Explore Aniesh Prep" className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="https://prep.aniesh.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-700 px-5 py-3 font-medium text-white hover:bg-violet-800">
              Explore Aniesh Prep <HiOutlineArrowUpRight aria-hidden="true" />
            </a>
            <a href="https://prep.aniesh.com/about#lens-demo" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-medium text-violet-800 underline underline-offset-4 hover:text-violet-950">
              See Lens in action <HiOutlineArrowUpRight aria-hidden="true" />
            </a>
            <a href="/projects/buildnotes/" className="inline-flex min-h-11 items-center font-medium text-gray-600 underline underline-offset-4 hover:text-black">Read the build note</a>
          </nav>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">{anieshPrep.disclaimer}</p>

          <figure className="mt-8">
            <img src="/aniesh-prep-welcome-20261008.jpg" alt="Aniesh Prep welcome screen with sample-question and Lens walkthrough links, plus email or Google sign-in." width="1348" height="926" loading="lazy" className="h-auto w-full rounded-lg border border-gray-200" />
            <figcaption className="mt-3 text-sm text-gray-500">Aniesh Prep · Welcome and sign-in · Captured 8 October 2026</figcaption>
          </figure>

          <div className="mt-10 grid gap-8 border-t border-gray-200 pt-8 md:grid-cols-2 md:gap-12">
            <section aria-labelledby="problem-title">
              <h3 id="problem-title" className="text-lg font-semibold text-black">The problem</h3>
              <p className="mt-3 leading-relaxed">{anieshPrep.problem}</p>
              <h3 className="mt-8 text-lg font-semibold text-black">What I built</h3>
              {anieshPrep.built.split("\n\n").map((paragraph) => <p key={paragraph} className="mt-3 leading-relaxed">{paragraph}</p>)}
            </section>
            <section aria-labelledby="capabilities-title">
              <h3 id="capabilities-title" className="text-lg font-semibold text-black">Key capabilities</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                {anieshPrep.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
              <h3 className="mt-8 text-lg font-semibold text-black">Design and technical decisions</h3>
              <ul className="mt-3 space-y-4 leading-relaxed">
                <li><strong className="text-gray-900">Keep the quiz simple.</strong> Select an answer, read the authored explanation, and optionally use Lens. No typed reasoning is required.</li>
                <li><strong className="text-gray-900">Protect learner progress.</strong> Supabase authentication and database row-level security scope saved progress to each account. Historical question versions preserve the meaning of recorded answers.</li>
                <li><strong className="text-gray-900">Keep Claude behind the backend.</strong> Lens validates the submitted practice answer and account consent, enforces usage limits, and streams the response. Application storage retains usage and feedback metadata rather than generated explanation text.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">Designed and built with AI assistance.</p>
            </section>
          </div>

          <section aria-labelledby="lens-title" className="mt-10 rounded-lg border border-violet-100 bg-violet-50 p-5 sm:p-6">
            <h3 id="lens-title" className="text-lg font-semibold text-violet-900">Architecture Lens: beyond the authored explanation</h3>
            <p className="mt-3 leading-relaxed">Question → selected answer → authored explanation → optional Claude assistance.</p>
            <p className="mt-3 leading-relaxed">The authored explanation identifies the best answer and compares the alternatives. Lens can simplify the concept, explain your submitted selection against the actual constraints, or show what would need to change for another option to fit.</p>
            <p className="mt-3 leading-relaxed">For example, a fixed renewal-summary workflow fits repeatable calculations and a consistent audit trail. Lens explores when a tool-using agent could become appropriate: an investigation where evidence determines the next step, with arithmetic still handled deterministically.</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Lens is optional, requires informed opt-in, and is excluded from timed mocks. It does not infer your reasoning or predict exam success. AI explanations may be inaccurate; check the original explanation and official documentation.</p>
          </section>

          <section id="build-note" aria-labelledby="build-note-title" className="mt-10 scroll-mt-6 border-t border-gray-200 pt-8">
            <h3 id="build-note-title" className="text-lg font-semibold text-black">Build note</h3>
            <p className="mt-3 max-w-3xl leading-relaxed">How I revised the renewal question to test architectural judgment, checked competing answers, and protected historical progress.</p>
            <a href="/projects/buildnotes/" className="mt-3 inline-flex min-h-11 items-center font-medium text-violet-800 underline underline-offset-4 hover:text-violet-950">Read the full build note</a>
          </section>
          <section aria-labelledby="direction-title" className="mt-8">
            <h3 id="direction-title" className="text-lg font-semibold text-black">Product direction</h3>
            <p className="mt-3 max-w-3xl leading-relaxed">{anieshPrep.productDirection}</p>
          </section>
        </article>
        <footer className="mt-10 border-t border-gray-200 pt-6">
          <a href="/" className="inline-flex min-h-11 items-center gap-2 font-medium text-gray-600 hover:text-black"><HiOutlineArrowLeft aria-hidden="true" /> Back to Aniesh</a>
        </footer>
      </div>
    </main>
  );
}
