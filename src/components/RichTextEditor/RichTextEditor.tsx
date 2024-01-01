import React from "react";

const RichTextEditor = () => {
  return (
    <div className="border my-4 py-1 rounded-md flex flex-row items-center justify-center">
      <button className="p-2 w-10 hover:bg-gray-100 rounded-md transition-colors">
        B
      </button>
      <button className="p-2 w-10 hover:bg-gray-100 rounded-md transition-colors">
        I
      </button>
      <button className="p-2 w-10 hover:bg-gray-100 rounded-md transition-colors">
        U
      </button>
      <button className="p-2 capitalize font-semibold w-10 hover:bg-gray-100 rounded-md transition-colors">
        h1
      </button>
    </div>
  );
};

export default RichTextEditor;
