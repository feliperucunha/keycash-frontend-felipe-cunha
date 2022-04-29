import React from "react";
import { useGetHousesQuery } from "../services/housesApi";
import Loader from "../components/Loader";
import Cards from "../components/Cards";

const Homepage = () => {
  const { data } = useGetHousesQuery(10);

  if (!data) return <Loader />;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        <Cards apiData={data} />
      </div>
    </>
  );
};

export default Homepage;
