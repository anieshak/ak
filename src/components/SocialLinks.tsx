import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: <FaXTwitter />,
      url: "https://x.com/AgentAniesh",
      hoverClass: "hover:text-white hover:bg-black",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/agentaniesh/",
      hoverClass: `instagram`, // Custom hover class for Instagram`,
    },
  ];

  return (
    <div className="flex justify-center gap-6">
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
          className={`
              text-3xl text-black 
              transition-all duration-200 
              hover:scale-110
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
