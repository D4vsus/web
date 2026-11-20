import { useEffect, useState } from "react";
import type { Theme } from "../types";

const KEY = "theme";

const isTheme = (value: string | null | undefined): value is Theme =>
  value === "light" || value === "dark";

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme | null>(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {
      
    }
    const fromRoot = document.documentElement.dataset.theme;
    if (isTheme(saved)) return saved;
    return isTheme(fromRoot) ? fromRoot : null;
  });

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current: Theme = theme ?? (systemDark ? "dark" : "light");

  const toggle = () => {
    const next: Theme = current === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // ignore
    }
  };

  return [current, toggle];
}
