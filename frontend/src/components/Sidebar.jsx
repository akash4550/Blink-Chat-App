import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300/50 flex flex-col transition-all duration-300 bg-base-100/50 backdrop-blur-sm">
      <div className="border-b border-base-300/50 w-full p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center gap-3 animate-fade-in-up">
          <div className="p-2 rounded-xl bg-primary/10">
            <svg className="size-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span className="font-bold text-lg hidden lg:block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contacts
          </span>
        </div>
        <div className="mt-4 hidden lg:flex items-center justify-between bg-base-100/50 rounded-xl p-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary"
            />
            <span className="text-sm font-medium">Online only</span>
          </label>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-base-content/60 font-medium">
              {onlineUsers.length - 1} online
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 custom-scrollbar">
        {filteredUsers.map((user, index) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-4 mx-2 rounded-xl flex items-center gap-4
              hover:bg-base-200/80 hover:scale-[1.02] transition-all duration-300
              ${selectedUser?._id === user._id 
                ? "bg-gradient-to-r from-primary/10 to-secondary/10 ring-2 ring-primary/20 shadow-lg" 
                : "hover:shadow-md"
              }
              animate-fade-in-up
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative mx-auto lg:mx-0 group">
              <div className="relative">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.fullName}
                  className="size-12 object-cover rounded-full border-2 border-base-300 group-hover:border-primary/50 transition-colors duration-300"
                />
                {onlineUsers.includes(user._id) && (
                  <span
                    className="absolute -bottom-1 -right-1 size-4 bg-green-500 
                    rounded-full ring-2 ring-base-100 animate-pulse"
                  />
                )}
              </div>
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="font-semibold truncate text-base-content">
                {user.fullName}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className={`w-2 h-2 rounded-full ${onlineUsers.includes(user._id) ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span className="text-base-content/60 font-medium">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-8">
            <div className="flex flex-col items-center gap-2">
              <Users className="w-8 h-8 text-zinc-400" />
              <p className="text-sm">
                {showOnlineOnly ? "No online users" : "No users available"}
              </p>
              <p className="text-xs text-zinc-400">
                {showOnlineOnly 
                  ? "Try unchecking 'Show online only'" 
                  : "Other users will appear here when they register"
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
