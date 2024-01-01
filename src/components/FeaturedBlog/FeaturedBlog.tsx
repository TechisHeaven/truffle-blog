"use client";
import Image from "next/image";
import React from "react";

const FeaturedBlog = () => {
  return (
    <div className="w-full relative">
      <Image
        width={1280}
        loading="eager"
        height={400}
        className="w-full max-h-[600px] object-cover"
        onLoad={() => console.log("Loading Featured")}
        src={
          "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
        }
        alt="featured blog"
      />
      <div className="absolute bottom-0 p-8 text-white w-full flex flex-col items-start gap-2">
        <p className="flex text-sm">
          Olivia Rhye,<span>10 Jan 2023</span>
        </p>
        <h1 className="text-3xl font-medium">Ux review presentation</h1>
        <p className="text-sm">
          How do you create compelling presentation that wow your colleages and
          impress your managers?
        </p>
        <div className="flex gap-2">
          <p className="p-1 border rounded-full text-xs">Design</p>
          <p className="p-1 border rounded-full text-xs">Research</p>
          <p className="p-1 border rounded-full text-xs">Presentation</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
