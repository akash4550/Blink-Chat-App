import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, Video, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (imageInputRef.current) imageInputRef.current.value = "";
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      toast.error("Please select a video file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setVideoPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeVideo = () => {
    setVideoPreview(null);
    if (videoInputRef.current) videoInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview && !videoPreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
        video: videoPreview,
      });

      // Clear form
      setText("");
      removeImage();
      removeVideo();
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="p-6 w-full bg-gradient-to-r from-base-100/80 to-base-200/50 backdrop-blur-sm border-t border-base-300/50">
      {/* Preview Section */}
      {(imagePreview || videoPreview) && (
        <div className="mb-4 flex items-center gap-3 animate-fade-in-up">
          {imagePreview && (
            <div className="relative group">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-xl border-2 border-base-300 shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-error text-error-content
                flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
                type="button"
              >
                <X className="size-3" />
              </button>
            </div>
          )}

          {videoPreview && (
            <div className="relative group">
              <video
                src={videoPreview}
                controls
                className="w-28 h-24 object-cover rounded-xl border-2 border-base-300 shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <button
                onClick={removeVideo}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-error text-error-content
                flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
                type="button"
              >
                <X className="size-3" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Input Section */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-3 animate-fade-in-up">
        <div className="flex-1 flex gap-3">
          <input
            type="text"
            className="flex-1 input input-bordered rounded-2xl h-12 px-4 border-2 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-base-100/50 backdrop-blur-sm focus-ring"
            placeholder="Type your message here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Hidden Inputs */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={imageInputRef}
            onChange={handleImageChange}
          />
          <input
            type="file"
            accept="video/*"
            className="hidden"
            ref={videoInputRef}
            onChange={handleVideoChange}
          />

          {/* Buttons */}
          <button
            type="button"
            className={`btn btn-circle h-12 w-12 hover-lift transition-all duration-300 ${
              imagePreview 
                ? "bg-primary text-primary-content shadow-lg" 
                : "bg-base-200 hover:bg-primary/10 text-base-content/60 hover:text-primary"
            }`}
            onClick={() => imageInputRef.current?.click()}
          >
            <Image size={20} />
          </button>

          <button
            type="button"
            className={`btn btn-circle h-12 w-12 hover-lift transition-all duration-300 ${
              videoPreview 
                ? "bg-secondary text-secondary-content shadow-lg" 
                : "bg-base-200 hover:bg-secondary/10 text-base-content/60 hover:text-secondary"
            }`}
            onClick={() => videoInputRef.current?.click()}
          >
            <Video size={20} />
          </button>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-circle h-12 w-12 hover-lift focus-ring disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
          disabled={!text.trim() && !imagePreview && !videoPreview}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
