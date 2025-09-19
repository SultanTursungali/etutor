// OneDrive\Рабочий стол\etutordiplom\src\app\become-instructor\page.tsx

import Breadcrumb from "@/app/components/ui/Breadcrumb";
import HowItWorks from "@/app/components/instructor/HowItWorks";
import JoinSection from "@/app/components/instructor/JoinSection";

export default function BecomeInstructorPage() {
  const breadcrumbPath = [
    { name: "Home", href: "/" },
    { name: "Become an Instructor" },
  ];

  return (
    <>
      <Breadcrumb title="Become an Instructor" path={breadcrumbPath} />
      <HowItWorks />
      <JoinSection />
    </>
  );
}
