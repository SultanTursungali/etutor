import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react"; 

const BreadcrumbItem = ({
  href,
  text,
  isLast = false,
}: {
  href: string;
  text: string;
  isLast?: boolean;
}) => (
  <li>
    <Link
      href={href}
      className="flex items-center text-secondary hover:text-primary"
    >
      {text}
      {!isLast && (
        <svg
          className="ml-2"
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 0.625L5.625 5L1.25 9.375"
            stroke="#6E7485"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  </li>
);

const CourseHeader = () => {
  return (
    <div className="course-single-top pb-8 border-b">
      <ul className="flex items-center space-x-2 text-sm mb-4">
        <BreadcrumbItem href="/" text="Home" />
        <BreadcrumbItem href="/courses" text="Development" />
        <BreadcrumbItem href="/courses" text="Web Development" />
        <BreadcrumbItem href="/courses" text="Webflow" isLast />
      </ul>
      <h3 className="text-3xl font-bold text-primary mb-2">
        Complete Website Responsive Design: from Figma to Webflow to Website
        Design
      </h3>
      <p className="text-secondary text-lg mb-4">
        3 in 1 Course: Learn to design websites with Figma, build with Webflow,
        and make a living freelancing.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            <Image
              src="/assets/images/profile.png"
              alt="Author 1"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/assets/images/team-member-1.jpg"
              alt="Author 2"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
          </div>
          <div>
            <h5 className="text-sm text-secondary">Created by:</h5>
            <div className="flex gap-2">
              <Link
                href="#"
                className="font-semibold text-primary hover:text-orange"
              >
                Dianne Russell,
              </Link>
              <Link
                href="#"
                className="font-semibold text-primary hover:text-orange"
              >
                Dianne Russell
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-secondary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-orange fill-orange" />
          ))}
          <p className="ml-1 font-semibold text-primary">
            {" "}
            4.8{" "}
            <span className="font-normal text-secondary">(451,444 Rating)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
