import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/AgentAniesh" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/agentaniesh/" },
  ];

  return (
    <footer className="w-full py-4">
      <div className="flex justify-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-black hover:text-blue-500 hover:scale-110 
                     transition-all duration-200"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}