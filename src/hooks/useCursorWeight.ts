import { useEffect, useRef, useState } from "react";

const MIN_WEIGHT = 400;
const MAX_WEIGHT = 900;
const RADIUS_PX = 220;

export function useCursorWeight<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const [weights, setWeights] = useState<number[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    let frameId: number | null = null;
    let lastEvent: PointerEvent | null = null;

    const applyWeights = () => {
      frameId = null;
      const event = lastEvent;
      if (!event) return;

      const chars = container.querySelectorAll<HTMLElement>("[data-char]");
      const next: number[] = new Array(chars.length);

      chars.forEach((char, index) => {
        const rect = char.getBoundingClientRect();
        const distance = Math.hypot(
          event.clientX - (rect.left + rect.width / 2),
          event.clientY - (rect.top + rect.height / 2),
        );
        const proximity = Math.max(0, 1 - distance / RADIUS_PX);
        next[index] = Math.round(
          MIN_WEIGHT + proximity * (MAX_WEIGHT - MIN_WEIGHT),
        );
      });

      setWeights(next);
    };

    const handlePointerMove = (event: PointerEvent) => {
      lastEvent = event;
      if (frameId === null) frameId = requestAnimationFrame(applyWeights);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return { containerRef, weights };
}
