import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StudentProfileHeader = () => {
  return (
    <div className="student-profile-section bg-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="student-profile-wrap">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="student-profile-left flex items-center gap-5">
              <div className="student-thumb w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/photos.png"
                  alt="Student avatar"
                  width={96}
                  height={96}
                />
              </div>
              <div className="student-data">
                <h3 className="text-2xl font-bold text-primary">
                  Kevin Gilbert
                </h3>
                <p className="text-secondary">
                  Web Designer & Best-Selling Instructor
                </p>
              </div>
            </div>
            <div className="student-profile-right">
              <Link
                className="button button--lg div-orange-btn"
                href="/become-instructor"
              >
                Become Instructor
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileHeader;
