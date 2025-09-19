// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\instructor\layout.tsx

import InstructorSidebar from "@/app/components/dashboard/instructor/InstructorSidebar";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";

export default function InstructorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="instructor-dashboard bg-gray-50 min-h-screen flex">
      <InstructorSidebar />
      <div className="flex-grow">
        <DashboardHeader />
        <main className="instructor-main p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
