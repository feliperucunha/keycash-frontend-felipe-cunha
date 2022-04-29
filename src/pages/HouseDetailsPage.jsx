import React from "react";
import { useParams } from "react-router-dom";
import { useGetHousesQuery } from "../services/housesApi";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
import { currencyFormat } from "../utils/currency";
import { AiOutlinePushpin } from 'react-icons/ai';
import { RiMoneyDollarCircleLine, RiCarLine } from 'react-icons/ri';
import { FaRestroom } from 'react-icons/fa';
import { MdBedroomChild } from 'react-icons/md';
import { BiClipboard } from 'react-icons/bi';

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
    <div className="max-w-7xl mx-auto bg-slate-100">
      <div className="p-5 rounded-lg">
       <Carousel HouseDetailsPage {...filteredApiData[0]} />
      </div>

      <hr className="my-2 border" />

      <div className="flex flex-col p-10 mx-auto justify-center items-center text-xl">
        <p className="flex items-center"><AiOutlinePushpin /> <span className="pl-3">Endereço: {filteredApiData[0].address.formattedAddress}</span></p>
        <p className="flex items-center"><RiMoneyDollarCircleLine /> <span className="pl-3">Preço: {currencyFormat(filteredApiData[0].price)}</span></p>
        <p className="flex items-center"><RiCarLine /> <span className="pl-3">Vagas de Garagem: {filteredApiData[0].parkingSpaces}</span></p>
        <p className="flex items-center"><FaRestroom /> <span className="pl-3">Banheiros: {filteredApiData[0].bathrooms}</span></p>
        <p className="flex items-center"><MdBedroomChild /> <span className="pl-3">Quartos: {filteredApiData[0].bedrooms}</span></p>
        <p className="flex items-center"><BiClipboard /> <span className="pl-3">Área Útil: {filteredApiData[0].usableArea}</span></p>
      </div>
    </div>
    );
}

export default HouseDetailsPage;
