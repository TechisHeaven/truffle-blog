import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  return (
    <div className="right-sidebar max-w-[200px]  w-full p-4">
      <div>
        <h1 className="font-semibold my-1">Profile</h1>
        <Link
          href="/profile/22"
          className="profile border flex items-center gap-2  hover:bg-gray-100 transition-all px-2 py-1 rounded-md"
        >
          <div className="w-10 aspect-square overflow-hidden rounded-full">
            <Image
              width={50}
              loading="eager"
              height={50}
              className="object-cover w-full h-full"
              src={
                "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
              }
              alt={`user image`}
            />
          </div>
          <h1 className="font-medium text-sm">Bob Shames</h1>
        </Link>
      </div>
      <div className="py-2 my-4">
        <h1 className="font-medium  text-xs text-gray-500">Recent Documents</h1>
        <div className="documents flex gap-2 flex-col">
          <div className="document border flex items-center gap-2  hover:bg-gray-100 transition-all px-2 py-1 rounded-md">
            <div className="w-10 aspect-square overflow-hidden">
              <Image
                width={50}
                loading="eager"
                height={50}
                className="object-cover w-full h-full"
                src={
                  "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
                }
                alt={`user image`}
              />
            </div>
            <h1 className="font-medium text-sm capitalize">pdf of heart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
