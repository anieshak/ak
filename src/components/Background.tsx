import type { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-screen h-screen ">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Bg Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>{children}</div>
    </div>
  );
}
