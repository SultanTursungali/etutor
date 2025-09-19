import CategoryCard from "@/app/components/ui/CategoryCard";

const categories = [
  {
    href: "/category",
    iconSrc: "/assets/images/category/pen.svg",
    title: "Design",
    courseCount: 23,
    bgColorClass: "bg-[#EFEFFD]",
  },
  {
    href: "/category",
    iconSrc: "/assets/images/category/code.svg",
    title: "Developments",
    courseCount: 34,
    bgColorClass: "bg-[#FF6636]",
  },
  {
    href: "/category",
    iconSrc: "/assets/images/category/briefcase.svg",
    title: "Business",
    courseCount: 12,
    bgColorClass: "bg-[#FFF2E5]",
  },
  {
    href: "/category",
    iconSrc: "/assets/images/category/camera.svg",
    title: "Photography",
    courseCount: 21,
    bgColorClass: "bg-[#FFF0F0]",
  },
  {
    href: "/category",
    iconSrc: "/assets/images/category/speaker.svg",
    title: "Marketing",
    courseCount: 42,
    bgColorClass: "bg-[#E1F7E3]",
  },
  {
    href: "/category",
    iconSrc: "/assets/images/category/heart-beat.svg",
    title: "Health & Care",
    courseCount: 15,
    bgColorClass: "bg-[#FFF2E5]",
  },
  {
    href: "/category",
    iconSrc: "/assets/images/category/settings.svg",
    title: "Technology",
    courseCount: 18,
    bgColorClass: "bg-[#EFEFFD]",
  },
  {
    href: "/category",
    iconSrc: "/assets/images/category/note.svg",
    title: "Music",
    courseCount: 9,
    bgColorClass: "bg-[#FFF0F0]",
  },
];

const CategoriesSection = () => {
  return (
    <section className="category-section pb-20">
      <div className="container mx-auto px-4">
        <div className="section-title mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Top Categories</h2>
          <p className="text-secondary mt-2">Explore our popular categories</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard
              key={index}
              href={cat.href}
              iconSrc={cat.iconSrc}
              title={cat.title}
              courseCount={cat.courseCount}
              bgColorClass={cat.bgColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
