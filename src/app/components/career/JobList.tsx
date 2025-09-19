import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

const JobItem = ({
  title,
  location,
  type,
  href,
}: {
  title: string;
  location: string;
  type: string;
  href: string;
}) => (
  <div className="career-item bg-white p-6 rounded-lg shadow-sm border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <h4 className="text-xl font-bold text-primary hover:text-orange transition-colors">
        <Link href={href}>{title}</Link>
      </h4>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-secondary">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{type}</span>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0">
      <Link href={href} className="button div-orange-btn">
        Apply Now
      </Link>
    </div>
  </div>
);

const JobList = () => {
  return (
    <div className="space-y-6">
      <JobItem
        title="Sr. UX/UI Designer"
        location="USA, California"
        type="Full-time"
        href="/career/details"
      />
      <JobItem
        title="Junior Frontend Developer"
        location="USA, California"
        type="Full-time"
        href="/career/details"
      />
      <JobItem
        title="Product Manager"
        location="USA, California"
        type="Full-time"
        href="/career/details"
      />
      <JobItem
        title="Content Writer"
        location="USA, California"
        type="Part-time"
        href="/career/details"
      />
    </div>
  );
};

export default JobList;
