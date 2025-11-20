"use client";

import { useState } from "react";
import Link from "next/link";
import { IconPhone, IconMail, IconMap } from "@/components/Icons";
import { SHOP } from "@/lib/shopData";

function validatePhone(value) {
  return (
    /^(\+?30)?\s?6\d{8}$/.test(value) ||
    /^(\+?30)?\s?2\d{9}$/.test(value)
  );
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    address: "",
    message: "",
    policy: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};

    if (!form.name.trim()) e.name = "Απαιτείται ονοματεπώνυμο";
    if (!validatePhone(form.phone)) e.phone = "Μη έγκυρο τηλέφωνο";
    if (form.email && !validateEmail(form.email)) e.email = "Μη έγκυρο email";
    if (!form.policy) e.policy = "Απαιτείται αποδοχή πολιτικής";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
  }

  return (
    <section className="py-16 bg-[var(--background)] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Επικοινωνία</h1>
        <p className="mt-3 text-gray-700 max-w-2xl">
          Συμπληρώστε τη φόρμα για προσφορά, κράτηση ημερομηνίας ή απορίες
          σχετικά με ανθοσυνθέσεις και στολισμούς. Δεν πραγματοποιούμε online
          πληρωμές· η επικοινωνία γίνεται τηλεφωνικά.
        </p>

        {/* Grid: Αριστερά φόρμα, δεξιά στοιχεία καταστήματος */}
        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          {/* Αριστερά: Φόρμα */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border p-6 premium-card">
              {submitted ? (
                <div className="p-6 text-center">
                  <p className="text-xl font-semibold">Ευχαριστούμε!</p>
                  <p className="mt-2 text-gray-700">
                    Λάβαμε το αίτημά σας. Θα επικοινωνήσουμε μαζί σας το
                    συντομότερο δυνατό τηλεφωνικά.
                  </p>

                  <div className="mt-4 flex justify-center gap-3">
                    <a
                      href={SHOP.phoneHref}
                      className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      Κλήση στο ανθοπωλείο
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setForm({
                          name: "",
                          phone: "",
                          email: "",
                          date: "",
                          time: "",
                          address: "",
                          message: "",
                          policy: false,
                        });
                        setErrors({});
                        setSubmitted(false);
                      }}
                      className="rounded-lg bg-pink-600 px-3 py-2 text-sm text-white hover:bg-pink-700"
                    >
                      Νέα φόρμα
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm">
                        Ονοματεπώνυμο
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        required
                        className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm ${
                          errors.name ? "border-red-400" : ""
                        }`}
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm">
                        Τηλέφωνο
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm ${
                          errors.phone ? "border-red-400" : ""
                        }`}
                        value={form.phone}
                        placeholder="69XXXXXXXX"
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm">
                        Email (προαιρετικό)
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm ${
                          errors.email ? "border-red-400" : ""
                        }`}
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="date" className="text-sm">
                        Ημερομηνία
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                        value={form.date}
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="text-sm">
                        Ώρα
                      </label>
                      <input
                        id="time"
                        type="time"
                        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                        value={form.time}
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="text-sm">
                        Διεύθυνση παράδοσης (αν υπάρχει)
                      </label>
                      <input
                        id="address"
                        type="text"
                        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                        value={form.address}
                        onChange={(e) =>
                          setForm({ ...form, address: e.target.value })
                        }
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="text-sm">
                        Μήνυμα
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                        value={form.message}
                        placeholder="Περιγράψτε περίσταση, χρώματα, ύφος, προϋπολογισμό…"
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                      />
                    </div>

                    <div className="sm:col-span-2 flex items-start gap-2">
                      <input
                        id="policy"
                        type="checkbox"
                        className="mt-1"
                        checked={form.policy}
                        onChange={(e) =>
                          setForm({ ...form, policy: e.target.checked })
                        }
                      />
                      <label htmlFor="policy" className="text-sm text-gray-700">
                        Συμφωνώ με την επεξεργασία των δεδομένων μου
                        αποκλειστικά για επικοινωνία προσφοράς.
                      </label>
                    </div>
                  </div>

                  {errors.policy && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.policy}
                    </p>
                  )}

                  <div className="mt-4 flex gap-3">
                    <button
                      type="submit"
                      className="rounded-lg bg-pink-600 px-4 py-2 text-sm text-white hover:bg-pink-700"
                    >
                      Αποστολή αιτήματος
                    </button>

                    <Link
                      href="/"
                      className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Κλείσιμο
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Δεξιά: ίδιο card με τη σελίδα «Σχετικά» */}
          <aside className="rounded-2xl border p-6 bg-pink-50/50">
            <h2 className="font-semibold">Στοιχεία καταστήματος</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2">
                <IconMap className="h-4 w-4 text-pink-700" />
                {SHOP.address}
              </li>
              <li className="flex gap-2">
                <IconPhone className="h-4 w-4 text-pink-700" />
                <a
                  href={SHOP.phoneHref}
                  className="underline decoration-pink-300"
                >
                  {SHOP.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <IconMail className="h-4 w-4 text-pink-700" />
                <a
                  href={`mailto:${SHOP.email}`}
                  className="underline decoration-pink-300"
                >
                  {SHOP.email}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h3 className="text-sm font-medium">Ωράριο</h3>
              <ul className="mt-2 text-sm text-gray-700">
                {SHOP.hours.map((h) => (
                  <li
                    key={h.d}
                    className="flex justify-between border-b py-1 last:border-0"
                  >
                    <span>{h.d}</span>
                    <span>{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
