import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import { SiCredly } from "react-icons/si";
import { SiCalendly } from "react-icons/si";

export default function RelevantLinks() {
  const links = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/anieshkumar/",
      hoverClass: "text-[#0a66c2]",
    },
    {
      name: "Credly",
      icon: <SiCredly />,
      url: "https://www.credly.com/users/aniesh-kumar/badges/",
      hoverClass: "text-[#e3732f]",
    },
    {
      name: "Resume",
      icon: <HiOutlineDocument />,
      url: "https://akcv.z30.web.core.windows.net/",
      hoverClass: "text-blue-600",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      url: " https://github.com/anieshak/",
      hoverClass: "text-[#171515]",
    },
    {
      name: "Schedule a meeting",
      icon: <SiCalendly />,
      url: "https://calendly.com/aaniesh/conferencing",
      hoverClass: "text-[#466cf5]",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center px-4 py-3 bg-white/90 
                     rounded-lg border border-slate-200 shadow-sm hover:bg-slate-50 hover:shadow-md hover:scale-[1.01]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2
                     transition-all duration-200 group h-[3.5rem]"
        >
          <span className="font-medium text-slate-700 group-hover:text-slate-900">
            {link.name}
          </span>
          <span className={`text-xl ${link.hoverClass || ""}`} aria-hidden="true">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
