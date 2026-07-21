"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { author } from "@/lib/site-config";

type Node = { x: number; y: number; layer: number; r: number };
type Pulse = { from: number; to: number; t: number; speed: number };

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      return;
    }

    const context = ctx;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let running = true;
    let mouse = { x: -9999, y: -9999 };

    const LAYERS = 5;
    const NODES_PER_LAYER = [5, 7, 8, 7, 5];

    function buildGraph() {
      nodes = [];
      edges = [];
      const layerGap = width / (LAYERS + 1);
      for (let l = 0; l < LAYERS; l++) {
        const count = NODES_PER_LAYER[l];
        const gap = height / (count + 1);
        for (let i = 0; i < count; i++) {
          nodes.push({
            x: layerGap * (l + 1),
            y: gap * (i + 1) + (Math.sin(i * 12.9 + l) * 6),
            layer: l,
            r: l === 2 ? 2.6 : 2,
          });
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[j].layer === nodes[i].layer + 1) {
            if (Math.random() < 0.55) edges.push([i, j]);
          }
        }
      }
      pulses = [];
      for (let i = 0; i < 26; i++) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        if (e) pulses.push({ from: e[0], to: e[1], t: Math.random(), speed: 0.0035 + Math.random() * 0.004 });
      }
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGraph();
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      // edges
      for (const [a, b] of edges) {
        const n1 = nodes[a];
        const n2 = nodes[b];
        const dx = mouse.x - (n1.x + n2.x) / 2;
        const dy = mouse.y - (n1.y + n2.y) / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / 220);
        context.strokeStyle = `rgba(76, 141, 255, ${0.05 + proximity * 0.18})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(n1.x, n1.y);
        context.lineTo(n2.x, n2.y);
        context.stroke();
      }

      // pulses (attention paths)
      for (const p of pulses) {
        if (!reduceMotion) p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          const e = edges[Math.floor(Math.random() * edges.length)];
          if (e) {
            p.from = e[0];
            p.to = e[1];
          }
        }
        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        if (!n1 || !n2) continue;
        const x = n1.x + (n2.x - n1.x) * p.t;
        const y = n1.y + (n2.y - n1.y) * p.t;
        const grad = context.createRadialGradient(x, y, 0, x, y, 5);
        grad.addColorStop(0, "rgba(255, 180, 84, 0.9)");
        grad.addColorStop(1, "rgba(255, 180, 84, 0)");
        context.fillStyle = grad;
        context.beginPath();
        context.arc(x, y, 5, 0, Math.PI * 2);
        context.fill();
      }

      // nodes
      for (const n of nodes) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / 180);
        context.fillStyle = `rgba(231, 235, 243, ${0.35 + proximity * 0.5})`;
        context.beginPath();
        context.arc(n.x, n.y, n.r + proximity * 1.5, 0, Math.PI * 2);
        context.fill();
      }
    }

    function loop() {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: MouseEvent) {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;

      const rect = currentCanvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !raf) loop();
        if (!running && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0.05 }
    );

    resize();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    if (reduceMotion) {
      draw();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />

      <div className="relative mx-auto max-w-content px-6 pb-28 pt-24 md:pt-32">
        <p className="mono-label text-signal">
          Open Source · Educational Transformer Project
        </p>
        <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl">
          A GPT-style Transformer,{" "}
          <span className="text-ink-muted">built from first principles.</span>
        </h1>
        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
          Mini LLM From Scratch is an educational implementation of a GPT-style
          decoder-only Transformer built with Python and PyTorch. From tokenization
          and embeddings to self-attention, training, and autoregressive text
          generation, every core component is implemented to help learners understand
          how modern language models work from first principles.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={author.repository}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring group flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5"
          >
            <Github size={16} />
            View on GitHub
          </a>
          <Link
            href="/documentation"
            className="focus-ring group flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal"
          >
            Read the documentation
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/architecture"
            className="focus-ring group flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal"
          >
            Explore Architecture
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
