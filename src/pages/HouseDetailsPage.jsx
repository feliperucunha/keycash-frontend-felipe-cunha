import React from "react";
import { useParams } from "react-router-dom";
import { useGetHousesQuery } from "../services/housesApi";
import { currencyUtils, bedroomsUtils } from "../utils";
import { AiOutlinePushpin } from "react-icons/ai";
import { RiCarLine } from "react-icons/ri";
import { GrRestroom } from "react-icons/gr";
import { BiArea } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { Carousel, Loader } from "../components";
import {
  googleText,
  addressText,
  garageText,
  bathroomsText,
  areaText,
} from "../locales/pt-br";

function HouseDetailsPage() {
  const { houseId } = useParams();
  const { data } = useGetHousesQuery();

  if (!data) return <Loader />;

  const filteredApiData = data.filter((item) => {
    return item.id === houseId;
  });

  return (
    <div className="max-w-7xl mx-auto bg-slate-100">
      <div className="p-10">
        <div className="flex justify-between text-3xl">
          <h1 className="hover:scale-110 transition-transform durantion-200 ease-in-out">
            {bedroomsUtils(filteredApiData[0].bedrooms)}
          </h1>
          <h1 className="text-[#ff0094] font-bold hover:scale-110 transition-transform durantion-200 ease-in-out">
            {currencyUtils(filteredApiData[0].price)}
          </h1>
        </div>
        <div className="w-80">
          <a
            className="cursor-pointer"
            rel="noreferrer"
            target="_blank"
            href={`https://www.google.com.br/maps/@${filteredApiData[0].address.geolocation.lat},${filteredApiData[0].address.geolocation.lng},15z`}
          >
            <span className="text-blue-500 flex items-center pt-1">
              <SiGooglemaps className="mr-1" /> {googleText}
            </span>
          </a>
        </div>
      </div>
      <div className="p-5 rounded-lg">
        <Carousel HouseDetailsPage {...filteredApiData[0]} />
      </div>

      <hr className="my-3 w-20 ml-8 border-2 border-[#ff0094]" />

      <div className="flex flex-col p-10 mx-auto text-2xl justify-between">
        <div className="">
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <AiOutlinePushpin />{" "}
            <span className="pl-3">
              {addressText}
              {filteredApiData[0].address.formattedAddress}
            </span>
          </p>
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <RiCarLine />{" "}
            <span className="pl-3">
              {garageText}
              {filteredApiData[0].parkingSpaces}
            </span>
          </p>
        </div>
        <div className="">
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <GrRestroom />{" "}
            <span className="pl-3">
              {bathroomsText}
              {filteredApiData[0].bathrooms}
            </span>
          </p>
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <BiArea />{" "}
            <span className="pl-3">
              {areaText}
              {filteredApiData[0].usableArea}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HouseDetailsPage;
