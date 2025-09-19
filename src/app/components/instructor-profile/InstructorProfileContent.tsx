"use client";
import CourseCard from "@/app/components/ui/CourseCard"; // Reusing this component
import Pagination from "@/app/components/ui/Pagination";

const instructorCourses = [
  {
    href: "/single-course",
    imgSrc: "/assets/images/course1.jpg",
    category: "Design",
    categoryColor: "bg-orange/10 text-orange",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
  {
    href: "/single-course",
    imgSrc: "/assets/images/course2.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "The Complete 2021 Web Development Bootcamp",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
  {
    href: "/single-course",
    imgSrc: "/assets/images/course3.jpg",
    category: "Business",
    categoryColor: "bg-blue-500/10 text-blue-500",
    title: "Learn Python Programming Masterclass",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
];

const InstructorProfileContent = () => {
  return (
    <section className="course-author-content-section section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="about-author bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold border-b pb-3 mb-4">About Me</h4>
              <p className="text-secondary leading-relaxed">
                It gives you a huge self-satisfaction when you look at your work
                and say, &quot;I made this!&quot;. I love that feeling after
                I&quot;m done working on something. When I lean back in my
                chair, look at the final result with a smile, and have this
                little &quot;spark joy&quot; moment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="student-profile-menu border-b mb-6">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#"
                    className="block py-3 border-b-2 border-orange font-semibold text-primary"
                  >
                    Courses (12)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 border-b-2 border-transparent text-secondary hover:text-primary"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructorCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
            <div className="mt-8">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfileContent;
