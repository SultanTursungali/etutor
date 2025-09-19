import Breadcrumb from "@/app/components/ui/Breadcrumb";
import FaqSection from "@/app/components/faq/FaqSection";

export default function FaqPage() {
  const breadcrumbPath = [{ name: "Home", href: "/" }, { name: "FAQ" }];

  return (
    <>
      <Breadcrumb title="Frequently Asked Questions" path={breadcrumbPath} />
      <FaqSection />
    </>
  );
}

// OneDrive\Рабочий стол\etutordiplom\src\app\faq\page.tsx
