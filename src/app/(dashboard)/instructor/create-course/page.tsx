// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\instructor\create-course\page.tsx

import CourseInfoForm from "@/app/components/dashboard/instructor/forms/CourseInfoForm";
import CourseCurriculum from "@/app/components/dashboard/instructor/forms/CourseCurriculum"; // Reusing this component

const Step = ({
  number,
  title,
  isActive = false,
}: {
  number: number;
  title: string;
  isActive?: boolean;
}) => (
  <div
    className={`step flex items-center gap-4 ${
      isActive ? "text-orange" : "text-secondary"
    }`}
  >
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
        isActive ? "bg-orange text-white" : "bg-gray-200"
      }`}
    >
      {number}
    </div>
    <span>{title}</span>
  </div>
);

export default function CreateCoursePage() {
  return (
    <div className="create-course-wrapper space-y-8">
      <div className="card-activity bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="card-title text-2xl font-bold">Create New Course</h2>
            <p className="text-secondary mt-1">
              You are in the 1st step of the course creation
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-6">
          <Step number={1} title="Course Info" isActive={true} />
          <Step number={2} title="Upload Intro Video" />
          <Step number={3} title="Course Curriculum" />
          <Step number={4} title="Publish Course" />
        </div>
      </div>

      <CourseInfoForm />
      <CourseCurriculum />
    </div>
  );
}
