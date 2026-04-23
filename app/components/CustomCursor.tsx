"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let raf: number;
    let trailX = -100;
    let trailY = -100;
    let targetX = -100;
    let targetY = -100;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-hover]")) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-hover]")) setHovering(false);
    };

    // Faster lerp: 0.28 instead of 0.12 — noticeably snappier trail
    const loop = () => {
      trailX += (targetX - trailX) * 0.28;
      trailY += (targetY - trailY) * 0.28;
      setTrail({ x: trailX, y: trailY });
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Trail ring — snappy at 0.28 lerp */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border"
        style={{
          width: hovering ? 42 : 30,
          height: hovering ? 42 : 30,
          left: trail.x - (hovering ? 21 : 15),
          top: trail.y - (hovering ? 21 : 15),
          borderColor: hovering ? "rgba(192,132,252,0.85)" : "rgba(56,189,248,0.55)",
          boxShadow: hovering ? "0 0 10px rgba(192,132,252,0.4)" : "0 0 6px rgba(56,189,248,0.3)",
          transform: `scale(${clicking ? 0.75 : 1})`,
          transition: "width 0.15s ease, height 0.15s ease, border-color 0.15s ease, transform 0.1s ease",
        }}
      />
      {/* Dot — snaps directly to real mouse pos */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-sky-400"
        style={{
          width: clicking ? 7 : 5,
          height: clicking ? 7 : 5,
          left: pos.x - (clicking ? 3.5 : 2.5),
          top: pos.y - (clicking ? 3.5 : 2.5),
          boxShadow: "0 0 6px rgba(56,189,248,0.9)",
          transition: "width 0.1s ease, height 0.1s ease",
        }}
      />
    </>
  );
}
