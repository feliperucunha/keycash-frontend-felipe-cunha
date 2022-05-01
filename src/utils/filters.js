const handleFilters = (filter, data, setFilteredData) => {
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

export default handleFilters;