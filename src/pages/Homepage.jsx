import React, { useState, useEffect } from "react";
import { useGetHousesQuery } from "../services/housesApi";
import Loader from "../components/Loader";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Filter from "../components/Filter";

function Homepage() {
  const { data } = useGetHousesQuery();
  const [filter, setFilter] = useState("0");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      if (filter === "0") {
        const lowestPrice = data
          .slice()
          .sort((item, item2) => item.price - item2.price);
        return setFilteredData(lowestPrice);
      }
      if (filter === "1") {
        const highestArea = data
          .slice()
          .sort((item, item2) => item.usableArea - item2.usableArea);
        return setFilteredData(highestArea);
      }
    }
  }, [filter, data]);

  if (!filteredData) return <Loader />;

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="p-5">
          <Filter setFilter={setFilter} filter={filter} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          <Cards apiData={filteredData} />
        </div>
      </div>
    </>
  );
}

export default Homepage;
