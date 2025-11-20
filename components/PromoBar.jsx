// components/PromoBar.jsx
import { SHOP } from "@/lib/shopData";
import { IconCalendar, IconMap, IconTruck } from "./Icons";

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="flex items-center gap-2">
          <IconCalendar className="h-4 w-4 text-pink-700" />
          Ωράριο: {SHOP.hours[0].h}
        </p>
        <p className="flex items-center gap-2">
          <IconMap className="h-4 w-4 text-pink-700" />
          {SHOP.address}
        </p>
        <p className="flex items-center gap-2">
          <IconTruck className="h-4 w-4 text-pink-700" />
          Παράδοση αυθημερόν σε Αθήνα και περίχωρα
        </p>
      </div>
    </div>
  );
}
