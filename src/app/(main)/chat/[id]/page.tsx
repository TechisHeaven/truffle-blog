"use client";
import Chats from "@/components/(chat)/Chats/Chats";
import React from "react";
import { IoMdAdd } from "react-icons/io";
// import socket from "@/app/api/websocket";

const page = () => {
  const socket = new WebSocket("ws://localhost:3001");

  React.useEffect(() => {
    socket.onopen = (event) => {
      console.log("WebSocket Client Connected");
      // Upon connection, send an ID and a "hi" message
      const userId = "123"; // Replace with your logic to generate a unique user ID
      const initialMessage = {
        type: "init",
        userId,
        content: "hi",
      };
      socket.send(JSON.stringify(initialMessage));
    };
  }, []);
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="text-xl font-medium py-2">Chat with John Doe</h1>
      <div className="chat-area border rounded-2xl p-4 flex flex-col justify-between h-full">
        <Chats />
        <div className="input flex bg-gray-100 w-full p-2 px-4 items-center gap-2 rounded-lg">
          <input
            spellCheck={false}
            type="text"
            placeholder="Message John Doe"
            className="bg-transparent w-full outline-none"
          />
          <button className="add-item bg-white p-2 rounded-full hover:shadow-md transition-all">
            <IoMdAdd />
          </button>
          <button className="bg-black hover:shadow-md transition-all px-4 p-2 text-sm text-white rounded-lg font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
