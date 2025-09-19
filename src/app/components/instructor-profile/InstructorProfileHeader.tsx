import Image from "next/image";
import { Star, PlayCircle, Users, MessageCircle } from "lucide-react";

const StatItem = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <h5 className="text-lg font-bold text-primary">{value}</h5>
      <span className="text-secondary">{label}</span>
    </div>
  </div>
);

const InstructorProfileHeader = () => {
  return (
    <section className="course-author-section bg-light-gray py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/images/single-i-author.png"
                  alt="Instructor"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Dianne Russell</h3>
                <p className="text-secondary mt-1">
                  Web Designer, Best-Selling Instructor
                </p>
                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-6">
                  <StatItem
                    icon={<Star size={24} className="text-orange" />}
                    value="4.8"
                    label="Instructor Rating"
                  />
                  <StatItem
                    icon={<PlayCircle size={24} className="text-blue-500" />}
                    value="12"
                    label="Courses"
                  />
                  <StatItem
                    icon={<Users size={24} className="text-green-500" />}
                    value="265.7k"
                    label="Students"
                  />
                  <StatItem
                    icon={
                      <MessageCircle size={24} className="text-purple-500" />
                    }
                    value="451,444"
                    label="Reviews"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:bg-orange hover:text-white text-secondary transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:bg-orange hover:text-white text-secondary transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:bg-orange hover:text-white text-secondary transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:bg-orange hover:text-white text-secondary transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfileHeader;
