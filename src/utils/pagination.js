const paginationUtils = (pagination, setSlicedData, filteredData, showall) => {
  if (showall) return setSlicedData(filteredData);
  if (pagination === "0") {
    return setSlicedData(filteredData.slice(0, 7));
  }
  if (pagination === "1") {
    return setSlicedData(filteredData.slice(0, 12));
  }
  if (pagination === "2") {
    return setSlicedData(filteredData.slice(0, 17));
  }
}

export default paginationUtils;