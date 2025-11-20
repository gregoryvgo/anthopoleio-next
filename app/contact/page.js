import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Επικοινωνία | Ανθοπωλείο",
  description:
    "Επικοινωνήστε με το ανθοπωλείο για προσφορά ανθοσυνθέσεων, στολισμών εκδηλώσεων ή αποστολή μπουκέτου.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  );
}
