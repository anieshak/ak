import { useEffect, useState, type ReactNode } from "react";
import ThreeBackground from "./ThreeBackground";

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function Background({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    setWebglSupported(canUseWebGL());

    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const showThreeBackground = webglSupported && !reducedMotion;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950">
      {showThreeBackground ? (
        <ThreeBackground reducedMotion={reducedMotion} />
      ) : (
        <>
          {!reducedMotion && (
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="fixed top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src="/Bg Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div
            aria-hidden="true"
            className="fixed inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950"
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
