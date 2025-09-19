import Image from "next/image";
import Link from "next/link";
import { Star, Users, CheckCircle, BarChart2 } from "lucide-react";

const StatItem = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-2 text-sm text-secondary">
    {icon}
    <div>
      <span className="font-bold text-primary">{value}</span> {label}
    </div>
  </div>
);

const CourseDetailsHeader = () => {
  return (
    <div className="withdrew-money-card bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="withdrew-money-card-left flex-shrink-0">
          <Image
            src="/assets/images/course-tem.jpg"
            alt="Course Thumbnail"
            width={200}
            height={150}
            className="rounded-md object-cover"
          />
        </div>
        <div className="withdrew-money-card-right flex-grow">
          <div className="withdrew-money-card-right-content">
            <div className="withdrew-money-card-info text-xs text-secondary mb-2">
              <span>Uploaded: Jan 21, 2020</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              2021 Complete Python Bootcamp From Zero to Hero in Python
            </h3>
            <p className="text-secondary text-sm mb-4">
              3 in 1 Course: Learn to design websites with Figma, build with
              Webflow, and make a living freelancing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatItem
                icon={<Star size={18} className="text-orange" />}
                value="4.8"
                label="Rating"
              />
              <StatItem
                icon={<Users size={18} className="text-blue-500" />}
                value="265.7k"
                label="Students"
              />
              <StatItem
                icon={<CheckCircle size={18} className="text-green-500" />}
                value="Published"
                label=""
              />
              <StatItem
                icon={<BarChart2 size={18} className="text-purple-500" />}
                value="Intermediate"
                label="Level"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
          <Link href="#" className="button orange-btn text-center">
            Edit Course
          </Link>
          <Link href="#" className="button div-orange-btn text-center">
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHeader;
