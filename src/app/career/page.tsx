// OneDrive\Рабочий стол\etutordiplom\src\app\career\page.tsx
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import JobList from "@/app/components/career/JobList";
import CareerCTA from "@/app/components/career/CareerCTA";

export default function CareerPage() {
  const breadcrumbPath = [{ name: "Home", href: "/" }, { name: "Career" }];

  return (
    <>
      <Breadcrumb title="Career" path={breadcrumbPath} />
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <JobList />
        </div>
      </div>
      <CareerCTA />
    </>
  );
}
