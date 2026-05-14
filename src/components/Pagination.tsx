import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../slices/productDashboardSlice";
import "../styles/main.scss";

const Pagination = ({ total }: { total: number }) => {
  const dispatch = useDispatch();

  const { currentPage, limit } = useSelector((state: any) => ({
    currentPage: state.productDashboard.currentPage,
    limit: state.productDashboard.limit
  }));

  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (page: number) => {
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

  const styles = {
    paginationContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      justifyContent: "center",
      alignItems: "center"
    }
  };
  return (
    <div style={styles.paginationContainer}>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal"
          }}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default React.memo(Pagination);
