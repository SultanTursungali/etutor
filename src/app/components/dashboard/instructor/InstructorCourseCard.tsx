"use client"; 
import Image from "next/image";
import Link from "next/link";
import { Star, Users, MoreVertical } from "lucide-react";

interface InstructorCourseCardProps {
  href: string;
  imgSrc: string;
  category: string;
  categoryColor: string;
  title: string;
  rating: number;
  studentCount: string;
  price: string;
  oldPrice?: string;
}

const InstructorCourseCard = ({
  href,
  imgSrc,
  category,
  categoryColor,
  title,
  rating,
  studentCount,
  price,
  oldPrice,
}: InstructorCourseCardProps) => {
  return (
    <div className="course-item-4 course-item-4-footer bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col h-full">
      <div className="course-item-4-card">
        <Link href={href} className="course-item-4-card-img block relative">
          <Image
            src={imgSrc}
            alt={title}
            width={400}
            height={250}
            className="w-full object-cover"
          />
        </Link>
        <div className="p-4 flex-grow flex flex-col">
          <div className="course-item-4-card-info mb-2">
            <span
              className={`course-item-5-card-info-tag text-xs font-semibold px-2 py-1 rounded ${categoryColor}`}
            >
              {category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-primary hover:text-orange transition-colors flex-grow">
            <Link href={href}>{title}</Link>
          </h3>
          <div className="course-item-4-card-footer flex justify-between items-center mt-4 pt-4 border-t">
            <div className="flex items-center text-sm text-secondary">
              <Star size={16} className="text-orange fill-orange mr-1" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center text-sm text-secondary">
              <Users size={16} className="text-blue-500 mr-1" />
              {studentCount} <span>students</span>
            </div>
          </div>
          <div className="course-item-4-card-footer flex justify-between items-center mt-2 pt-2 border-t">
            <p className="course-item-4-card-footer-review">
              <span className="text-lg font-bold text-orange">${price}</span>
              {oldPrice && (
                <del className="text-secondary ml-2">${oldPrice}</del>
              )}
            </p>
            <div className="relative">
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={(e) =>
                  e.currentTarget.nextElementSibling?.classList.toggle("hidden")
                }
              >
                <MoreVertical size={20} className="text-secondary" />
              </button>
              <ul className="dropdown-menu absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 hidden">
                <li>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="/instructor/my-courses/details"
                  >
                    View Details
                  </Link>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="#"
                  >
                    Edit Course
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    href="#"
                  >
                    Delete Course
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCourseCard;
