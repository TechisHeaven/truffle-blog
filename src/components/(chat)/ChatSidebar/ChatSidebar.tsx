"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
const ChatSidebar = () => {
  const conversation = [
    {
      id: 1,
      name: "John Doe",
      img: "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg",
    },
    {
      id: 2,
      name: "John Doe 2",
      img: "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg",
    },
  ];
  const [visibleAllChats, setVisibleAllChats] = React.useState<Boolean>(true);
  return (
    <div className="sidebar max-w-[200px] w-full p-2 min-h-full max-h-[800px] h-[calc(100vh-100px)]">
      <div className="button w-full">
        <button className="flex items-center gap-2 bg-black rounded-lg p-2 px-4 text-white text-sm">
          <div className="text-lg">
            <FiEdit2 />
          </div>
          New Message
        </button>
      </div>
      <div className="direct-message h-full">
        <button
          onClick={() => setVisibleAllChats(!visibleAllChats)}
          className="font-medium text-sm my-4 p-2 hover:bg-gray-50 flex items-center gap-2 text-black cursor-pointer"
        >
          All Conversation (20){" "}
          <div
            className={`${
              visibleAllChats ? "rotate-180" : "rotate-0"
            } transition-all`}
          >
            <IoIosArrowUp />
          </div>
        </button>
        <div className="chats flex flex-col gap-2 overflow-y-auto h-[90%]">
          {visibleAllChats &&
            conversation.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={"/chat/id"}
                  className="chat flex items-center gap-2 font-semibold text-sm capitalize p-1 px-2 hover:bg-gray-100 transition-all rounded-md"
                >
                  <div className="w-full max-w-[40px] overflow-hidden aspect-square rounded-full">
                    <Image
                      width={50}
                      loading="eager"
                      height={50}
                      className="object-cover w-full h-full"
                      src={item.img}
                      alt={`user ${item.name} image`}
                    />
                  </div>
                  <h1 className="truncate max-w-[100px] text-ellipsis overflow-hidden  w-full">
                    {item.name}
                  </h1>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
