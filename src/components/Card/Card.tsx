"use client";
import React, { useState } from "react";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";

interface CardsProps {
  data: {
    imageUrl: string;
  }[];
}

const Card: React.FC<CardsProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the actual total number of pages.

  const handlePageChange = (newPage: number) => {
    if (newPage <= 0 || newPage > totalPages) {
      return;
    }
    setCurrentPage(newPage);
    // You can also fetch new data based on the new page if needed.
  };

  return (
    <div className="my-4">
      <h1 className="py-2 font-medium">Featured Blogs</h1>
      <div className="grid grid-cols-3  gap-4">
        {data.map((url, index) => {
          return <Cards key={index} data={url} index={index} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Card;
