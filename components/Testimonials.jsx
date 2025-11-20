// components/Testimonials.jsx
"use client";

import Image from "next/image";

const FALLBACK_AVATAR = "/images/placeholder-avatar.png";

const DEFAULT_TESTIMONIALS = [
  {
    id: "user1",
    name: "Γιώργος Κ.",
    quote:
      "Έκανα παραγγελία για δώρο τελευταίας στιγμής και με εξυπηρέτησαν άμεσα. Το μπουκέτο ήταν φρέσκο, προσεγμένο και με πολύ όμορφο δέσιμο. Η παράδοση έγινε ακριβώς στην ώρα της και μου έστειλαν φωτογραφία πριν φύγει.",
    avatar: "/images/avatars/user1.webp",
  },
  {
    id: "user2",
    name: "Ανδρέας Μ.",
    quote:
      "Τους επέλεξα για στολισμό εταιρικής εκδήλωσης. Οι συνθέσεις ήταν κομψές και ακριβώς στο ύφος που ζητήσαμε. Ο συντονισμός ήταν άψογος και όλα έγιναν χωρίς καμία καθυστέρηση. Πολύ επαγγελματική δουλειά.",
    avatar: "/images/avatars/user2.webp",
  },
  {
    id: "user3",
    name: "Ελένη Κ.",
    quote:
      "Ζήτησα ένα μπουκέτο για δώρο και μου έφτιαξαν κάτι πραγματικά όμορφο και ισορροπημένο. Φρέσκα λουλούδια, ωραίο δέσιμο και πολύ καλή εξυπηρέτηση. Μου άρεσε που πριν την παράδοση μου έστειλαν φωτογραφία για επιβεβαίωση.",
    avatar: "/images/avatars/user3.webp",
  },
];

export default function Testimonials({ items = DEFAULT_TESTIMONIALS }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900">
          Τι λένε οι πελάτες μας
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {items.map((t) => (
            <li
              key={t.id}
              className="relative h-full flex flex-col rounded-3xl border border-rose-100 bg-gradient-to-b from-rose-50/70 to-white/70 p-6 sm:p-8 shadow-sm"
            >
              <div className="pointer-events-none select-none text-3xl text-pink-600 text-center mb-4">
                &quot;
              </div>

              <p className="text-gray-800 leading-relaxed text-sm sm:text-base text-center">
                {t.quote}
              </p>

              <div className="mt-auto pt-6 flex items-center justify-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-rose-200">
                  <Image
                    src={t.avatar || FALLBACK_AVATAR}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold text-gray-900">{t.name}</span>
              </div>

              <div className="absolute inset-0 rounded-3xl ring-1 ring-rose-200/60 pointer-events-none" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
