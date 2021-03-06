import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { currencyUtils, bedroomsUtils } from "../utils";


function Cards({ apiData }) {
  if (!apiData) return <></>;

  const filteredApiData = apiData.filter((item) => {
    return (
      item.publish === true &&
      item.address.geolocation.lat &&
      item.address.geolocation.lng
    );
  });

  return (
    <>
      {filteredApiData.map((item) => (
        <Link key={item.id} to={`/houses/${item.id}`}>
          <div className="group cursor-pointer border rounded-lg overflow-hidden">
            <Carousel {...item} />

            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">
                  {bedroomsUtils(item.bedrooms)}
                </p>
                <p className="text-sm font-light">
                  {item.address.formattedAddress}
                </p>
              </div>
              <img
                className="h-12 w-12 rounded-full"
                src={item.images[0]}
                alt={item.address.formattedAddress}
              />
            </div>
            <div className="p-5 pt-0">
              <span className="text-rose-400">
                {currencyUtils(item.price)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Cards;
