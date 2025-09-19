"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  BookOpen,
  BarChart2,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react"; // npm install lucide-react

const navLinks = [
  {
    href: "/instructor/dashboard",
    icon: <LayoutDashboard size={22} />,
    text: "Dashboard",
  },
  {
    href: "/instructor/create-course",
    icon: <PlusCircle size={22} />,
    text: "Create New Course",
  },
  {
    href: "/instructor/my-courses",
    icon: <BookOpen size={22} />,
    text: "My Courses",
  },
  {
    href: "/instructor/earning",
    icon: <BarChart2 size={22} />,
    text: "Earning",
  },
  {
    href: "/instructor/messages",
    icon: <MessageSquare size={22} />,
    text: "Message",
    count: 3,
  },
  {
    href: "/instructor/settings",
    icon: <Settings size={22} />,
    text: "Settings",
  },
];

const NavLink = ({
  href,
  icon,
  text,
  count,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  count?: number;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive ? "bg-orange text-white" : "hover:bg-orange/10"
      }`}
    >
      <Link href={href} className="flex items-center gap-3">
        <span className={isActive ? "text-white" : "text-secondary"}>
          {icon}
        </span>
        <span className="flex-grow">{text}</span>
        {count && (
          <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
            {count}
          </span>
        )}
      </Link>
    </li>
  );
};

const InstructorSidebar = () => {
  return (
    <aside className="instructor-sidebar w-64 bg-white shadow-md flex-shrink-0 p-4 flex flex-col justify-between">
      <div>
        <div className="instructor-logo mb-8 px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary"
          >
            <Image
              src="/assets/images/logo-cap.png"
              alt="brand-logo"
              width={32}
              height={32}
            />
            E-tutor
          </Link>
        </div>
        <nav>
          <ul className="instructor-menu space-y-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="sign-out px-4 py-2 rounded-md hover:bg-orange/10 text-secondary hover:text-primary transition-colors cursor-pointer">
        <a href="#" className="flex items-center gap-3">
          <LogOut size={22} />
          <span>Sign-out</span>
        </a>
      </div>
    </aside>
  );
};

export default InstructorSidebar;
