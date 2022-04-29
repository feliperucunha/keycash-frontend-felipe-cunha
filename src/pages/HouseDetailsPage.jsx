import React from "react";
import { useParams } from "react-router-dom";
import { useGetHousesQuery } from "../services/housesApi";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";

function HouseDetailsPage() {
  const { houseId } = useParams();
  const { data } = useGetHousesQuery();

  if (!data) return <Loader />

  const filteredApiData = data.filter((item) => {
    return (
      item.id === houseId
    );
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-5 rounded-lg">
       <Carousel HouseDetailsPage {...filteredApiData[0]} />
      </div>
    </div>
    );
}

export default HouseDetailsPage;
