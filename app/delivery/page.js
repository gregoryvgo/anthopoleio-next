// app/delivery/page.js
import { SHOP } from "@/lib/shopData";

export const metadata = {
  title: `${SHOP.name} — Παράδοση`,
  description:
    "Παράδοση ανθοσυνθέσεων με δική μας ομάδα, χωρίς τρίτους courier. Χρόνοι παράδοσης και πρακτικές πληροφορίες.",
};

export default function DeliveryPage() {
  const baseMapUrl =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(SHOP.address) +
    "&output=embed";

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Παράδοση</h1>

        <p className="mt-3 text-gray-700">
          Παράδοση από δική μας ομάδα. Χωρίς τρίτους courier. Χωρίς online πληρωμές.
          Τα άνθη και οι συνθέσεις μεταφέρονται σε ελεγχόμενες συνθήκες και
          συσκευάζονται με προστασία. Τα χρονικά περιθώρια τηρούνται με σειρά προτεραιότητας.
        </p>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">

          {/* Ζώνη 1 – Αθήνα */}
          <div
            className="rounded-2xl border border-rose-100 p-6"
            style={{ background: "#f7f0f2" }}
          >
            <h2 className="font-semibold">Αθήνα</h2>
            <p className="mt-2 text-sm text-gray-700">
              Χρόνος παράδοσης: {SHOP.zones[0].eta}
            </p>
          </div>

          {/* Ζώνη 2 – Προάστια Αθηνών */}
          <div
            className="rounded-2xl border border-rose-100 p-6"
            style={{ background: "#f7f0f2" }}
          >
            <h2 className="font-semibold">Προάστια Αθηνών</h2>
            <p className="mt-2 text-sm text-gray-700">
              Χρόνος παράδοσης: {SHOP.zones[1].eta}
            </p>
          </div>

          {/* Ζώνη 3 – Επαρχία */}
          <div
            className="rounded-2xl border border-rose-100 p-6"
            style={{ background: "#f7f0f2" }}
          >
            <h2 className="font-semibold">Επαρχία</h2>
            <p className="mt-2 text-sm text-gray-700">
              Χρόνος παράδοσης: 1–3 εργάσιμες
            </p>
          </div>

           
          <div className="lg:col-span-3 rounded-2xl border p-6 bg-amber-50/50">
            <p className="text-sm text-amber-900">
              * Οι Ώρες παράδοσης ενδέχεται να μεταβληθούν λόγω κίνησης ή καιρού.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-rose-100">
            <iframe
              title="Χάρτης καταστήματος"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={baseMapUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
