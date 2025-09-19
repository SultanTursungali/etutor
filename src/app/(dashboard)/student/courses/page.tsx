// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\student\courses\page.tsx

import StudentCourseCard from "@/app/components/dashboard/student/StudentCourseCard";
import Pagination from "@/app/components/ui/Pagination";

const enrolledCourses = [
  {
    imgSrc: "/assets/images/course/course-1.png",
    category: "Developments",
    title: "The Complete 2021 Web Development Bootcamp",
    author: "Marvin McKinney",
    progress: 61,
  },
  {
    imgSrc: "/assets/images/course/course-2.png",
    category: "Design",
    title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    author: "Courtney Henry",
    progress: 85,
  },
  {
    imgSrc: "/assets/images/course/course-3.png",
    category: "Marketing",
    title: "Instagram Marketing 2021: Complete Guide To Instagram",
    author: "Jacob Jones",
    progress: 25,
  },
  {
    imgSrc: "/assets/images/course/course-4.png",
    category: "Business",
    title: "The Python Mega Course: Build 10 Real World Applications",
    author: "Wade Warren",
    progress: 0,
  },
  // Add more courses to fill the grid
  {
    imgSrc: "/assets/images/course/course-5.png",
    category: "Developments",
    title: "Data Structures & Algorithms Essentials (2021)",
    author: "Guy Hawkins",
    progress: 10,
  },
  {
    imgSrc: "/assets/images/course/course-6.png",
    category: "Design",
    title: "Copywriting - Become a Freelance Copywriter, your own boss",
    author: "Robert Fox",
    progress: 100,
  },
];

export default function StudentCoursesPage() {
  return (
    <div id="tabs02">
      <div className="student-title mb-6">
        <h2 className="text-2xl font-bold">My Courses</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course, index) => (
          <StudentCourseCard key={index} {...course} />
        ))}
      </div>
      <div className="mt-8">
        <Pagination />
      </div>
    </div>
  );
}
