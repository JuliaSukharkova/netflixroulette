import React from "react";
import { PaginationContainer, PageButton } from "./PaginationStyle";

export const Pagination = ({
  currentPage,
  total,
  onPageChange,
}: {
  currentPage: number;
  total: number;
  onPageChange: (page: number) => void;
}) => {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(total - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < total - 3) pages.push("...");
      pages.push(total);
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </PageButton>

      {getPages().map((page, index) =>
        typeof page === "number" ? (
          <PageButton
            key={index}
            $active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ) : (
          <PageButton key={index} disabled>
            {page}
          </PageButton>
        )
      )}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === total}
      >
        Далее
      </PageButton>
    </PaginationContainer>
  );
};
