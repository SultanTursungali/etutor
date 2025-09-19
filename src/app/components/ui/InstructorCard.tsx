import Image from "next/image";
import Link from "next/link";

interface InstructorCardProps {
  href: string;
  imgSrc: string;
  name: string;
  title: string;
  rating: number;
  studentCount: string;
}

const InstructorCard = ({
  href,
  imgSrc,
  name,
  title,
  rating,
  studentCount,
}: InstructorCardProps) => {
  return (
    <div className="team-item bg-white rounded-lg text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={href} className="team-thumb">
        <Image
          src={imgSrc}
          alt={name}
          width={120}
          height={120}
          className="rounded-full mx-auto"
        />
      </Link>
      <div className="team-content mt-4">
        <h4 className="text-xl font-bold hover:text-orange transition-colors">
          <Link href={href}>{name}</Link>
        </h4>
        <p className="text-secondary mt-1">{title}</p>
        <div className="team-social-info mt-4 flex justify-center items-center gap-4">
          <p className="flex items-center text-sm text-secondary">
            <Image
              src="/assets/images/svg-icon/star.svg"
              alt="star"
              width={14}
              height={13}
              className="mr-1"
            />
            {rating.toFixed(1)} Rating
          </p>
          <p className="flex items-center text-sm text-secondary">
            <Image
              src="/assets/images/svg-icon/user.svg"
              alt="user"
              width={16}
              height={16}
              className="mr-1"
            />
            {studentCount} Students
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
