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
      hoverClass: "group-hover:text-[#0a66c2]",
    },
    {
      name: "Credly",
      icon: <SiCredly />,
      url: "https://www.credly.com/users/aniesh-kumar/badges/",
      hoverClass: "group-hover:text-[#e3732f]",
    },
    {
      name: "Resume",
      icon: <HiOutlineDocument />,
      url: "https://akcv.z30.web.core.windows.net/",
      hoverClass: "group-hover:text-blue-600",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      url: " https://github.com/anieshak/",
      hoverClass: "group-hover:text-[#171515]",
    },
    {
      name: "Schedule a meeting",
      icon: <SiCalendly />,
      url: "https://calendly.com/aaniesh/conferencing",
      hoverClass: "group-hover:text-[#466cf5]",
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
          className="flex justify-between items-center px-4 py-3 bg-gray-50 
                     rounded-lg shadow-sm hover:bg-gray-100 hover:scale-105 
                     transition-all duration-200 group h-[3.5rem]"
        >
          <span className="font-medium text-gray-700 group-hover:text-gray-900">
            {link.name}
          </span>
          <span className={`text-xl text-gray-500 ${link.hoverClass || ""}`}>
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
