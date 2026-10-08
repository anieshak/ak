import { useMemo, useState } from "react";
import RelevantLinks from "./RelevantLinks";
import profileImg from "../assets/aniesh-profile.jpg";

export default function ProfileCard() {
  const [pointer, setPointer] = useState({ x: 50, y: 35, rx: 0, ry: 0 });

  const cardStyle = useMemo(
    () => ({
      transform: `perspective(1200px) rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) scale(1.005)`,
      boxShadow: `${-pointer.ry * 3}px ${pointer.rx * 5 + 20}px 50px rgba(15, 23, 42, 0.35)`,
    }),
    [pointer],
  );

  return (
    <div
      className="relative bg-white shadow-xl flex flex-col md:flex-row gap-4 items-center rounded-md transition-transform duration-150"
      style={cardStyle}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        const ry = ((x - 50) / 50) * 1.8;
        const rx = ((50 - y) / 50) * 1.3;

        setPointer({ x, y, rx, ry });
      }}
      onMouseLeave={() => setPointer({ x: 50, y: 35, rx: 0, ry: 0 })}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-md"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.58), rgba(255,255,255,0) 42%)`,
        }}
      />
      {/* Left: Image Section */}
      <div className="md:w-124 sm:w-full relative z-10">
        <div className="relative overflow-hidden bg-gray-100 shadow-md">
          <img
            src={profileImg}
            alt="Aniesh"
            title="Aniesh"
            className="w-full aspect-[3/4] object-cover object-top"
          />
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="flex-1 flex flex-col justify-center p-10 md:w-124 sm:w-full relative z-10">
        <div>
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-3 text-black italic">
            Aniesh Kumar
          </h1>
          <p className="text-base text-lg text-black italic mb-8">
            Hi! <br />
            I'm a <span>Customer Success Manager</span> passionate about
            Technology, Security & using tech to make this world a better place
            to live in.
          </p>

          <section aria-labelledby="product-title" className="mb-6 rounded-lg border border-violet-100 bg-violet-50 p-4 text-gray-700">
            <h2 id="product-title" className="font-semibold text-violet-900">Building Aniesh Prep</h2>
            <p className="mt-1 text-sm leading-relaxed">An early-stage independent certification preparation platform, starting with Claude Certified Architect – Foundations. Original scenarios, authored explanations and optional Claude-powered Architecture Lens.</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-violet-800">
              <a href="https://prep.aniesh.com/about#lens-demo" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">See the product walkthrough</a>
              <a href="https://aniesh.lovable.app/projects" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">Read the build note</a>
            </p>
          </section>

          {/* Social Links */}
          <div className="w-full">
            <RelevantLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
