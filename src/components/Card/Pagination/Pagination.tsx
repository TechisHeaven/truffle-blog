import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const pagesToShow = 1;
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === 2 ||
        i === currentPage ||
        i === totalPages ||
        i === totalPages - 1
      ) {
        pages.push(i);
      } else if (
        i === currentPage + pagesToShow + 1 &&
        currentPage + pagesToShow < totalPages - 1
      ) {
        pages.push("...");
      }
    }
    // for (let i = 1; i <= totalPages; i++) {
    //   if (
    //     i === 1 ||
    //     i === currentPage ||
    //     i === totalPages ||
    //     (i >= currentPage - pagesToShow && i <= currentPage + pagesToShow)
    //   ) {
    //     pages.push(i);
    //   } else if (
    //     i === currentPage + pagesToShow + 1 &&
    //     currentPage + pagesToShow < totalPages - 1
    //   ) {
    //     pages.push("...");
    //   }
    // }

    return pages;
  };

  return (
    <div className="flex flex-row justify-between my-8">
      <div
        className={`${
          currentPage <= 1 && "cursor-not-allowed "
        } prevBtn flex flex-row gap-2 items-center cursor-pointer select-none`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <IoMdArrowRoundBack />
        <p>Previous</p>
      </div>

      <div className="pages flex flex-row gap-2">
        {renderPageNumbers().map((page, index) => (
          <p
            onClick={() => onPageChange(page != "..." ? page : 1)}
            key={index}
            className={` 
          ${
            page === currentPage && "bg-black text-white"
          }  p-2  rounded-md h-full w-[40px] text-center cursor-pointer`}
          >
            {page}
          </p>
        ))}
      </div>

      <div
        className={`${
          currentPage >= totalPages && "cursor-not-allowed "
        } prevBtn flex flex-row gap-2 items-center cursor-pointer select-none`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <p>Next</p>
        <IoMdArrowRoundForward />
      </div>
    </div>
  );
};

export default Pagination;
