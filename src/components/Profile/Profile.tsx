"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { MdChatBubbleOutline } from "react-icons/md";
import { usePathname } from "next/navigation";

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const notificationRef = React.useRef<HTMLDivElement>(null);

  //handle outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setVisible(false);
    }
  };
  //use effect for handle click outside
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    setVisible(false);
  }, [pathname]);

  return (
    <>
      <div className="relative inline-block text-left" ref={notificationRef}>
        <div
          onClick={() => setVisible(!visible)}
          className="overflow-hidden cursor-pointer max-w-[40px] aspect-square rounded-full w-full h-full"
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
        </div>
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
                href={"/me"}
                className="p-2 px-4  hover:bg-gray-100 w-full transition-colors rounded-md font-medium flex items-center gap-2 text-sm"
              >
                <div className="max-w-[30px] aspect-square rounded-full w-full h-full overflow-hidden">
                  <Image
                    width={50}
                    loading="eager"
                    height={50}
                    className="w-full object-cover aspect-square"
                    src={
                      "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
                    }
                    alt="profile image"
                  />
                </div>
                John Doe
              </Link>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Link
                tabIndex={22}
                href={"/chat"}
                className="p-2 px-4  hover:bg-gray-100 w-full transition-colors rounded-md font-medium flex items-center gap-2 text-sm"
              >
                <div>
                  <MdChatBubbleOutline />
                </div>
                Chat
              </Link>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <button className="p-2 flex items-center gap-2 px-4 text-start  hover:bg-gray-100 w-full transition-colors rounded-md font-medium">
                <div className="text-black">
                  <CiLogout />
                </div>{" "}
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
