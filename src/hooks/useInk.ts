import { useEffect } from "react";
import type { RefObject } from "react";

export function useInk(ref: RefObject<HTMLElement>): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const letters = Array.from(el.querySelectorAll<HTMLElement>(".ch"));

    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      letters.forEach((l) => {
        const r = l.getBoundingClientRect();
        const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
        const p = Math.max(0, 1 - d / 220);
        l.style.fontVariationSettings = `"wght" ${Math.round(450 + 350 * p)}`;
      });
    };
    const reset = () => letters.forEach((l) => (l.style.fontVariationSettings = ""));

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", reset);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", reset);
    };
  }, [ref]);
}
