import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-slow-pulse" />
        <div className="absolute bottom-1/4 -left-32 w-48 h-48 rounded-full bg-secondary/5 blur-2xl animate-slow-pulse-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-accent/5 blur-xl animate-float" />
      </div>

      <div className="flex items-center justify-center pt-20 px-4 relative z-10">
        <div className="bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-base-300/50 w-full max-w-6xl h-[calc(100vh-8rem)] hover-lift transition-all duration-300">
          <div className="flex h-full rounded-2xl overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
