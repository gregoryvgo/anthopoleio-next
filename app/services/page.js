// app/services/page.js
import { SHOP, formatPrice } from "@/lib/shopData";
import { IconLeaf, IconGift, IconCalendar, IconTruck } from "@/components/Icons";

export const metadata = {
  title: `${SHOP.name} — Υπηρεσίες`,
  description:
    "Μπουκέτα κατά παραγγελία, συνθέσεις, στολισμοί γάμων και εκδηλώσεων, παράδοση με δική μας ομάδα στις γύρω περιοχές της Αθήνας.",
};

export default function ServicesPage() {
  const items = [
    {
      icon: IconLeaf,
      title: "Μπουκέτα κατά παραγγελία",
      desc: "Επιλογή χρωματικής παλέτας, ύφους και προϋπολογισμού.",
      from: 25,
    },
    {
      icon: IconGift,
      title: "Συνθέσεις & κουτιά λουλουδιών",
      desc: "Minimal, ρομαντικές, boho ή statement δημιουργίες.",
      from: 35,
    },
    {
      icon: IconCalendar,
      title: "Γάμοι & βαπτίσεις",
      desc: "Νυφικά μπουκέτα, στολισμοί εκκλησίας/δεξίωσης, centerpiece.",
      from: 180,
    },
    {
      icon: IconTruck,
      title: "Παράδοση",
      desc: "Ίδια μέρα σε Ζώνες Α/Β. Προσεκτική μεταφορά από δική μας ομάδα.",
      from: 0,
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Υπηρεσίες</h1>
        <p className="mt-3 text-gray-700">
          Ενδεικτικές υπηρεσίες και αρχικές τιμές. Ζητήστε εξατομικευμένη
          προσφορά. Συνεργαζόμαστε μαζί σας για να ορίσουμε παλέτα, ύφος και
          πρακτικές λεπτομέρειες, ώστε το αποτέλεσμα να είναι συνεπές και
          λειτουργικό.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border p-6">
              <it.icon className="h-8 w-8 text-pink-700" />
              <h2 className="mt-4 font-semibold">{it.title}</h2>
              <p className="mt-2 text-sm text-gray-700">{it.desc}</p>
              <p className="mt-3 text-sm text-gray-900">
                από {formatPrice(it.from)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
