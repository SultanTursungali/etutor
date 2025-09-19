// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\instructor\my-courses\[courseId]\page.tsx

import CourseDetailsHeader from "@/app/components/dashboard/instructor/CourseDetailsHeader";
import CourseDetailsContent from "@/app/components/dashboard/instructor/CourseDetailsContent";

export default function MyCourseDetailsPage({
  params,
}: {
  params: { courseId: string };
}) {
  return (
    <div className="space-y-8">
      <CourseDetailsHeader />
      <CourseDetailsContent />
    </div>
  );
}
