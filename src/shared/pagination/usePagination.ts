import { useState, useEffect, useMemo } from 'react';
import { PlacesIF } from '../../redux/initialState';

const usePagination = (data: PlacesIF[], dataLimit: number) => {
  const [paginatedData, setpaginatedData] = useState<PlacesIF[]>([]);
  const [paginatedGroup, setPaginatedGroup] = useState<number[]>([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = useMemo(() => {
    return Math.ceil(data.length / dataLimit);
  }, [data, dataLimit]);
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
    if (currentPage > paginatedGroup[paginatedGroup.length - 1]) {
      setCurrentPage(paginatedGroup[paginatedGroup.length - 1]);
    }
  }, [currentPage, data, dataLimit, pageLimit]);

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
