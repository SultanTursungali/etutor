import CourseDetailsHeader from "@/app/components/dashboard/instructor/CourseDetailsHeader";
import CourseDetailsContent from "@/app/components/dashboard/instructor/CourseDetailsContent";

export default function MyCourseDetailsPage() {
  return (
    <div className="space-y-8">
      <CourseDetailsHeader />
      <CourseDetailsContent />
    </div>
  );
}
