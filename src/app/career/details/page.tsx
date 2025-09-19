// OneDrive\Рабочий стол\etutordiplom\src\app\career\details\page.tsx

import Breadcrumb from "@/app/components/ui/Breadcrumb";
import CareerDetailsContent from "@/app/components/career/CareerDetailsContent";

export default function CareerDetailsPage() {
  const breadcrumbPath = [
    { name: "Home", href: "/" },
    { name: "Career", href: "/career" },
    { name: "Sr. UX/UI Designer" },
  ];

  return (
    <>
      <Breadcrumb title="Sr. UX/UI Designer" path={breadcrumbPath} />
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <CareerDetailsContent />
        </div>
      </div>
    </>
  );
}
