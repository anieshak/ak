import { HiOutlineArrowLeft } from "react-icons/hi2";
import { anieshPrep } from "../data/projects";

export default function BuildNotePage() {
  return (
    <main className="mx-auto max-w-[65rem] px-4 py-6 md:px-6 md:py-10">
      <article className="rounded-md bg-white p-6 text-gray-700 shadow-xl sm:p-10">
        <a href="/projects/" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
          <HiOutlineArrowLeft aria-hidden="true" /> Back to Projects
        </a>
        <header className="mt-6 border-b border-gray-200 pb-8">
          <div className="flex items-center gap-3">
            <img src="/aniesh-prep-icon.png" width="32" height="32" alt="" className="size-8 object-contain" />
            <p className="text-sm font-medium text-violet-800">Aniesh Prep</p>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl">Build note</h1>
          <p className="mt-3 max-w-3xl leading-relaxed">Designing credible alternatives without making the answer ambiguous.</p>
        </header>
        <div className="mt-8 max-w-3xl space-y-5 leading-relaxed">
          {anieshPrep.buildNote.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <footer className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-sm leading-relaxed text-gray-500">{anieshPrep.disclaimer}</p>
          <a href="/projects/" className="mt-3 inline-flex min-h-11 items-center gap-2 font-medium text-gray-600 hover:text-black"><HiOutlineArrowLeft aria-hidden="true" /> Back to Projects</a>
        </footer>
      </article>
    </main>
  );
}
