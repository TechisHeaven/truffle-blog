import { ChatData } from "@/types/types.chat";
import Image from "next/image";
import React from "react";
import ChatSkeleton from "./Chat.Skeleton";

const Chats = ({ chats }: { chats: ChatData[] }) => {
  const [allChats, setAllChats] = React.useState<ChatData[]>([]);
  const [isTyping, setIsTyping] = React.useState<Boolean>(false);
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);
  const bottomRef = React.useRef<null | HTMLDivElement>(null);

  const formatTime = (timestamp: any) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };

  React.useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAllChats(chats);
      setIsLoading(false); // Set loading to false after chats are loaded
    };

    setIsLoading(true); // Set loading to true before fetching data
    fetchData();
  }, []);

  React.useEffect(() => {
    setAllChats(chats);
  }, []);

  React.useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div
      className={`${
        isLoading && "justify-end"
      } chats h-[700px] max-h-full overflow-y-auto min-h-[calc(100vh-245px)] flex flex-col  py-4 px-2`}
    >
      {!isLoading ? (
        allChats.map((item, index) => {
          return item.role === "receiver" ? (
            <div
              key={index}
              className="ChatFromSender  mt-4 mb-2 chat flex items-center gap-2"
            >
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
                <div className="message font-medium bg-purple-200 max-w-[350px] p-2 px-4 rounded-full rounded-bl-lg">
                  {item.message}
                </div>
                <div className="description-message font-semibold  text-xs py-1 text-gray-500 px-4">
                  {item.sender}{" "}
                  <span className="time text-gray-300">
                    {formatTime(item.timestamp)} AM
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="ChatFromUser  mt-4 mb-2 justify-end chat flex items-center gap-2"
            >
              <div className="image max-w-[40px] aspect-square object-cover object-center rounded-3xl  overflow-hidden">
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
                <div className="message font-medium bg-blue-200 max-w-[350px] p-2 px-4 rounded-3xl rounded-br-none">
                  {item.message}
                </div>
                <div className="description-message font-semibold  text-xs py-1 text-gray-500 px-4">
                  <span className="time text-gray-300">
                    {formatTime(item.timestamp)}AM
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <ChatSkeleton />
      )}
      {/* typing show chat */}
      {isTyping && (
        <div className="typing mt-4 mb-2 flex items-center gap-2">
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
          <div className="dots flex gap-1">
            <div className="dot bg-gray-400 w-2 animate-pulse delay-150 duration-1000 aspect-square rounded-full"></div>
            <div className="dot bg-gray-400 w-2 animate-pulse delay-100 duration-1000 aspect-square rounded-full"></div>
            <div className="dot bg-gray-400 w-2 animate-pulse delay-75 duration-1000 aspect-square rounded-full"></div>
          </div>
        </div>
      )}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Chats;
