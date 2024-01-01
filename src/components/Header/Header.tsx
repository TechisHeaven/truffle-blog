import Link from "next/link";
import React from "react";
import AuthCon from "./AuthCon";
import NonAuthCon from "./NonAuthCon";

const Header = () => {
  const auth = ["user"];

  return (
    <header className="p-2 px-4 flex gap-2 justify-between">
      <div className="left-container flex gap-4 items-center">
        <h1 className="font-semibold text-xl">Truffle</h1>
        <ul className="flex gap-2 font-medium">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="right-container flex gap-2 flex-row text-sm">
        {auth ? <AuthCon /> : <NonAuthCon />}
      </div>
    </header>
  );
};

export default Header;
