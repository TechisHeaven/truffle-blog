import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
interface CardsProps {
  data: {
    imageUrl: string;
  };
  index: number;
}

const Cards: React.FC<CardsProps> = ({ data, index }) => {
  return (
    <Link
      href={`/blog/${index}`}
      key={index}
      className="flex flex-col gap-2 hover:shadow-md cursor-pointer p-4 transition-shadow text-[#3f4345]"
    >
      <Image
        loading="eager"
        width={400}
        height={300}
        className="w-full h-full aspect-auto max-h-[300px] object-cover"
        src={data.imageUrl}
        alt="card image"
      />
      <div className="font-semibold text-sm">Phoenix Baker, 19 Jan 2023</div>
      <h1 className="font-semibold text-xl flex gap-2 w-full justify-between">
        Migrating to Linear 101{" "}
        <div className="-rotate-45">
          <IoMdArrowForward />
        </div>
      </h1>
      <p className="text-sm font-medium">
        Linear help streamline software projects,sprints,task,bug
        tracking.Here&apos;s how to get Started .
      </p>
      <div className="flex gap-2 text-black ">
        <p className="p-1 border border-black rounded-full text-xs">Design</p>
        <p className="p-1 border border-black rounded-full text-xs">Research</p>
        <p className="p-1 border border-black rounded-full text-xs">
          Presentation
        </p>
      </div>
    </Link>
  );
};

export default Cards;
