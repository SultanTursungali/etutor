"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Dashboard", href: "/student/dashboard" },
  { name: "Courses", href: "/student/courses" },
  { name: "Teachers", href: "/student/teachers" },
  { name: "Message", href: "/student/messages" },
  { name: "Wishlist", href: "/student/wishlist" },
  { name: "Purchase History", href: "/student/purchase-history" },
  { name: "Settings", href: "/student/settings" },
];

const DashboardTabs = () => {
  const pathname = usePathname();

  return (
    <div className="student-tabs-wrap border-b">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <li key={tab.name} className="mr-2">
              <Link
                href={tab.href}
                className={`inline-block p-4 border-b-2 rounded-t-lg transition-colors ${
                  isActive
                    ? "text-orange border-orange font-semibold"
                    : "border-transparent text-secondary hover:text-gray-600 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardTabs;
