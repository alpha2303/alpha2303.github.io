import { useEffect, useRef, useState } from "react";

export default function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const intersecting = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.current[entry.target.id] = entry.isIntersecting;
        });

        // Pick the last section (in document order) that's still touching
        // the trigger band, rather than comparing intersectionRatio: ratio
        // is relative to each section's own height, so a long section
        // (many experience cards) can never out-rank a short one (about)
        // even while it fully occupies the band.
        const lastIntersectingId = sectionIds.reduce<string | null>(
          (found, id) => (intersecting.current[id] ? id : found),
          null
        );

        if (lastIntersectingId) {
          setActiveId(lastIntersectingId);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
