// File: lib/shopData.js
// Εισαγωγή generated IMAGES, fallback σε χειροκίνητο ή placeholder.

export const SHOP = {
  name: "Ανθοπωλείο Δοκιμαστικό",
  phone: "+30 210 000 0000",
  phoneHref: "tel:+302100000000",
  whatsapp: "https://wa.me/302100000000",
  email: "info@anthopoleio-dokimastiko.gr",
  address: "Λεωφόρος Δοκιμής 123, Αθήνα 10400",
  hours: [
    { d: "Δευτέρα", h: "09:00–21:00" },
    { d: "Τρίτη", h: "09:00–21:00" },
    { d: "Τετάρτη", h: "09:00–21:00" },
    { d: "Πέμπτη", h: "09:00–21:00" },
    { d: "Παρασκευή", h: "09:00–21:00" },
    { d: "Σάββατο", h: "10:00–18:00" },
    { d: "Κυριακή", h: "Κλειστά" },
  ],
  zones: [
    { zone: "Ζώνη Α (κέντρο)", fee: 4.5, eta: "1–3 ώρες" },
    { zone: "Ζώνη Β (γειτονικοί δήμοι)", fee: 6.9, eta: "2–5 ώρες" },
    { zone: "Ζώνη Γ (προάστια)", fee: 9.9, eta: "ίδια μέρα αν πριν 14:00" },
  ],
};

export const CATEGORIES = [
  "Μπουκέτα",
  "Συνθέσεις",
  "Γάμος",
  "Βάπτιση",
  "Εσωτερικού Χώρου",
  "Στεφάνια",
];

export const FAQ = [
  { q: "Προσφέρετε αυθημερόν παράδοση;", a: "Ναι, για παραγγελίες έως 14:00 στις Ζώνες Α και Β. Στη Ζώνη Γ κατόπιν διαθεσιμότητας." },
  { q: "Δέχεστε πληρωμές online;", a: "Πληρωμή με POS στο κατάστημα ή αντικαταβολή στον διανομέα." },
  { q: "Μπορώ να ζητήσω συγκεκριμένα λουλούδια;", a: "Ναι, ανάλογα με την εποχικότητα και τη διαθεσιμότητα." },
  { q: "Κάνετε στολισμούς εκδηλώσεων;", a: "Ναι, για γάμους, βαπτίσεις, εταιρικά events. Κλείστε ραντεβού αξιολόγησης." },
  { q: "Παρέχετε κάρτα με ευχές;", a: "Περιλαμβάνεται δωρεάν σε κάθε παραγγελία." },
];

export function classNames(...v) { return v.filter(Boolean).join(" "); }
export function validatePhone(value) {
  return /^(\+?30)?\s?6\d{8}$/.test(value) || /^(\+?30)?\s?2\d{9}$/.test(value);
}
export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
export function formatPrice(eur) {
  return new Intl.NumberFormat("el-GR", { style: "currency", currency: "EUR" }).format(eur);
}

// Fallback SVG (μένει για όταν δεν υπάρχουν αρχεία)
export function svgPlaceholder(title, subtitle) {
  const svg = `<?xml version='1.0' encoding='UTF-8'?>
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
  <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0%' stop-color='#fde2e2'/><stop offset='100%' stop-color='#fce7f3'/>
  </linearGradient></defs>
  <rect width='800' height='600' fill='url(#g)'/>
  <g font-family='system-ui, -apple-system, Segoe UI, Roboto' fill='#111827'>
    <text x='400' y='300' text-anchor='middle' dominant-baseline='middle' font-size='28'>${SHOP.name}</text>
    <text x='400' y='340' text-anchor='middle' dominant-baseline='middle' font-size='18' fill='#374151'>${subtitle}</text>
    <text x='400' y='380' text-anchor='middle' dominant-baseline='middle' font-size='16' fill='#6b7280'>${title}</text>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ---- ΣΤΑΤΙΚΟ IMPORT ΤΟΥ JSON (χωρίς await/dynamic) ----
// ΠΡΕΠΕΙ να υπάρχει πάντα το αρχείο: lib/images.generated.json (έστω [])
import GENERATED from "./images.generated.json";

// Επιπλέον χειροκίνητες εγγραφές (προαιρετικό)
const MANUAL = [
  // Παράδειγμα:
  // { file: "tulips.webp", title: "Τουλίπες", category: "Μπουκέτα", alt: "Τουλίπες pastel" },
];

const IMAGES = [...GENERATED, ...MANUAL];

export const GALLERY =
  IMAGES.length > 0
    ? IMAGES.map((it, i) => ({
        id: i + 1,
        title: it.title,
        category: it.category,
        price: 18 + (i % 7) * 7,
        src: `/images/${it.file}`,                 // υποστηρίζει και υποφακέλους
        alt: it.alt || `${it.category} • ${it.title}`,
        priority: i < 3,
      }))
    : Array.from({ length: 36 }).map((_, i) => {
        const cat = CATEGORIES[i % CATEGORIES.length];
        const title = `${cat} #${i + 1}`;
        return {
          id: i + 1,
          title,
          category: cat,
          price: 18 + (i % 7) * 7,
          src: svgPlaceholder(title, cat),
          alt: `${cat} δείγμα ${i + 1}`,
        };
      });
