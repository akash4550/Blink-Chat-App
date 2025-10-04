import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-4 border-b border-base-300/50 bg-gradient-to-r from-base-100/80 to-base-200/50 backdrop-blur-sm">
      <div className="flex items-center justify-between animate-slide-in-right">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative group">
            <div className="size-12 rounded-full relative ring-2 ring-base-300 group-hover:ring-primary/50 transition-all duration-300">
              <img 
                src={selectedUser.profilePic || "/avatar.png"} 
                alt={selectedUser.fullName}
                className="w-full h-full object-cover rounded-full"
              />
              {onlineUsers.includes(selectedUser._id) && (
                <span className="absolute -bottom-1 -right-1 size-4 bg-green-500 rounded-full ring-2 ring-base-100 animate-pulse" />
              )}
            </div>
          </div>

          {/* User info */}
          <div className="flex-1">
            <h3 className="font-bold text-lg text-base-content">
              {selectedUser.fullName}
            </h3>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${onlineUsers.includes(selectedUser._id) ? 'bg-green-500' : 'bg-gray-400'}`} />
              <p className="text-sm text-base-content/70 font-medium">
                {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button 
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-xl hover:bg-base-200 transition-all duration-200 hover:scale-105 focus-ring"
        >
          <X className="w-5 h-5 text-base-content/60 hover:text-base-content transition-colors" />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
