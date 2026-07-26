import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$*+=";
const FRAME_MS = 40;

export function useScramble(words: string[], holdMs = 2200) {
  const [text, setText] = useState(words[0] ?? "");
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    if (wordsRef.current.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let wordIndex = 0;
    let frameTimer: ReturnType<typeof setTimeout>;
    let holdTimer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const scrambleTo = (target: string, from: string) => {
      const length = Math.max(target.length, from.length);
      const totalSteps = length * 2;
      let step = 0;

      const tick = () => {
        if (cancelled) return;
        step += 1;
        const revealed = Math.floor((step / totalSteps) * length);
        let next = "";
        for (let i = 0; i < length; i++) {
          next +=
            i < revealed
              ? (target[i] ?? "")
              : SCRAMBLE_CHARS[
                  Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                ];
        }
        setText(next);

        if (step < totalSteps) {
          frameTimer = setTimeout(tick, FRAME_MS);
        } else {
          setText(target);
          holdTimer = setTimeout(advance, holdMs);
        }
      };

      tick();
    };

    const advance = () => {
      if (cancelled) return;
      const list = wordsRef.current;
      const from = list[wordIndex];
      wordIndex = (wordIndex + 1) % list.length;
      const target = list[wordIndex];

      if (reduceMotion) {
        setText(target);
        holdTimer = setTimeout(advance, holdMs);
      } else {
        scrambleTo(target, from);
      }
    };

    holdTimer = setTimeout(advance, holdMs);

    return () => {
      cancelled = true;
      clearTimeout(frameTimer);
      clearTimeout(holdTimer);
    };
  }, [holdMs]);

  return text;
}
