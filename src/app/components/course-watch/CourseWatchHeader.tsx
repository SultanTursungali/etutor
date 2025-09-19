import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const CourseWatchHeader = () => {
  return (
    <header className="course-watch-header bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/courses"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:block">Back to Courses</span>
            </Link>
            <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="logo-cap w-8 h-8">
                <Image
                  src="/assets/images/logo-cap.png"
                  alt="logo"
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-lg font-semibold">
                The Complete 2021 Web Development Bootcamp
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/images/users/user-01.png"
                alt="user"
                width={40}
                height={40}
              />
            </div>
            <span className="hidden md:block font-semibold">Kevin Gilbert</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CourseWatchHeader;
