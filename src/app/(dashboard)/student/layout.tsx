// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\student\layout.tsx

import StudentProfileHeader from "@/app/components/dashboard/student/StudentProfileHeader";
import DashboardTabs from "@/app/components/dashboard/student/DashboardTabs";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">

      <StudentProfileHeader />

      <div className="student-tabs-section">
        <div className="container mx-auto px-4">
          <DashboardTabs />
          <div className="tab-content py-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
