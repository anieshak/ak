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
      important: true,
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
      important: true,
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
      important: true,
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
          onMouseEnter={(event) => {
            if (!link.important) return;
            const x = (event.clientX / window.innerWidth) * 100;
            const y = (event.clientY / window.innerHeight) * 100;
            window.dispatchEvent(new CustomEvent("important-link-hover", { detail: { x, y } }));
          }}
          className="flex justify-between items-center px-4 py-3 bg-gray-50 
                     rounded-lg shadow-sm hover:bg-gray-100 hover:scale-[1.02]
                     transition-all duration-200 group h-[3.5rem]"
        >
          <span className="font-medium text-gray-700 group-hover:text-gray-900">
            {link.name}
          </span>
          <span className={`relative text-xl ${link.hoverClass || ""}`}>
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
