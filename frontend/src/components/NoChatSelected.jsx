import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-base-100/50 to-base-200/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-slow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/5 blur-xl animate-slow-pulse-reverse" />
      </div>

      <div className="max-w-md text-center space-y-8 relative z-10 animate-fade-in-up">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="relative group">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-xl">
              <svg className="w-10 h-10 text-primary animate-typing" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10" />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Welcome to Blink!
          </h2>
          <p className="text-base-content/70 text-lg leading-relaxed">
            Select a conversation from the sidebar to start chatting with your friends and colleagues
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-base-100/50 backdrop-blur-sm border border-base-300/50">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-base-content/80">Real-time messaging</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-base-100/50 backdrop-blur-sm border border-base-300/50">
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-secondary" />
            </div>
            <span className="text-sm font-medium text-base-content/80">File sharing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
