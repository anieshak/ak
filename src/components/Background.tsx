import { useEffect, useState, type ReactNode } from "react";
import BinaryRainBackground from "./BinaryRainBackground";

function canUseCanvas2D() {
  try {
    const canvas = document.createElement("canvas");
    return !!canvas.getContext("2d");
  } catch {
    return false;
  }
}

export default function Background({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [canvasSupported, setCanvasSupported] = useState(true);
  const [light, setLight] = useState({ x: 50, y: 35 });
  const [pulse, setPulse] = useState(0.12);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    const updateLightFromMouse = (event: MouseEvent) => {
      setLight({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
      setPulse(0.16);
    };

    const handleImportantHover = (event: Event) => {
      const customEvent = event as CustomEvent<{ x: number; y: number }>;
      setLight({ x: customEvent.detail.x, y: customEvent.detail.y });
      setPulse(0.38);
      window.setTimeout(() => setPulse(0.16), 320);
    };

    updateMotionPreference();
    setCanvasSupported(canUseCanvas2D());

    // Safari compatibility: use addEventListener if available, fallback to addListener
    const addMediaListener = () => {
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", updateMotionPreference);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(updateMotionPreference);
      }
    };

    const removeMediaListener = () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };

    try {
      addMediaListener();
    } catch (e) {
      console.warn("Failed to add media query listener:", e);
    }

    window.addEventListener("mousemove", updateLightFromMouse);
    window.addEventListener("important-link-hover", handleImportantHover);

    return () => {
      try {
        removeMediaListener();
      } catch (e) {
        console.warn("Failed to remove media query listener:", e);
      }
      window.removeEventListener("mousemove", updateLightFromMouse);
      window.removeEventListener("important-link-hover", handleImportantHover);
    };
  }, []);

  const showAnimatedBackground = canvasSupported && !reducedMotion;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {showAnimatedBackground ? (
        <BinaryRainBackground lightX={light.x} lightY={light.y} pulseStrength={pulse} />
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
            className="fixed inset-0 z-0 bg-gradient-to-br from-black via-slate-950 to-slate-900"
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}