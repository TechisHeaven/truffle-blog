import React from "react";

const ChatSkeleton = () => {
  return (
    <>
      <div className="ChatFromSender  mt-4 mb-2 chat flex items-center gap-2">
        <div className="image max-w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden">
          <div className=" h-full bg-gray-300 animate-pulse w-10 aspect-square"></div>
        </div>
        <div>
          <div className="message font-medium bg-gray-200 max-w-[350px] p-2 px-4 rounded-full rounded-bl-lg w-48 h-12 animate-pulse"></div>
        </div>
      </div>
      <div className="ChatFromSender  mt-4 mb-2 chat flex justify-end items-center gap-2">
        <div className="image max-w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden">
          <div className=" h-full bg-gray-300 animate-pulse w-10 aspect-square"></div>
        </div>
        <div>
          <div className="message font-medium bg-gray-200 max-w-[350px] p-2 px-4 rounded-full rounded-bl-lg  w-48 h-12 animate-pulse"></div>
        </div>
      </div>
      <div className="ChatFromSender  mt-4 mb-2 chat flex items-center gap-2">
        <div className="image max-w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden">
          <div className=" h-full bg-gray-300 animate-pulse w-10 aspect-square"></div>
        </div>
        <div>
          <div className="message font-medium bg-gray-200 max-w-[350px] p-2 px-4 rounded-full rounded-bl-lg w-48 h-12 animate-pulse"></div>
        </div>
      </div>
      <div className="ChatFromSender  mt-4 mb-2 chat flex justify-end items-center gap-2">
        <div className="image max-w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden">
          <div className=" h-full bg-gray-300 animate-pulse w-10 aspect-square"></div>
        </div>
        <div>
          <div className="message font-medium bg-gray-200 max-w-[350px] p-2 px-4 rounded-full rounded-bl-lg  w-48 h-12 animate-pulse"></div>
        </div>
      </div>
      <div className="ChatFromSender  mt-4 mb-2 chat flex items-center gap-2">
        <div className="image max-w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden">
          <div className=" h-full bg-gray-300 animate-pulse w-10 aspect-square"></div>
        </div>
        <div>
          <div className="message font-medium bg-gray-200 max-w-[350px] p-2 px-4 rounded-full rounded-bl-lg w-48 h-12 animate-pulse"></div>
        </div>
      </div>
      <div className="ChatFromSender  mt-4 mb-2 chat flex justify-end items-center gap-2">
        <div className="image max-w-[40px] aspect-square object-cover object-center rounded-full overflow-hidden">
          <div className=" h-full bg-gray-300 animate-pulse w-10 aspect-square"></div>
        </div>
        <div>
          <div className="message font-medium bg-gray-200 max-w-[350px] p-2 px-4 rounded-full rounded-bl-lg  w-48 h-12 animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default ChatSkeleton;
