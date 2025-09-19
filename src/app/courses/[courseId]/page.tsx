
// OneDrive\Рабочий стол\etutordiplom\src\app\courses\[courseId]\page.tsx

import CourseHeader from "@/app/components/course/CourseHeader";
import CourseVideoPlayer from "@/app/components/course/CourseVideoPlayer";
import CourseSidebar from "@/app/components/course/CourseSidebar";
import CourseContentTabs from "@/app/components/course/CourseContentTabs";

export default function SingleCoursePage() {
  return (
    <div className="course-single-section section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="course-single-wrap">
              <CourseHeader />
              <CourseVideoPlayer />
              <CourseContentTabs />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <CourseSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}