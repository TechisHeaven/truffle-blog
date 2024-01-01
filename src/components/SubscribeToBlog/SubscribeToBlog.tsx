import React from "react";

const SubscribeToBlog = () => {
  return (
    <div className="grid place-items-center gap-2 py-8">
      <h1 className="text-3xl font-semibold">Subscribe to new blogs</h1>
      <p className="text-sm text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.
      </p>
      <form
        action=""
        className="flex gap-3 flex-row w-full max-w-[400px] items-center h-full"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 px-4 bg-gray-100 text-gray-800 text-sm w-full h-full focus:outline-none rounded-md"
        />
        <button
          type="submit"
          className="bg-gray-900 text-white p-3 px-6 rounded-md text-sm h-full"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeToBlog;
