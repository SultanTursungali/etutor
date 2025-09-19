import Image from "next/image";
import { Search, Bell } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="instructor-header bg-white shadow-sm p-4 border-b">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="left instructor-user">
            <p className="greeting text-secondary">Good Morning</p>
            <h6 className="username text-xl font-bold text-primary">
              Dashboard
            </h6>
          </div>

          <div className="right flex items-center gap-4">
            <div className="form-searchbox relative hidden md:block">
              <span className="icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <div className="instructor-notification relative">
              <button className="icon p-2 rounded-full hover:bg-gray-100">
                <Bell size={24} className="text-secondary" />
                <span className="icon-active absolute top-1 right-1 block w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
            <div className="instructor-user">
              <div className="image w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/users/user-01.png"
                  alt="user-img"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
