import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  href: string;
  imgSrc: string;
  category: string;
  categoryColor: string;
  title: string;
  rating: number;
  reviewCount: string;
  studentCount: string;
  price: string;
  oldPrice?: string;
}

const CourseCard = ({
  href,
  imgSrc,
  category,
  categoryColor,
  title,
  rating,
  reviewCount,
  studentCount,
  price,
  oldPrice,
}: CourseCardProps) => {
  return (
    <div className="course-item-5-card bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="course-item-5-card-img">
        <Link href={href}>
          <Image
            src={imgSrc}
            alt={title}
            width={400}
            height={250}
            className="w-full object-cover"
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="course-item-5-card-info flex justify-between items-center mb-2">
          <span
            className={`course-item-5-card-info-tag text-xs font-semibold px-2 py-1 rounded ${categoryColor}`}
          >
            {category}
          </span>
          <p className="course-item-5-card-info-price text-lg font-bold text-orange">
            ${price}{" "}
            {oldPrice && (
              <del className="text-sm text-gray-400">${oldPrice}</del>
            )}
          </p>
        </div>
        <h3 className="course-item-5-card-head text-lg font-bold text-primary hover:text-orange transition-colors">
          <Link href={href}>{title}</Link>
        </h3>
        <div className="course-item-5-card-footer flex justify-between items-center mt-4 pt-4 border-t">
          <p className="flex items-center text-sm text-secondary">
            <Image
              src="/assets/images/svg-icon/star.svg"
              alt="star"
              width={14}
              height={13}
              className="mr-1"
            />
            {rating.toFixed(1)} <span className="ml-1">({reviewCount})</span>
          </p>
          <p className="flex items-center text-sm text-secondary">
            <Image
              src="/assets/images/svg-icon/user.svg"
              alt="user"
              width={16}
              height={16}
              className="mr-1"
            />
            {studentCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
