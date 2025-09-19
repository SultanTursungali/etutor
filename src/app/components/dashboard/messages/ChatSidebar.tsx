import Image from "next/image";
import { Search } from "lucide-react";

const ChatUser = ({
  name,
  message,
  time,
  avatar,
  isActive = false,
}: {
  name: string;
  message: string;
  time: string;
  avatar: string;
  isActive?: boolean;
}) => (
  <div
    className={`flex items-start gap-4 p-4 cursor-pointer border-l-4 ${
      isActive
        ? "bg-orange/5 border-orange"
        : "border-transparent hover:bg-gray-50"
    }`}
  >
    <div className="relative flex-shrink-0">
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-center">
        <h5 className="font-bold">{name}</h5>
        <span className="text-xs text-secondary">{time}</span>
      </div>
      <p className="text-sm text-secondary truncate">{message}</p>
    </div>
  </div>
);

const ChatSidebar = () => {
  return (
    <div className="message-sidebar flex flex-col h-full">
      <div className="p-4 border-b">
        <h3 className="text-xl font-bold">Messages</h3>
        <div className="relative mt-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Search contact"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
      </div>
      <div className="message-users-list flex-grow overflow-y-auto">
        <ChatUser
          name="Dianne Russell"
          message="Thank you for your response..."
          time="10:32 AM"
          avatar="/assets/images/team-member-1.jpg"
          isActive={true}
        />
        <ChatUser
          name="Marvin McKinney"
          message="Hey, can you help me with something?"
          time="Yesterday"
          avatar="/assets/images/users/user-03.png"
        />
        <ChatUser
          name="Courtney Henry"
          message="Sounds good!"
          time="Yesterday"
          avatar="/assets/images/users/user-04.png"
        />
        <ChatUser
          name="Jacob Jones"
          message="See you tomorrow."
          time="2 days ago"
          avatar="/assets/images/users/user-05.png"
        />
      </div>
    </div>
  );
};

export default ChatSidebar;
