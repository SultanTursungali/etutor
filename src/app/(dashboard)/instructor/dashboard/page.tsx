// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\instructor\dashboard\page.tsx

import { GraduationCap, Video, Users, CheckCircle } from "lucide-react";

const StatCard = ({
  icon,
  value,
  label,
  bgColor,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
}) => (
  <div
    className={`features-card flex items-center gap-4 p-6 rounded-lg shadow-sm ${bgColor}`}
  >
    <div className="icon text-white">{icon}</div>
    <div className="info text-white">
      <h6 className="text-2xl font-bold">{value}</h6>
      <p>{label}</p>
    </div>
  </div>
);

export default function InstructorDashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<GraduationCap size={32} />}
          value="1,674,767"
          label="Enrolled Courses"
          bgColor="bg-orange"
        />
        <StatCard
          icon={<Video size={32} />}
          value="19"
          label="Active Courses"
          bgColor="bg-blue-500"
        />
        <StatCard
          icon={<Users size={32} />}
          value="241"
          label="Courses Instruction"
          bgColor="bg-yellow-500"
        />
        <StatCard
          icon={<CheckCircle size={32} />}
          value="957"
          label="Completed Courses"
          bgColor="bg-green-500"
        />
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-bold">Course Overview</h3>
        <div className="w-full h-80 bg-gray-100 mt-4 flex items-center justify-center rounded">
          Chart Placeholder
        </div>
      </div>
    </div>
  );
}
