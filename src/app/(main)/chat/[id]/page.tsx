"use client";
import Chats from "@/components/(chat)/Chats/Chats";
import ChatsManager from "@/managers/chats/chats.manager";
import { ChatData } from "@/types/types.chat";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import socket from "@/app/api/websocket";
const chats: ChatData[] = [
  {
    sender: "Alice",
    message: "Hi Bob, how are you today?",
    timestamp: "2024-01-01T10:00:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message: "Hey Alice! I'm doing well, thanks. How about you?",
    timestamp: "2024-01-01T10:05:00",
    role: "receiver",
  },
  {
    sender: "Alice",
    message:
      "I'm good too, thanks for asking. Did you hear about the new movie coming out this weekend?",
    timestamp: "2024-01-01T10:10:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message: "No, I haven't. What's it about?",
    timestamp: "2024-01-01T10:15:00",
    role: "receiver",
  },
  {
    sender: "Alice",
    message:
      "It's a sci-fi thriller with amazing special effects. I heard the reviews are great.",
    timestamp: "2024-01-01T10:20:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message:
      "Sounds interesting. Let's plan to watch it together on Saturday evening?",
    timestamp: "2024-01-01T10:25:00",
    role: "receiver",
  },
  {
    sender: "Alice",
    message: "Sure, that sounds like a plan. What time works for you?",
    timestamp: "2024-01-01T10:30:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message: "How about 7 PM? We can grab dinner before the movie.",
    timestamp: "2024-01-01T10:35:00",
    role: "receiver",
  },
  {
    sender: "Alice",
    message: "Perfect! See you at 7 PM on Saturday.",
    timestamp: "2024-01-01T10:40:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message: "Looking forward to it. Anything specific you want for dinner?",
    timestamp: "2024-01-01T10:45:00",
    role: "receiver",
  },
  {
    sender: "Alice",
    message: "I'm in the mood for Italian. How about a nice pasta place?",
    timestamp: "2024-01-01T10:50:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message: "Sounds good to me. I know a great Italian restaurant nearby.",
    timestamp: "2024-01-01T10:55:00",
    role: "receiver",
  },
  {
    sender: "Alice",
    message:
      "Awesome! Let's meet there at 6 PM for dinner, and then head to the movie.",
    timestamp: "2024-01-01T11:00:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message: "Sounds like a plan. Can't wait for Saturday!",
    timestamp: "2024-01-01T11:05:00",
    role: "receiver",
  },
  {
    sender: "Alice",
    message: "Me too! See you then, Bob.",
    timestamp: "2024-01-01T11:10:00",
    role: "sender",
  },
  {
    sender: "Bob",
    message: "See you, Alice!",
    timestamp: "2024-01-01T11:15:00",
    role: "receiver",
  },
];

const Chat = () => {
  const socket = new WebSocket("ws://localhost:3001");
  const [message, setMessage] = useState<string>("");
  const messageRef = useRef<HTMLInputElement>(null);
  const ChatsManagerInstance = new ChatsManager(chats);
  useEffect(() => {
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

  useEffect(() => {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.keyCode === 13) handleSubmit();
    });
  });
  const handleSubmit = () => {
    if (messageRef.current && messageRef.current.value) {
      const newChat: ChatData = {
        sender: "Alice",
        message: messageRef.current.value,
        timestamp: new Date(),
        role: "sender",
      };
      ChatsManagerInstance.addChat(newChat);
      setMessage("");
      messageRef.current.value = "";
    }
  };

  return (
    <div className="h-full w-full flex flex-col relative">
      <h1 className="text-xl font-medium py-2">Chat with John Doe</h1>
      <div className="chat-area border rounded-2xl p-4 flex flex-col justify-between h-full">
        <Suspense fallback={"loading"}>
          <Chats chats={ChatsManagerInstance.getChats()} />
        </Suspense>
        <div className="input flex bg-gray-100 w-full p-2 px-4 items-center gap-2 rounded-lg">
          <input
            ref={messageRef}
            autoFocus
            onChange={(e) => setMessage(e.target.value)}
            spellCheck={false}
            type="text"
            placeholder="Message John Doe"
            className="bg-transparent w-full outline-none placeholder:select-none"
          />
          <button className="add-item bg-white p-2 rounded-full hover:shadow-md transition-all">
            <IoMdAdd />
          </button>
          <button
            onClick={handleSubmit}
            className="bg-black hover:shadow-md transition-all px-4 p-2 text-sm text-white rounded-lg font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
