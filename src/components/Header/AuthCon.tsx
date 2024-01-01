import Link from "next/link";
import React from "react";
import ToggleMenuAuth from "./ToggleMenuAuth";
import Image from "next/image";
import Notification from "../Notification/Notification";

const AuthCon = () => {
  return (
    <>
      <ToggleMenuAuth />
      <Notification />
      <Link
        href={"/me"}
        className="overflow-hidden max-w-[40px] aspect-square rounded-full w-full h-full"
      >
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
      </Link>
    </>
  );
};

export default AuthCon;
