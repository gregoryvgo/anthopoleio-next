// components/JsonLdGlobal.jsx
import { SHOP } from "@/lib/shopData";

export default function JsonLdGlobal() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: SHOP.name,
    image: "https://example.com/logo.png",
    url: "https://anthopoleio-dokimastiko.gr",
    telephone: SHOP.phone,
    email: SHOP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP.address,
      addressLocality: "Αθήνα",
      postalCode: "10400",
      addressCountry: "GR",
    },
    openingHoursSpecification: SHOP.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.d,
      opens: h.h.includes("Κλειστά") ? undefined : h.h.split("–")[0],
      closes: h.h.includes("Κλειστά") ? undefined : h.h.split("–")[1],
    })),
    priceRange: "€€",
    areaServed: SHOP.zones.map((z) => z.zone),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
