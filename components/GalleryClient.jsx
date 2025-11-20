// File: /app/gallery/GalleryClient.jsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SHOP, GALLERY, CATEGORIES } from "@/lib/shopData";
import { IconPhone, IconMail } from "@/components/Icons";

export default function GalleryClient() {
  const [active, setActive] = useState("Όλα");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      GALLERY.filter(
        (g) =>
          (active === "Όλα" || g.category === active) &&
          g.title.toLowerCase().includes(query.toLowerCase())
      ),
    [active, query]
  );

  return (
    <section className="py-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Συλλογή</h1>
            <p className="mt-2 text-gray-700">
              Δείγματα δουλειάς για να εμπνευστείτε. Ζητήστε προσαρμογή στα
              γούστα σας.
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
            >
              <option>Όλα</option>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g) => (
            <li
              key={g.id}
              className="group rounded-2xl border overflow-hidden bg-white"
            >
              {/* Χρησιμοποιούμε next/image για σωστό optimization.
                 Σιγουρέψου ότι g.src ξεκινά από `/images/...` και το αρχείο υπάρχει στο public/images */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={g.src || "/images/placeholder.jpg"}
                  alt={g.alt || g.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={g.priority === true}
                />
              </div>

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
    </section>
  );
}
