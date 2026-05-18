import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../features/dashboard/slices/productDashboardSlice";
import "../styles/main.scss";

const Pagination = ({ total }: { total: number }) => {
  const dispatch = useDispatch();

  const { currentPage, limit } = useSelector(
    (state: { productDashboard: { currentPage: number; limit: number } }) => ({
      currentPage: state.productDashboard.currentPage,
      limit: state.productDashboard.limit
    })
  );

  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    dispatch(setCurrentPage(page));
  };

  let startPage = Math.max(currentPage - 1, 1);
  let endPage = startPage + 2;

  if (endPage > totalPages) {
    endPage = totalPages;

    startPage = Math.max(endPage - 2, 1);
  }

  const visiblePages = [];

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <nav className="pagination-container" aria-label="Pagination Navigation">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label="Go to previous page"
        className="pagination-btn"
      >
        Prev
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
          className={
            currentPage === page
              ? "pagination-btn active-page"
              : "pagination-btn"
          }
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label="Go to next page"
        className="pagination-btn"
      >
        Next
      </button>
    </nav>
  );
};

export default React.memo(Pagination);
