// components/CookieBar.jsx
"use client";

import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) {
        setState(JSON.parse(raw));
      }
    } catch {
      // ignore
    }
  }, [key]);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [key, state]);

  return [state, setState];
}

export default function CookieBar() {
  const [accepted, setAccepted] = useLocalStorage("cookie-consent", false);
  if (accepted) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p>Χρησιμοποιούμε βασικά cookies για λειτουργικότητα (χωρίς tracking).</p>
        <div className="flex gap-2">
          <button
            onClick={() => setAccepted(true)}
            className="rounded-lg bg-pink-600 px-3 py-2 text-white"
          >
            ΟΚ
          </button>
          <button
            onClick={() => setAccepted(true)}
            className="rounded-lg border px-3 py-2 hover:bg-gray-50"
          >
            Απόρριψη
          </button>
        </div>
      </div>
    </div>
  );
}
