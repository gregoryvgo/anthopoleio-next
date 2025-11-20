// =============================================
// File: /components/Lightbox.jsx
// =============================================
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Lightbox({ isOpen, items, index, onClose, onChange }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, index, items.length, onClose, onChange]);

  useEffect(() => {
    if (isOpen && dialogRef.current) dialogRef.current.focus(); // γιατί: focus trap
  }, [isOpen]);

  if (!isOpen) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-50"
      aria-modal="true"
      role="dialog"
      aria-label="Προβολή εικόνας"
    >
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-10 h-full w-full flex items-center justify-center p-4"
        onKeyDown={(e) => {
          if (e.key === "Tab") e.preventDefault(); // γιατί: απλό focus trap
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white px-3 py-1.5 text-sm font-medium shadow"
          aria-label="Κλείσιμο"
        >
          Κλείσιμο
        </button>

        <button
          onClick={() => onChange((index - 1 + items.length) % items.length)}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
          aria-label="Προηγούμενη εικόνα"
        >
          ‹
        </button>

        <figure className="max-w-[95vw] max-h-[85vh] flex flex-col items-center gap-3">
          <div className="relative w-[90vw] md:w-[70vw] lg:w-[60vw] aspect-[4/3]">
            <Image
              src={item.src || "/images/placeholder.jpg"}
              alt={item.alt || item.title}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
          <figcaption className="text-white text-sm text-center">
            <span className="font-medium">{item.title}</span>
            {item.category ? <span className="opacity-80"> • {item.category}</span> : null}
          </figcaption>
        </figure>

        <button
          onClick={() => onChange((index + 1) % items.length)}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
          aria-label="Επόμενη εικόνα"
        >
          ›
        </button>
      </div>
    </div>
  );
}

// =============================================
// File: /app/gallery/GalleryClient.jsx
// (αντικατέστησε ολόκληρο το αρχείο σου με αυτό)
// =============================================
"use client";

import { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { SHOP, GALLERY, CATEGORIES } from "@/lib/shopData";
import { IconPhone, IconMail } from "@/components/Icons";
import Lightbox from "@/components/Lightbox";

export default function GalleryClient() {
  const [active, setActive] = useState("Όλα");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const filtered = useMemo(
    () =>
      GALLERY.filter(
        (g) =>
          (active === "Όλα" || g.category === active) &&
          g.title.toLowerCase().includes(query.toLowerCase())
      ),
    [active, query]
  );

  const openAt = useCallback((idx) => {
    setCurrent(idx);
    setIsOpen(true);
  }, []);

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Συλλογή</h1>
            <p className="mt-2 text-gray-700">
              Δείγματα δουλειάς. Κάνε κλικ σε εικόνα για πλήρη προβολή.
            </p>
          </div>

          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Αναζήτηση…"
              className="w-56 rounded-xl border px-3 py-2 text-sm"
              aria-label="Αναζήτηση συλλογής"
            />
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="rounded-xl border px-3 py-2 text-sm"
              aria-label="Κατηγορία"
            >
              <option>Όλα</option>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g, idx) => (
            <li
              key={g.id}
              className="group rounded-2xl border overflow-hidden bg-white"
            >
              <button
                type="button"
                onClick={() => openAt(idx)}
                className="block relative w-full aspect-[4/3] focus:outline-none"
                aria-label={`Προβολή: ${g.title}`}
              >
                <Image
                  src={g.src || "/images/placeholder.jpg"}
                  alt={g.alt || g.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </button>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">{g.title}</h2>
                  <span className="text-sm text-gray-600">{g.category}</span>
                </div>

                <div className="mt-3 flex gap-2">
                  <a
                    href={SHOP.phoneHref}
                    className="text-sm rounded-lg border px-3 py-1.5 hover:bg-gray-50 inline-flex items-center gap-1"
                  >
                    <IconPhone className="h-3 w-3" />
                    Τηλέφωνο
                  </a>
                  <a
                    href={`mailto:${SHOP.email}?subject=${encodeURIComponent(
                      "Ερώτηση για: " + g.title
                    )}`}
                    className="text-sm rounded-lg border px-3 py-1.5 hover:bg-gray-50 inline-flex items-center gap-1"
                  >
                    <IconMail className="h-3 w-3" />
                    Email
                  </a>
                </div>
              </div>
            </li>
          ))}

          {filtered.length === 0 && (
            <li className="col-span-full text-sm text-gray-600">
              Δεν βρέθηκαν αποτελέσματα για την αναζήτηση.
            </li>
          )}
        </ul>
      </div>

      <Lightbox
        isOpen={isOpen}
        items={filtered}
        index={current}
        onClose={() => setIsOpen(false)}
        onChange={setCurrent}
      />
    </section>
  );
}

// =============================================
// File: /public/images/placeholder.jpg
// Βάλε ένα μικρό placeholder (προαιρετικό).
// =============================================
