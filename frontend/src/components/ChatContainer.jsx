import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-gradient-to-b from-base-100/30 to-base-200/20">
        {messages.map((message, index) => (
          <div
            key={message._id}
            className={`flex ${message.senderId === authUser._id ? "justify-end" : "justify-start"} animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
            ref={messageEndRef}
          >
            <div className={`flex items-end gap-3 max-w-xs sm:max-w-md lg:max-w-lg ${message.senderId === authUser._id ? "flex-row-reverse" : "flex-row"}`}>
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="size-10 rounded-full border-2 border-base-300 overflow-hidden">
                  <img
                    src={
                      message.senderId === authUser._id
                        ? authUser.profilePic || "/avatar.png"
                        : selectedUser.profilePic || "/avatar.png"
                    }
                    alt="profile pic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Message content */}
              <div className={`flex flex-col ${message.senderId === authUser._id ? "items-end" : "items-start"}`}>
                {/* Time */}
                <div className="text-xs text-base-content/50 mb-1 px-2">
                  {formatMessageTime(message.createdAt)}
                </div>

                {/* Message bubble */}
                <div className={`
                  relative px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                  ${message.senderId === authUser._id 
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-content" 
                    : "bg-base-100 border border-base-300 text-base-content"
                  }
                `}>
                  <div className="space-y-2">
                    {message.image && (
                      <a
                        href={message.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <img
                          src={message.image}
                          alt="Attachment"
                          className="rounded-xl max-h-64 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300 shadow-md"
                        />
                      </a>
                    )}

                    {message.video && (
                      <a
                        href={message.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <video
                          src={message.video}
                          controls
                          className="rounded-xl max-h-64 w-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300 shadow-md"
                        />
                      </a>
                    )}

                    {message.text && (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {message.text}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
