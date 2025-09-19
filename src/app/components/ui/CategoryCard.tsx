import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  href: string;
  iconSrc: string;
  title: string;
  courseCount: number;
  bgColorClass: string;
}

const CategoryCard = ({
  href,
  iconSrc,
  title,
  courseCount,
  bgColorClass,
}: CategoryCardProps) => {
  return (
    <Link href={href} className="block">
      <div
        className={`category-content p-6 rounded-lg flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${bgColorClass}`}
      >
        <div className="category-content-left">
          <Image src={iconSrc} alt={title} width={48} height={48} />
        </div>
        <div className="category-content-right">
          <h4 className="font-bold text-lg text-primary">{title}</h4>
          <span className="text-secondary">{courseCount} Courses</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
