// app/about/page.js
import { SHOP } from "@/lib/shopData";
import { IconMap, IconPhone, IconMail } from "@/components/Icons";

export const metadata = {
  title: `${SHOP.name} — Σχετικά`,
  description:
    "Ανεξάρτητο ανθοπωλείο στην Αθήνα με εποχικά άνθη, τεχνική κατάρτιση και δημιουργικότητα. Στολισμοί, μπουκέτα και εκδηλώσεις με συνέπεια.",
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Σχετικά με {SHOP.name}
            </h1>

            <p className="mt-4 text-gray-700">
              Η {SHOP.name} ιδρύθηκε στην Αθήνα με σκοπό να προσφέρει υψηλής
              ποιότητας ανθοσυνθέσεις και δημιουργικές λύσεις ανθοδιακόσμησης.
              Με έμφαση στη λεπτομέρεια και στην προσωπική εξυπηρέτηση,
              συνεχίζουμε να εξελισσόμαστε και να προσφέρουμε σύγχρονη
              αισθητική σε κάθε έργο.
            </p>

            <div className="mt-6 grid gap-6">
              <div className="rounded-2xl border p-6">
                <p className="text-sm text-gray-600">Πορεία & Αποστολή</p>
                <p className="mt-2 text-sm text-gray-700">
                  Ξεκινήσαμε ως μικρό μαγαζί το 2014 χωρίς την βοήθεια τρίτων και
                  εξελιχθήκαμε σε ένα πλήρως εξοπλισμένο και καταρτισμένο ανθοπωλείο.
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Αποστολή μας είναι να μεταμορφώνουμε χώρους και να γεμίζουμε συναισθήματα τους ανθρώπους.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Προσφέρουμε προσαρμοσμένες λύσεις που σέβονται την αισθητική,
                  το περιβάλλον και την οικονομική δυνατότητα του πελάτη.
                </p>
              </div>

              {/* Το box Υπηρεσίες έχει αφαιρεθεί εντελώς */}

              <div className="rounded-2xl border p-6">
                <p className="text-sm text-gray-600">Όραμα & Αξίες</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>
                    <strong>Ποιότητα:</strong> Προσεκτική επιλογή φρέσκων υλικών.
                  </li>
                  <li>
                    <strong>Δημιουργικότητα:</strong> Προσωποποιημένες προτάσεις με αισθητική συνέπεια.
                  </li>
                  <li>
                    <strong>Ειλικρίνεια:</strong> Διαφάνεια στην επικοινωνία και στην παροχή υπηρεσιών.
                  </li>
                  <li>
                    <strong>Βιωσιμότητα:</strong> Στήριξη τοπικών παραγωγών & υπεύθυνος τρόπος δουλειάς.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border p-6">
                <p className="text-sm text-gray-600">Ορόσημα</p>
                <ol className="mt-2 text-sm text-gray-700 list-decimal pl-5 space-y-1">
                  <li>2014 — Ξεκίνησε το πρώτο μικρό κατάστημα στην Αθήνα.</li>
                  <li>2016 — Διεύρυνση συνεργασιών με Έλληνες παραγωγούς.</li>
                  <li>2019 — Σταθερή παρουσία σε γάμους και μεγάλες εκδηλώσεις.</li>
                  <li>2022 — Υιοθέτηση πιο οικολογικών πρακτικών παραγωγής.</li>
                </ol>
              </div>

              <div className="rounded-2xl border p-6">
                <p className="text-sm text-gray-600">Η ομάδα μας</p>
                <p className="mt-2 text-sm text-gray-700">
                  Η ομάδα μας αποτελείται από ανθοδέτες και δημιουργούς με εμπειρία
                  στον σχεδιασμό και στη διακόσμηση εκδηλώσεων. Επενδύουμε συνεχώς
                  στην εξέλιξη και στην εκπαίδευσή μας, ώστε κάθε αποτέλεσμα να
                  υπερβαίνει τις προσδοκίες.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <p className="text-sm text-gray-600">Στόχοι</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Επέκταση συνεργασιών με επαγγελματικούς χώρους.</li>
                  <li>Περισσότερες πράσινες πρακτικές & οικολογική προσέγγιση.</li>
                  <li>Συνεχής αισθητική αναβάθμιση των ανθοδετικών μας λύσεων.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ASIDE — ΑΝΕΠΑΦΟ */}
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
