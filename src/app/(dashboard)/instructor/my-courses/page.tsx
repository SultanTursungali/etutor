// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\instructor\my-courses\page.tsx

import MyCourseHeader from "@/app/components/dashboard/instructor/MyCourseHeader";
import MyCourseList from "@/app/components/dashboard/instructor/MyCourseList";
import Pagination from "@/app/components/ui/Pagination";

export default function MyCoursesPage() {
  return (
    <div>
      <MyCourseHeader />
      <div className="course-section section-padding-bottom">
        <div className="container mx-auto">
          <MyCourseList />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
