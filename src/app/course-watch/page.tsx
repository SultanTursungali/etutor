// OneDrive\Рабочий стол\etutordiplom\src\app\course-watch\page.tsx

import CourseWatchLayout from "../course-watch-layout";
import VideoPlayer from "@/app/components/course-watch/VideoPlayer";
import CurriculumSidebar from "@/app/components/course-watch/CurriculumSidebar";

export default function CourseWatchPage() {
  return (
    <CourseWatchLayout>
      <div className="flex flex-col lg:flex-row">
        <VideoPlayer />
        <CurriculumSidebar />
      </div>
    </CourseWatchLayout>
  );
}
