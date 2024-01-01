"use client";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";

const ToggleMenuAuth = () => {
  const [visible, setVisible] = useState(false);

  const notificationRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative inline-block text-left" ref={notificationRef}>
        <button
          onClick={() => setVisible(!visible)}
          className={` p-2 flex px-4 items-center gap-1 hover:bg-gray-100 transition-colors rounded-md font-medium`}
        >
          Write
          <div
            className={`${visible ? "rotate-0" : "rotate-180"} transition-all`}
          >
            <IoIosArrowUp />
          </div>
        </button>
        {visible && (
          <div
            id="dropdownMenu"
            className="absolute z-10 right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="flex flex-col gap-2 w-full">
              <Link
                tabIndex={22}
                href={"/write?type=b"}
                className="p-2 px-4  hover:bg-gray-100 w-full transition-colors rounded-md font-medium"
              >
                Basic
              </Link>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Link
                tabIndex={22}
                href={"/write?type=m"}
                className="p-2 px-4  hover:bg-gray-100 w-full transition-colors rounded-md font-medium"
              >
                Markdown
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ToggleMenuAuth;
