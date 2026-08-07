import { useEffect, useRef, useState } from "react";

export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join("|");
  const visible = useRef(new Map<string, boolean>());

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.current.set(entry.target.id, entry.isIntersecting);
        });
        const next = ids.find((id) => visible.current.get(id)) ?? null;
        setActive(next);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      visible.current.clear();
    };
  }, [key]);

  return active;
}
