import React from 'react';
import classes from './Pagination.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  changePage: (event: string) => void;
  pages: number;
  currentPage: number;
  paginatedGroup: number[];
  children: React.ReactNode;
}

const Pagination = (props: Props) => {
  const {
    goToNextPage,
    goToPreviousPage,
    changePage,
    pages,
    currentPage,
    paginatedGroup,
    children,
  } = props;
  console.log('current:', currentPage, 'pages:', pages);
  return (
    <>
      <>{children}</>
      {paginatedGroup.length > 1 && (
        <div className={classes.pagination}>
          <button
            onClick={goToPreviousPage}
            className={
              currentPage === 1
                ? [classes.prev, classes.disabled].join(' ')
                : classes.prev
            }
          >
            <ArrowBackIosIcon />
          </button>

          {/* show page numbers */}
          {paginatedGroup.map((item, index) => (
            <button
              key={index}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                let innerText = event.currentTarget.innerText;
                changePage(innerText);
              }}
              className={
                currentPage === item
                  ? [classes.paginationItem, classes.active].join(' ')
                  : classes.paginationItem
              }
            >
              <span>{item}</span>
            </button>
          ))}
          <button
            onClick={goToNextPage}
            className={
              currentPage === pages
                ? [classes.next, classes.disabled].join(' ')
                : classes.next
            }
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
