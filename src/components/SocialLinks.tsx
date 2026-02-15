import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/AgentAniesh",
      hoverClass: "text-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/agentaniesh/",
      hoverClass: "instagram",
    },
  ];

  return (
    <div className="w-full pt-4 pb-1 sm:pb-3">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex justify-center gap-4 sm:gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-2xl text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:h-12 sm:w-12 ${link.hoverClass}`}
            title={link.name}
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
