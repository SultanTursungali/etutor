import InstructorCourseCard from "./InstructorCourseCard";

const courses = [
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course1.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
  },
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course2.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Learn Python Programming Masterclass",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
  },
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course3.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Data Structures & Algorithms Essentials (2021)",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
    oldPrice: "35.00",
  },
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course4.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
  },
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course5.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
  },
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course6.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Learn Python Programming Masterclass",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
  },
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course7.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Data Structures & Algorithms Essentials (2021)",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
    oldPrice: "35.00",
  },
  {
    href: "/instructor/my-courses/details",
    imgSrc: "/assets/images/course8.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    rating: 5.0,
    studentCount: "265.7K",
    price: "24.00",
  },
];

const MyCourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course, index) => (
        <InstructorCourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default MyCourseList;
