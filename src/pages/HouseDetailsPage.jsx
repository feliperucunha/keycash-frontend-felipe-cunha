import React from "react";
import { useParams } from "react-router-dom";
import { useGetHousesQuery } from "../services/housesApi";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
import { currencyFormat } from "../utils/currency";
import { AiOutlinePushpin } from "react-icons/ai";
import { RiCarLine } from "react-icons/ri";
import { GrRestroom } from "react-icons/gr";
import { BiArea } from "react-icons/bi";

function HouseDetailsPage() {
  const { houseId } = useParams();
  const { data } = useGetHousesQuery();

  if (!data) return <Loader />;

  const filteredApiData = data.filter((item) => {
    return item.id === houseId;
  });

  return (
    <div className="max-w-7xl mx-auto bg-slate-100">
      <div className="flex justify-between p-10 text-3xl">
        <h1 className="hover:scale-110 transition-transform durantion-200 ease-in-out">Imóvel com {filteredApiData[0].bedrooms} quartos</h1>
        <h1 className="text-[#ff0094] font-bold hover:scale-110 transition-transform durantion-200 ease-in-out">
          {currencyFormat(filteredApiData[0].price)}
        </h1>
      </div>
      <div className="p-5 rounded-lg">
        <Carousel HouseDetailsPage {...filteredApiData[0]} />
      </div>

      <hr className="my-2 border" />

      <div className="flex flex-col p-10 mx-auto text-2xl justify-between">
        <div className="">
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <AiOutlinePushpin />{" "}
            <span className="pl-3">
              Endereço: {filteredApiData[0].address.formattedAddress}
            </span>
          </p>
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <RiCarLine />{" "}
            <span className="pl-3">
              Vagas de Garagem: {filteredApiData[0].parkingSpaces}
            </span>
          </p>
        </div>
        <div className="">
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <GrRestroom />{" "}
            <span className="pl-3">Banheiros: {filteredApiData[0].bathrooms}</span>
          </p>
          <p className="flex items-center p-4 border-b hover:bg-white rounded-xl">
            <BiArea />{" "}
            <span className="pl-3">
              Área Útil: {filteredApiData[0].usableArea}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HouseDetailsPage;
