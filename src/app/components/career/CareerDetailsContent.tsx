import Link from "next/link";
import { MapPin, Briefcase, DollarSign, Clock } from "lucide-react";

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-4 p-4 border rounded-md">
    <div className="icon text-orange flex-shrink-0">{icon}</div>
    <div>
      <h5 className="font-semibold text-primary">{label}</h5>
      <p className="text-secondary">{value}</p>
    </div>
  </div>
);

const CareerDetailsContent = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <div className="career-details-content space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Job Description</h3>
            <p className="text-secondary leading-relaxed">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit
              convallis nec. Donec mattis odio at.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-secondary">
              <li>
                Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
              </li>
              <li>
                Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar
                elit convallis nec.
              </li>
              <li>
                Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
              </li>
              <li>
                Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar
                elit convallis nec.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-secondary">
              <li>
                Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
              </li>
              <li>
                Donec mattis odio at. Aliquam rhoncus ligula est, non pulvinar
                elit convallis nec.
              </li>
              <li>
                Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="p-6 bg-light-gray rounded-lg space-y-4">
          <h4 className="text-xl font-bold">Job Overview</h4>
          <InfoItem
            icon={<DollarSign size={24} />}
            label="Salary"
            value="$40,000 - $60,000"
          />
          <InfoItem
            icon={<MapPin size={24} />}
            label="Location"
            value="USA, California"
          />
          <InfoItem
            icon={<Briefcase size={24} />}
            label="Job Type"
            value="Full-time"
          />
          <InfoItem
            icon={<Clock size={24} />}
            label="Date Posted"
            value="2 days ago"
          />
          <Link href="#" className="button orange-btn w-full">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailsContent;
