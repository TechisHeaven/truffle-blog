import Link from "next/link";
import React from "react";
import ToggleMenuAuth from "./ToggleMenuAuth";
import Image from "next/image";
import Notification from "../Notification/Notification";
import Profile from "../Profile/Profile";

const AuthCon = () => {
  return (
    <>
      <ToggleMenuAuth />
      <Notification />
      <Profile />
    </>
  );
};

export default AuthCon;
