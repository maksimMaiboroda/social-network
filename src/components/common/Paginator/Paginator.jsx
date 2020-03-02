import React, { useState } from "react";
import classes from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 5
}) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && (
        <button className={classes.btnPagination}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}>{"<"}</button>
      )}

      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <div className={classes.pageNumberWraper}> <span
              className={cn(
                {
                  [classes.selectedPage]: currentPage === p
                },
                classes.pageNumber
              )}
              key={p}
              onClick={e => {
                onPageChanged(p);
              }}
            >
              {p}
            </span></div>
          );
        })}
      {portionCount > portionNumber && (
        <button className={classes.btnPagination}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >{">"}
        </button>
      )}
    </div>
  );
};

export default Paginator;
