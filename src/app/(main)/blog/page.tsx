import Card from "@/components/Card/Card";
import Cards from "@/components/Card/Cards/Cards";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Truffle Blog",
  description: "Truffle blog page",
};
const page = () => {
  const data = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative">
      <h1 className="hero-section flex flex-col items-center font-medium my-12 gap-2 text-3xl">
        Featured Blogs
      </h1>
      <Card data={data} />
    </div>
  );
};

export default page;
