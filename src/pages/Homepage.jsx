import React from "react";
import { useGetHousesQuery } from "../services/housesApi";
import Loader from "../components/Loader";
import Cards from "../components/Cards";
import Header from "../components/Header";

const Homepage = () => {
  const { data } = useGetHousesQuery(10);

  if (!data) return <Loader />;

  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        <Cards apiData={data} />
      </div>
    </div>
  );
};

export default Homepage;
