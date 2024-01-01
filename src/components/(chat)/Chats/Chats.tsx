import Image from "next/image";
import React from "react";

const Chats = () => {
  return (
    <div className="chats h-full min-h-[calc(100vh-245px)]">
      <div className="chat flex items-center gap-2">
        <div className="image max-w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden">
          <Image
            width={40}
            loading="eager"
            height={40}
            className="object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
            alt={`user image`}
          />
        </div>
        <div>
          <div className="message font-medium bg-purple-200 max-w-[250px] p-2 px-4 rounded-full rounded-bl-lg">
            Hello sir 👋
          </div>
          <div className="description-message font-semibold  text-xs py-1 text-gray-500 px-4">
            John Doe <span className="time">08:02 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
