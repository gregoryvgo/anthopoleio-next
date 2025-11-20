// components/HeroSlider.jsx
"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/lib/shopData";

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        src: "/images/slide1.webp",
        alt: "Τουλίπες pastel",
        title: "Φρέσκες Τουλίπες",
        subtitle: "Παραγγελία για σήμερα",
        cta: { label: "Δες συλλογή", href: "/gallery" },
      },
      {
        src: "/images/slide2.webp",
        alt: "Κόκκινο μπουκέτο",
        title: "Κλασικά Τριαντάφυλλα",
        subtitle: "Ιδανικά για επέτειο",
        cta: { label: "Επικοινωνία", href: "/contact" },
      },
      {
        src: "/images/slide3.webp",
        alt: "Παιώνιες",
        title: "Ρομαντικές Παιώνιες",
        subtitle: "Εποχικές συνθέσεις",
        cta: { label: "Μάθε Περισσότερα", href: "/faq" },
      },
    ],
    []
  );

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchRef = useRef({ x: 0, y: 0, t: 0 });

  const [prefersReducedMotion, setPRM] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPRM(!!m.matches);
    update();
    m.addEventListener?.("change", update);
    return () => m.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const onVis = () => setPaused((p) => (document.hidden ? true : p));
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Auto-slide 4s, pause μόνο στο CTA box
  useEffect(() => {
    if (paused || prefersReducedMotion || document.hidden || slides.length === 0) return;
    intervalRef.current = setInterval(() => {
      setI((n) => (n + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [paused, prefersReducedMotion, slides.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setI((n) => (n + 1) % slides.length);
      if (e.key === "ArrowLeft") setI((n) => (n - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  const onTouchStart = (e) => {
    setPaused(true);
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  };
  const onTouchEnd = (e) => {
    const dt = Date.now() - touchRef.current.t;
    const dx = (e.changedTouches[0]?.clientX || 0) - touchRef.current.x;
    if (dt <= 800 && Math.abs(dx) >= 40) {
      setI((n) =>
        dx > 0 ? (n - 1 + slides.length) % slides.length : (n + 1) % slides.length
      );
    }
    setPaused(false);
  };

  return (
    <section
      className="relative w-full h-[100svh] md:h-screen overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Κύριο slider"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0">
        {slides.map((s, idx) => {
          const isActive = i === idx;
          return (
            <div
              key={idx}
              className={classNames(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                isActive
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              )}
              aria-hidden={!isActive}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={idx === 0}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

              <div
                className={classNames(
                  "absolute bottom-6 left-5 right-5 sm:left-10 sm:right-auto sm:max-w-xl text-white",
                  "transition-transform duration-[750ms]",
                  isActive ? "animate-[bounceIn_0.8s_ease-out]" : "opacity-0"
                )}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {s.title && (
                  <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                    {s.title}
                  </h2>
                )}
                {s.subtitle && (
                  <p className="mt-1 text-sm sm:text-base opacity-90">
                    {s.subtitle}
                  </p>
                )}

                {s.cta?.href && (
                  <Link
                    href={s.cta.href}
                    className="
                      mt-3 inline-block rounded-xl px-4 py-2 text-sm font-medium text-gray-900
                      transition-all duration-300
                      hover:scale-[1.05] hover:shadow-lg
                    "
                    style={{ background: "#f7f0f2" }}
                    prefetch
                  >
                    {s.cta.label}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* SR only */}
      <p className="sr-only" aria-live="polite">
        Διαφάνεια {i + 1} από {slides.length}: {slides[i].alt}
      </p>

      {/* Dots — τώρα είναι πάνω από τα slides και clickable */}
      <div className="absolute bottom-3 left-0 right-0 z-20 pointer-events-auto flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Μετάβαση στη διαφάνεια ${idx + 1}`}
            aria-pressed={i === idx}
            className={classNames(
              "h-2.5 w-2.5 rounded-full transition outline-none",
              i === idx ? "bg-pink-600" : "bg-white/70 hover:bg-white",
              "focus:ring-2 focus:ring-white/80"
            )}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
