"use client";
import Card from "@/components/Card/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
];

const page = () => {
  const [blogs, setBlogs] = React.useState<{ imageUrl: string }[]>([]);
  const [pending, setTransition] = React.useTransition();

  const handleRender = () => {
    if (blogs.length <= 0) {
      setTransition(() => {
        setBlogs(data);
      });
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[100px] w-full rounded-full overflow-hidden">
        <Image
          width={100}
          loading="eager"
          height={100}
          className="w-full object-cover aspect-square"
          src={
            "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
          }
          alt="profile image"
        />
      </div>
      <h1 className="font-semibold text-xl my-2">Phoenix Baker</h1>
      <div className="flex gap-4 my-4">
        <p className="font-normal text-base flex flex-col items-center">
          <span className="font-medium">20</span>
          <span>Followers</span>
        </p>
        <p className="font-normal text-base flex flex-col items-center">
          <span className="font-medium">20</span>
          <span>Following</span>
        </p>
      </div>
      <div className="flex gap-2">
        <button className="bg-black text-white p-2 px-4 rounded-md capitalize">
          follow
        </button>
        <Link
          href="/chat/userid"
          className="bg-black text-white p-2 px-4 rounded-md capitalize"
        >
          Chat now
        </Link>
        {/* <button className="border-black text-black border-2 p-2 px-4 rounded-lg capitalize">
          following
        </button> */}
      </div>
      <div className="blogs my-8">
        <div className="flex flex-col items-center">
          <button
            onClick={handleRender}
            className="font-medium border p-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
          >
            Blogs
          </button>
          // click to render blogs 😊
        </div>
        {blogs.length > 0 &&
          (!pending ? <Card data={blogs} /> : <h1>Skeleton</h1>)}
      </div>
    </div>
  );
};

export default page;
