import { SHOP } from "@/lib/shopData";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
  title: `${SHOP.name} — Συλλογή`,
  description:
    "Συλλογή από μπουκέτα, ανθοσυνθέσεις και στολισμούς εκδηλώσεων. Φιλτράρετε ανά κατηγορία και βρείτε ιδέες για το δικό σας concept.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryClient />
    </main>
  );
}
