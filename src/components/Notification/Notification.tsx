"use client";
import Link from "next/link";
import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Notification = () => {
  const [visible, setVisible] = React.useState(false);
  const notification = [];

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
    <div>
      <div className="notification-content" ref={notificationRef}>
        <div className="relative inline-block text-left">
          <div
            onClick={() => setVisible(!visible)}
            className="text-xl w-10 m-auto cursor-pointer hover:border rounded-full aspect-square flex items-center justify-center transition-all"
          >
            <IoIosNotifications />
            {notification?.length > 0 && (
              <div className="dot absolute bg-red-500 w-3 h-3 right-0 bottom-0 rounded-full" />
            )}
          </div>
          {visible && (
            <div
              id="dropdownMenu"
              className="absolute z-10 right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <h1 className="ml-2 text-base p-2 font-semibold">
                Notifications
              </h1>
              {notification?.length <= 0 ? (
                <div className="p-2 px-4">No Notifications</div>
              ) : (
                <>
                  <div className="flex flex-col gap-2 w-full">
                    <Link
                      tabIndex={22}
                      href={"/write?type=b"}
                      className="p-2 px-4  hover:bg-gray-100 w-full transition-colors rounded-md font-medium"
                    >
                      Notification 1
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <Link
                      tabIndex={22}
                      href={"/write?type=b"}
                      className="p-2 px-4  hover:bg-gray-100 w-full transition-colors rounded-md font-medium"
                    >
                      Notification 2
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
