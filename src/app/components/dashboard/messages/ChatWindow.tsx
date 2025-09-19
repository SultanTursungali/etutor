import Image from "next/image";
import { Paperclip, Send } from "lucide-react";

const MessageBubble = ({
  text,
  isOwn = false,
}: {
  text: string;
  time: string;
  isOwn?: boolean;
}) => (
  <div className={`flex items-end gap-3 ${isOwn ? "justify-end" : ""}`}>
    {!isOwn && (
      <div className="flex-shrink-0">
        <Image
          src="/assets/images/users/user-02.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    )}
    <div
      className={`max-w-md p-4 rounded-lg ${
        isOwn
          ? "bg-orange text-white rounded-br-none"
          : "bg-gray-100 text-primary rounded-bl-none"
      }`}
    >
      <p>{text}</p>
    </div>
    {isOwn && (
      <div className="flex-shrink-0">
        <Image
          src="/assets/images/users/user-01.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    )}
  </div>
);

const ChatWindow = () => {
  return (
    <div className="message-contents flex flex-col h-full">
      <div className="p-4 border-b flex items-center gap-4">
        <Image
          src="/assets/images/team-member-1.jpg"
          alt="Dianne Russell"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h4 className="font-bold">Dianne Russell</h4>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>

      <div className="flex-grow p-6 space-y-6 overflow-y-auto">
        <MessageBubble
          text="Hi there! I am wondering if you can help me with my presentation."
          time="10:30 AM"
        />
        <MessageBubble
          text="Hello, sure. I'll be happy to help you. What do you need help with?"
          time="10:31 AM"
          isOwn
        />
        <MessageBubble
          text="Thank you for your response, I'm working on a presentation for my class and I'm having some trouble with the design."
          time="10:32 AM"
        />
        <MessageBubble
          text="I see. Can you tell me more about the presentation? What is the topic and what are the requirements?"
          time="10:33 AM"
          isOwn
        />
      </div>

      <div className="p-4 border-t bg-white">
        <div className="relative">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full pl-12 pr-12 py-3 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange"
          />
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary">
            <Paperclip size={20} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-orange hover:opacity-80">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
