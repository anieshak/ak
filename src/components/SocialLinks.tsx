import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import { SiCredly } from "react-icons/si";
import { MdSchedule } from "react-icons/md";

export default function SocialLinks() {
  const links = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/anieshkumar/" },
    { name: "Credly", icon: <SiCredly />, url: "https://www.credly.com/users/aniesh-kumar/badges/" },
    { name: "Resume", icon: <HiOutlineDocument />, url: "https://akcv.z30.web.core.windows.net/" },
    { name: "Github", icon: <FaGithub />, url: " https://github.com/anieshak/" },
    { name: "Schedule a meeting", icon: <MdSchedule />, url: "https://calendly.com/aaniesh/conferencing" },
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
                     transition-all duration-200 group"
        >
          <span className="font-medium text-gray-700 group-hover:text-gray-900">
            {link.name}
          </span>
          <span className="text-xl text-gray-500 group-hover:text-blue-500">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
