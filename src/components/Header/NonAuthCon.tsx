import Link from "next/link";
import React from "react";

const NonAuthCon = () => {
  return (
    <>
      <Link
        href={"/login"}
        className="p-2 px-4 hover:bg-gray-100 transition-colors rounded-md font-medium"
      >
        Log in
      </Link>
      <Link
        href={"/register"}
        className="p-2 px-4 bg-black text-white hover:bg-gray-900 transition-colors rounded-md font-medium"
      >
        Sign Up
      </Link>
    </>
  );
};

export default NonAuthCon;
