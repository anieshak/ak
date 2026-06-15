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
      hoverClass: `instagram`, // Custom hover class for Instagram`,
    },
  ];

  return (
    <div className="flex justify-center gap-6 w-full pt-4 pb-6">
      {/* Define Instagram gradient once */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient
            id="instagram-gradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
      </svg>

      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
          className={`
              text-3xl
              transition-all duration-200
              hover:scale-125
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-4
              ${link.hoverClass}
            `}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
