import { useState, useEffect } from 'react';
import { PlacesIF } from '../../redux/initialState';

const usePagination = (
  data: PlacesIF[],
  dataLimit: number,
  pageLimit: number
) => {
  const [paginatedData, setpaginatedData] = useState<PlacesIF[]>([]);
  const [paginatedGroup, setPaginatedGroup] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(data.length / dataLimit);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (page: string) => {
    const pageNumber = Number(page);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    let startIndex = currentPage * dataLimit - dataLimit;
    let endIndex = startIndex + dataLimit;
    setpaginatedData(data.slice(startIndex, endIndex));
    let paginatedGroup = Array.from(Array(pageLimit), (_, x) => x + 1);
    setPaginatedGroup(paginatedGroup);
  }, [dataLimit, pageLimit, currentPage, data]);

  return {
    goToNextPage,
    goToPreviousPage,
    changePage,
    pages,
    currentPage,
    paginatedData,
    paginatedGroup,
  };
};

export default usePagination;
