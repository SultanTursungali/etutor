import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface StudentCourseCardProps {
  imgSrc: string;
  category: string;
  title: string;
  author: string;
  progress: number;
}

const StudentCourseCard = ({
  imgSrc,
  category,
  title,
  author,
  progress,
}: StudentCourseCardProps) => {
  return (
    <div className="course-item-5-card bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="course-item-5-card-img">
        <Link href="/course-watch">
          <Image
            src={imgSrc}
            alt={title}
            width={400}
            height={250}
            className="w-full object-cover"
          />
        </Link>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="course-item-5-card-info flex justify-between items-center mb-2">
          <span className="course-item-5-card-info-tag text-xs font-semibold px-2 py-1 rounded bg-orange/10 text-orange">
            {category}
          </span>
          <div className="flex items-center text-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-orange fill-orange" />
            ))}
          </div>
        </div>
        <h3 className="course-item-5-card-head text-lg font-bold text-primary hover:text-orange transition-colors flex-grow">
          <Link href="/course-watch">{title}</Link>
        </h3>
        <div className="course-item-5-card-footer flex justify-between items-center mt-4 pt-4 border-t">
          <div className="flex items-center">
            <Image
              src="/assets/images/users/user-01.png"
              alt={author}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="ml-2 text-secondary">{author}</span>
          </div>
        </div>
      </div>
      <div className="course-progress-bar p-4 border-t">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-secondary">Progress</span>
          <span className="text-sm font-semibold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseCard;
