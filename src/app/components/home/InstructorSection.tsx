import InstructorCard from "../ui/InstructorCard";

const instructors = [
  {
    href: "/instructor-profile",
    imgSrc: "/assets/images/team-member-1.jpg",
    name: "Dianne Russell",
    title: "Web Designer",
    rating: 4.8,
    studentCount: "265.7k",
  },
  {
    href: "/instructor-profile",
    imgSrc: "/assets/images/team-member-2.jpg",
    name: "Esther Howard",
    title: "Programmer",
    rating: 4.8,
    studentCount: "265.7k",
  },
  {
    href: "/instructor-profile",
    imgSrc: "/assets/images/team-member-3.jpg",
    name: "Cody Fisher",
    title: "UI/UX Designer",
    rating: 4.8,
    studentCount: "265.7k",
  },
  {
    href: "/instructor-profile",
    imgSrc: "/assets/images/team-member-0.jpg",
    name: "Bessie Cooper",
    title: "Digital Marketer",
    rating: 4.8,
    studentCount: "265.7k",
  },
];

const InstructorSection = () => {
  return (
    <section className="team-section pb-20">
      <div className="container mx-auto px-4">
        <div className="section-title mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet with Our instructor
          </h2>
          <p className="text-secondary mt-2">Explore our popular courses</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
