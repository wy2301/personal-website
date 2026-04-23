"use client";
import { useState, useEffect } from "react";

export interface MousePosition {
  x: number; // -1 to 1 normalized
  y: number; // -1 to 1 normalized
  rawX: number;
  rawY: number;
}

export function useMouseParallax(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0, rawX: 0, rawY: 0 });

  useEffect(() => {
    let raf: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    // Lerp for smooth motion
    const loop = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      setPos({
        x: currentX,
        y: currentY,
        rawX: (currentX + 1) / 2,
        rawY: (currentY + 1) / 2,
      });
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return pos;
}
