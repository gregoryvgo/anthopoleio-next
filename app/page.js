// app/page.js
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";
import PetalsCanvas from "@/components/PetalsCanvas";
import { SHOP } from "@/lib/shopData";
import { IconPhone, IconMail, IconCalendar, IconLeaf } from "@/components/Icons";

export const metadata = {
  title: `${SHOP.name} — Αρχική`,
  description:
    "Ανθοπωλείο στην Αθήνα. Μπουκέτα, συνθέσεις, στολισμοί εκδηλώσεων. Εξειδικευμένες ανθοσυνθέσεις υψηλής αισθητικής με συνέπεια και άριστη εξυπηρέτηση.",
};

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">

        {/* FULL-WIDTH SLIDER */}
        <HeroSlider />

        {/* Canvas πέταλα πίσω από όλα */}
        <PetalsCanvas density={26} />

        {/* Φωτεινά blurs */}
        <div aria-hidden className="absolute inset-0 -z-20">
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-pink-100 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] rounded-full bg-rose-100 blur-3xl opacity-60" />
        </div>

        {/* Κύριο περιεχόμενο κάτω από το slider */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Αριστερή στήλη */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mt-4">
                Εξειδικευμένες ανθοσυνθέσεις υψηλής αισθητικής για κάθε περίσταση.
              </h1>

              <p className="mt-4 text-lg text-gray-700">
                Σχεδιάζουμε και υλοποιούμε ανθοσυνθέσεις με έμφαση στην αισθητική,
                την ποιότητα και τη συνέπεια. Εργαζόμαστε με εποχικά άνθη από
                επιλεγμένους παραγωγούς και παρέχουμε καθοδήγηση από την επιλογή
                παλέτας έως την παράδοση. Παραγγελία με ένα τηλεφώνημα ή μήνυμα.
              </p>

              {/* CTA buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={SHOP.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-5 py-3 text-white hover:bg-pink-700"
                >
                  <IconPhone className="h-5 w-5" /> Κάλεσέ μας τώρα
                </a>
                <a
                  href={`mailto:${SHOP.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-gray-900 hover:bg-gray-50"
                >
                  <IconMail className="h-5 w-5" /> Στείλε Email
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-gray-900 hover:bg-gray-50"
                >
                  <IconCalendar className="h-5 w-5" /> Κράτηση/Προσφορά
                </a>
              </div>

              {/* Points */}
              <ul className="mt-6 grid gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-600" />
                  Παράδοση με ίδια ομάδα, όχι courier τρίτων
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-600" />
                  Δωρεάν κάρτα ευχών σε κάθε αποστολή
                </li>
              </ul>
            </div>

            {/* Δεξιά στήλη */}
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-pink-200 to-rose-200 shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                    <IconLeaf className="h-8 w-8 text-pink-700" />
                  </div>
                  <p className="text-2xl font-semibold">Αισθητική ανθοσυνθέτησης</p>
                  <p className="text-gray-700 mt-2">
                    Μπουκέτα κατά παραγγελία, με επιλογή χρωματικής παλέτας και ύφους.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow p-4 text-sm">
                <p className="font-medium">Άμεση εξυπηρέτηση</p>
                <p className="text-gray-600">Παραγγελίες με κλήση ή μήνυμα.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
