import { useMemo, useState } from "react";
import RelevantLinks from "./RelevantLinks";
import profileImg from "../assets/aniesh-profile.jpg";

export default function ProfileCard() {
  const [pointer, setPointer] = useState({ x: 50, y: 35, rx: 0, ry: 0 });

  const cardStyle = useMemo(
    () => ({
      transform: `perspective(1200px) rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) scale(1)`,
      boxShadow: `${-pointer.ry * 3}px ${pointer.rx * 5 + 20}px 50px rgba(15, 23, 42, 0.35)`,
    }),
    [pointer],
  );

  return (
    <div
      className="relative flex w-full flex-col items-stretch gap-0 overflow-hidden rounded-2xl bg-white/95 shadow-xl transition-transform duration-150 lg:flex-row"
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
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.58), rgba(255,255,255,0) 42%)`,
        }}
      />
      {/* Left: Image Section */}
      <div className="relative z-10 w-full lg:w-2/5">
        <div className="relative overflow-hidden bg-slate-100">
          <img
            src={profileImg}
            alt="Aniesh"
            title="Aniesh"
            className="h-full w-full aspect-[3/4] object-cover object-top"
          />
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center p-5 sm:p-8 lg:w-3/5 lg:p-10">
        <div>
          <h1 className="mb-3 text-2xl font-semibold italic tracking-tight text-black sm:text-3xl lg:text-4xl">
            Aniesh Kumar
          </h1>
          <p className="mb-6 text-base leading-relaxed text-slate-800 italic sm:mb-8 sm:text-lg">
            Hello there! <br />I am a <span>Customer Success Manager</span>{" "}
            passionate about Technology, Security & using tech to make this
            world a better place to live in.
          </p>

          {/* Social Links */}
          <div className="w-full">
            <RelevantLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
