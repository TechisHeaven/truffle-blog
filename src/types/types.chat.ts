export interface ChatData {
  sender: string;
  message: string;
  timestamp: Date | string;
  role: "sender" | "receiver";
}
