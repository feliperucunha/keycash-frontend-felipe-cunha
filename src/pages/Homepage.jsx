import React, { useState, useEffect } from "react";
import { useGetHousesQuery } from "../services/housesApi";
import { filtersUtils, paginationUtils } from "../utils";
import {
  Loader,
  Cards,
  Header,
  Filter,
  PaginationFooter,
  PaginationFilter,
} from "../components";

function Homepage() {
  const { data } = useGetHousesQuery();
  const [filter, setFilter] = useState("0");
  const [pagination, setPagination] = useState("0");
  const [filteredData, setFilteredData] = useState([]);
  const [slicedData, setSlicedData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      filtersUtils(filter, data, setFilteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, data]);

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      paginationUtils(pagination, setSlicedData, filteredData, showAll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData, pagination, showAll]);

  if (!data) return <Loader />;

  //TODO: remove all 'showAll' implementation after pagination is complete
  const handleShowAll = () => {
    setShowAll((toggle) => !toggle);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="flex p-5 justify-between">
          <Filter setFilter={setFilter} filter={filter} />
          <PaginationFilter
            setPagination={setPagination}
            pagination={pagination}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          <Cards apiData={slicedData} />
        </div>
      </div>

      <div className="flex justify-center p-2">
        <button
          onClick={handleShowAll}
          className={`inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-200 rounded-xl border-gray-700 hover:bg-gray-900 ${
            showAll
              ? "dark:bg-pink-400 dark:text-black "
              : "dark:bg-gray-300 dark:text-gray-400 "
          } dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          Mostrar todos os itens
        </button>
      </div>

      {/* Uncomment after pagination is fully implemented */}
      {/* <PaginationFooter apiData={filteredData} slicedData={slicedData} /> */}
    </>
  );
}

export default Homepage;
