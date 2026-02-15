import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import { SiCredly, SiCalendly } from "react-icons/si";

export default function RelevantLinks() {
  const links = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/anieshkumar/",
      hoverClass: "text-[#0a66c2]",
      important: true,
    },
    {
      name: "Credly",
      icon: <SiCredly />,
      url: "https://www.credly.com/users/aniesh-kumar/badges/",
      hoverClass: "text-[#e3732f]",
      important: true,
    },
    {
      name: "Resume",
      icon: <HiOutlineDocument />,
      url: "https://akcv.z30.web.core.windows.net/",
      hoverClass: "text-blue-600",
      important: true,
    },
    {
      name: "Github",
      icon: <FaGithub />,
      url: "https://github.com/anieshak/",
      hoverClass: "text-[#171515]",
    },
    {
      name: "Schedule a meeting",
      icon: <SiCalendly />,
      url: "https://calendly.com/aaniesh/conferencing",
      hoverClass: "text-[#466cf5]",
      important: true,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-2.5 sm:gap-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={(event) => {
            if (!link.important) return;
            const x = (event.clientX / window.innerWidth) * 100;
            const y = (event.clientY / window.innerHeight) * 100;
            window.dispatchEvent(
              new CustomEvent("important-link-hover", { detail: { x, y } }),
            );
          }}
          className="group flex min-h-12 items-center justify-between gap-3 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2.5 text-sm shadow-sm transition-all duration-200 hover:scale-[1.015] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:px-4 sm:py-3 sm:text-base"
        >
          <span className="font-medium text-slate-700 transition-colors group-hover:text-slate-900">
            {link.name}
          </span>
          <span className={`relative shrink-0 text-lg sm:text-xl ${link.hoverClass || ""}`}>
            {link.icon}
            {link.important ? (
              <span
                aria-hidden="true"
                className="important-link-pulse pointer-events-none absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100"
              />
            ) : null}
          </span>
        </a>
      ))}
    </div>
  );
}
