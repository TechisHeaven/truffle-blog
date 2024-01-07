import { ChatData } from "@/types/types.chat";

class ChatsManager {
  private _chats: ChatData[];

  constructor(chats: ChatData[]) {
    this._chats = chats;
  }

  getChats() {
    return this._chats;
  }

  addChat(newChat: ChatData) {
    this._chats.push(newChat);
    return this._chats;
  }
}

export default ChatsManager;
