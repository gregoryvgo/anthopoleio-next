// components/Footer.jsx
import Link from "next/link";
import { SHOP } from "@/lib/shopData";
import { IconLeaf } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                <IconLeaf className="h-6 w-6 text-pink-700" />
              </span>
              <span className="font-semibold">{SHOP.name}</span>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              Ανθοσυνθέσεις υψηλής αισθητικής με συνέπεια και άριστη εξυπηρέτηση.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Σύνδεσμοι</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  Σχετικά
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Συλλογή
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:underline">
                  Παράδοση
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Επικοινωνία</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={SHOP.phoneHref} className="hover:underline">
                  {SHOP.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SHOP.email}`} className="hover:underline">
                  {SHOP.email}
                </a>
              </li>
              <li>{SHOP.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Πληροφορίες</h3>
            <div className="mt-3 rounded-xl overflow-hidden border">
              <iframe
                title={`Χάρτης — ${SHOP.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  SHOP.address
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <p className="mt-12 pb-2 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {SHOP.name}
        </p>
      </div>
    </footer>
  );
}
