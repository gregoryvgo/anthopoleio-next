// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { SHOP } from "@/lib/shopData";
import { IconLeaf, IconPhone, IconMail } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NAV = [
    ["Αρχική", "/"],
    ["Σχετικά", "/about"],
    ["Υπηρεσίες", "/services"],
    ["Συλλογή", "/gallery"],
    // ["Εκδηλώσεις", "/events"],
    ["Παράδοση", "/delivery"],
    ["Συχνές Ερωτήσεις", "/faq"],
    ["Επικοινωνία", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-40 /80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label={SHOP.name}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
              <IconLeaf className="h-6 w-6 text-pink-700" />
            </span>
            <span className="text-lg font-semibold tracking-tight">{SHOP.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 mr-10" aria-label="Κύρια πλοήγηση">
            {NAV.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-base text-black hover:underline underline-offset-4 decoration-pink-500"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={SHOP.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
            >
              <IconPhone className="h-4 w-4" />
              Κάλεσέ μας
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-3 py-2 text-sm text-white hover:bg-pink-700"
            >
              <IconMail className="h-4 w-4" />
              Ζήτα Προσφορά
            </Link>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border"
            aria-label="Μενού"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Μενού</span>
            <div className="h-4 w-4 border-t-2 border-b-2 border-gray-900" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white" role="dialog" aria-label="Μενού κινητού">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {NAV.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-lg text-black py-2 hover:underline underline-offset-4 decoration-pink-500"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={SHOP.phoneHref}
              className="mt-2 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
            >
              <IconPhone className="h-4 w-4" />
              Κάλεσέ μας
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-3 py-2 text-sm text-white hover:bg-pink-700"
            >
              <IconMail className="h-4 w-4" />
              Ζήτα Προσφορά
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
