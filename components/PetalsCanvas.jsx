// components/PetalsCanvas.jsx
"use client";

import { useEffect, useRef } from "react";

export default function PetalsCanvas({ density = 18 }) {
  const ref = useRef(null);
  const stopRef = useRef(false);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Φορτώνουμε ΜΙΑ φορά την εικόνα του τριαντάφυλλου
    const roseImg = new Image();
    roseImg.src = "/images/rose.webp"; // βάλε το αρχείο στο /public/images/rose.webp
    let imageLoaded = false;
    roseImg.onload = () => {
      imageLoaded = true;
    };

    class Rose {
      constructor(initial = false) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.size = 20 + Math.random() * 26; // μικρά τριαντάφυλλα ~20–46px
        this.x = Math.random() * w;
        this.y = initial ? Math.random() * h : -this.size - 10;

        // ελαφριά πτώση, σαν φύλλο δέντρου
        this.vx = -0.15 + Math.random() * 0.3; // μικρή οριζόντια κίνηση
        this.vy = 0.35 + Math.random() * 0.5;  // ήπια πτώση

        this.swayA = Math.random() * Math.PI * 2;
        this.swayV = 0.004 + Math.random() * 0.01;

        this.spin = Math.random() * Math.PI * 2;
        this.spinV = (Math.random() * 0.01 - 0.005); // πολύ ελαφριά περιστροφή

        this.alpha = 0.6 + Math.random() * 0.35; // 0.6–0.95
        this.depth = 0.7 + Math.random() * 0.8; // “βάθος”: επηρεάζει ταχύτητα & μέγεθος ελαφρά
      }

      step() {
        this.swayA += this.swayV;
        this.spin += this.spinV;

        const swayOffset = Math.sin(this.swayA) * 0.5 * this.depth;

        this.x += this.vx + swayOffset * 0.3;
        this.y += this.vy * this.depth;

        // αν βγει τελείως από κάτω ή πολύ δεξιά/αριστερά → ξαναγυρνά από πάνω
        if (
          this.y - this.size > h + 40 ||
          this.x + this.size < -40 ||
          this.x - this.size > w + 40
        ) {
          this.reset(false);
        }
      }

      draw(c) {
        if (!imageLoaded) return;

        const s = this.size * (0.7 + this.depth * 0.3); // λίγο διαφορετικά μεγέθη
        c.save();
        c.globalAlpha = this.alpha;

        // μικρή σκιά για βάθος
        c.shadowColor = "rgba(0,0,0,0.18)";
        c.shadowBlur = 6 * (2 - Math.min(this.depth, 1.5));

        c.translate(this.x, this.y);
        c.rotate(this.spin);

        // κεντράρισμα της εικόνας στο σημείο
        c.drawImage(roseImg, -s / 2, -s / 2, s, s);

        c.restore();
      }
    }

    const count = prefersReduced
      ? Math.max(6, Math.round(density / 3))
      : density;

    const roses = Array.from({ length: count }, (_, i) => new Rose(true));

    let rafId;

    const tick = () => {
      if (stopRef.current) return;

      ctx.clearRect(0, 0, w, h);

      for (const r of roses) {
        r.step();
        r.draw(ctx);
      }

      rafId = requestAnimationFrame(tick);
    };

    const onVis = () => {
      stopRef.current = document.hidden;
      if (!document.hidden) {
        tick();
      }
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);

    stopRef.current = false;
    tick();

    return () => {
      stopRef.current = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
