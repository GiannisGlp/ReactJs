import React from 'react';
import classes from './Pagination.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LayoutInput, LayoutBackground } from '../../utilities/layout';

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

  const paginationItemClass = (type: string, item: number = 1) => {
    if (type === 'prev') {
      const newClassName =
        currentPage === 1
          ? [classes.prev, classes.disabled].join(' ')
          : classes.prev;
      return LayoutInput(newClassName);
    }

    if (type === 'next') {
      const newClassName =
        currentPage === pages
          ? [classes.next, classes.disabled].join(' ')
          : classes.next;
      return LayoutInput(newClassName);
    } else {
      const newClassName =
        currentPage === item
          ? [classes.paginationItem, classes.active].join(' ')
          : classes.paginationItem;
      return LayoutInput(newClassName);
    }
  };
  return (
    <>
      <>{children}</>
      {paginatedGroup.length > 1 && (
        <div className={classes.pagination}>
          <button
            onClick={goToPreviousPage}
            className={paginationItemClass('prev')}
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
              className={paginationItemClass('', item)}
            >
              <span>{item}</span>
            </button>
          ))}
          <button
            onClick={goToNextPage}
            className={paginationItemClass('next')}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
