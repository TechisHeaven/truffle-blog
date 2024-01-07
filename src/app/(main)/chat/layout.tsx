import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import ChatSidebar from "@/components/(chat)/ChatSidebar/ChatSidebar";
import RightSidebar from "@/components/(chat)/ChatSidebar/RightSidebar";

export const metadata: Metadata = {
  title: "Truffle Chat",
  description: "Truffle Chat",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex justify-between h-full min-h-full overflow-y-hidden">
      <ChatSidebar />
      <>{children}</>
      <RightSidebar />
    </div>
  );
}
