import React, { useState, useEffect, useCallback } from "react";
import { useGetHousesQuery } from "../services/housesApi";
import Loader from "../components/Loader";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Filter from "../components/Filter";

function Homepage() {
  const { data } = useGetHousesQuery();
  const [filter, setFilter] = useState("0");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilters = (filter, data) => {
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
    if (filter === "2") {
      const moreParking = data
        .slice()
        .sort((item, item2) => item.parkingSpaces - item2.parkingSpaces);
      return setFilteredData(moreParking);
    }
    if (filter === "3") {
      const moreBathrooms = data
        .slice()
        .sort((item, item2) => item.bathrooms - item2.bathrooms);
      return setFilteredData(moreBathrooms);
    }
    if (filter === "4") {
      const moreRooms = data
        .slice()
        .sort((item, item2) => item.bedrooms - item2.bedrooms);
      return setFilteredData(moreRooms);
    }
  };

  const filterData = useCallback((filter, data) => {
    if (data && data.length > 0) {
      handleFilters(filter, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterData(filter, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, data]);

  if (!data) return <Loader />;

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
