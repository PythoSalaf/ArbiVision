import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ total, onChange }) => {
  return (
    <div>
      <ReactPaginate
        pageCount={total}
        onPageChange={onChange}
        pageRangeDisplayed={0}
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
        containerClassName={"flex justify-center items-center space-x-2 mt-4"}
        nextLabel="Next"
        previousLabel="Prev"
        activeClassName="bg-green-600 text-white font-semibold"
        pageClassName="flex items-center text-white cursor-pointer text-base py-[2px] px-3 justify-center rounded-lg font-semibold bg-black border-[1px] px-2 "
        previousClassName=" border-[1px] px-2 bg-black text-white flex item-center justify-center text-sm md:text-base py-[2px] font-medium rounded-lg cursor-pointer"
        nextClassName=" border-[1px] px-2 bg-black text-white flex item-center justify-center text-sm md:text-base py-[2px] font-medium rounded-lg cursor-pointer"
      />
    </div>
  );
};

export default Pagination;
