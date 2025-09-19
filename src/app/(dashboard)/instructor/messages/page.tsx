// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\instructor\messages\page.tsx

import ChatSidebar from "@/app/components/dashboard/messages/ChatSidebar";
import ChatWindow from "@/app/components/dashboard/messages/ChatWindow";

export default function InstructorMessagesPage() {
  return (
    <div className="message-wrapper grid grid-cols-12 gap-0 bg-white rounded-lg shadow-sm overflow-hidden h-[calc(100vh-12rem)]">
      <div className="col-span-12 md:col-span-4 lg:col-span-3 border-r">
        <ChatSidebar />
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-9">
        <ChatWindow />
      </div>
    </div>
  );
}
