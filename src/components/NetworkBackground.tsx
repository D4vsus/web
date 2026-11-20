import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: number;
}

const LINK_DIST = 0.165;
const POINTER_DIST = 0.21;
const NODE_MIN = 0.004;
const NODE_MAX = 0.0078;
const GLOW = 0.02;
const SPEED = 0.0006;
const MIN_UNIT = 400;
const DENSITY = 50;
const MIN_NODES = 28;
const MAX_NODES = 90;

const NEON_DARK = ["#00F5FF"];
const NEON_LIGHT = ["#00B7E8"];

function isDark(): boolean {
  const theme = document.documentElement.dataset.theme;
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const context = canvasEl?.getContext("2d");
    if (!canvasEl || !context) return;
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = context;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let palette = NEON_DARK;
    let width = 0;
    let height = 0;
    let unit = MIN_UNIT;
    let dpr = 1;
    let raf = 0;
    let last = performance.now();

    function createNode(): Node {
      return {
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: NODE_MIN + Math.random() * (NODE_MAX - NODE_MIN),
        c: Math.floor(Math.random() * NEON_DARK.length),
      };
    }

    function readPalette() {
      palette = isDark() ? NEON_DARK : NEON_LIGHT;
      if (reduceMotion) draw();
    }

    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      width = w;
      height = h;
      dpr = window.devicePixelRatio || 1;
      unit = Math.max(height, MIN_UNIT);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = clamp(Math.round((width / height) * DENSITY), MIN_NODES, MAX_NODES);
      while (nodes.length < target) nodes.push(createNode());
      nodes.length = Math.min(nodes.length, target);
      draw();
    }

    function step(dt: number) {
      for (const n of nodes) {
        n.x += (n.vx * unit * dt) / width;
        n.y += (n.vy * unit * dt) / height;
        if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
        if (n.x > 1) { n.x = 1; n.vx = -Math.abs(n.vx); }
        if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
        if (n.y > 1) { n.y = 1; n.vy = -Math.abs(n.vy); }
      }
    }

    function line(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      alpha: number,
      stroke: string | CanvasGradient
    ) {
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = stroke;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    function draw() {
      if (!width || !height) return;
      const link = LINK_DIST * unit;
      const reach = POINTER_DIST * unit;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = Math.max(1, 0.0013 * unit);
      ctx.shadowBlur = 0;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ax = a.x * width;
        const ay = a.y * height;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const bx = b.x * width;
          const by = b.y * height;
          const d = Math.hypot(ax - bx, ay - by);
          if (d < link) {
            const g = ctx.createLinearGradient(ax, ay, bx, by);
            g.addColorStop(0, palette[a.c]);
            g.addColorStop(1, palette[b.c]);
            line(ax, ay, bx, by, (1 - d / link) * 0.35, g);
          }
        }
        const dp = Math.hypot(ax - pointer.x, ay - pointer.y);
        if (dp < reach) line(ax, ay, pointer.x, pointer.y, (1 - dp / reach) * 0.7, palette[a.c]);
      }

      ctx.globalAlpha = 0.95;
      for (const n of nodes) {
        ctx.fillStyle = palette[n.c];
        ctx.shadowColor = palette[n.c];
        ctx.shadowBlur = GLOW * unit * dpr;
        ctx.beginPath();
        ctx.arc(n.x * width, n.y * height, n.r * unit, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    function loop(now: number) {
      const dt = Math.min(48, now - last) / 16.67;
      last = now;
      step(dt);
      draw();
      raf = requestAnimationFrame(loop);
    }

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    readPalette();
    resize();
    if (!reduceMotion) raf = requestAnimationFrame(loop);

    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(canvas);
    window.addEventListener("resize", resize);

    const themeObserver = new MutationObserver(readPalette);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", readPalette);

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      sizeObserver.disconnect();
      themeObserver.disconnect();
      media.removeEventListener("change", readPalette);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-bg" aria-hidden="true" />;
}
