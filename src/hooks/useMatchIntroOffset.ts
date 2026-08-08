import { useLayoutEffect } from "react";

const DESKTOP_BREAKPOINT = 768;
const OFFSET_VAR = "--intro-top-offset";

export default function useMatchIntroOffset(): void {
  useLayoutEffect(() => {
    const container = document.querySelector<HTMLElement>(".container");
    const intro = document.querySelector<HTMLElement>(".intro-container");
    if (!container || !intro) return;

    const measure = () => {
      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        document.documentElement.style.removeProperty(OFFSET_VAR);
        return;
      }
      const containerTop = container.getBoundingClientRect().top;
      const introTop = intro.getBoundingClientRect().top;
      document.documentElement.style.setProperty(
        OFFSET_VAR,
        `${introTop - containerTop}px`
      );
    };

    let frame = 0;
    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("resize", scheduleMeasure);
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, []);
}
