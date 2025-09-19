// OneDrive\Рабочий стол\etutordiplom\src\app\contact\page.tsx

import Breadcrumb from "@/app/components/ui/Breadcrumb";
import ContactDetails from "@/app/components/contact/ContactDetails";
import ContactForm from "@/app/components/contact/ContactForm";
import ContactMap from "@/app/components/contact/ContactMap";

export default function ContactPage() {
  const breadcrumbPath = [{ name: "Home", href: "/" }, { name: "Contact" }];

  return (
    <>
      <Breadcrumb title="Contact Us" path={breadcrumbPath} />
      <div className="contact-section section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </div>
      <ContactMap />
    </>
  );
}
