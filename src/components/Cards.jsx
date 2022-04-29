import React from "react";
import { Link } from "react-router-dom";
import Slider from "infinite-react-carousel";

function apiDatas({ apiData }) {
  // const filteredApiData = apiData.filter(house => )
  const settings = {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
  };
  console.log(apiData);
  if (!apiData) return;

 const currencyFormat = (value) =>
  new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return (
    <>
      {apiData.map((apiData) => (
        <Link key={apiData.id} to={`/houses/${apiData.id}`}>
          <div className="group cursor-pointer border rounded-lg overflow-hidden">
            <Slider {...settings}>
              {apiData.images.map((image) => (
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform durantion-200 ease-in-out"
                  src={image}
                  alt={apiData.address.formattedAddress}
                  key={apiData.id}
                />
              ))}
            </Slider>

            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">Localização</p>
                <p className="text-sm font-light">{apiData.address.formattedAddress}</p>
              </div>
              <img
                className="h-12 w-12 rounded-full"
                src={apiData.images[0]}
                alt={apiData.address.formattedAddress}
              />
            </div>
            <div className="p-5 pt-0">
              <span className="text-rose-400">{currencyFormat(apiData.price)}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
    //   <Slider {...settings}>
    //   <div>
    //     <h3>1</h3>
    //   </div>
    //   <div>
    //     <h3>2</h3>
    //   </div>
    //   <div>
    //     <h3>3</h3>
    //   </div>
    //   <div>
    //     <h3>4</h3>
    //   </div>
    //   <div>
    //     <h3>5</h3>
    //   </div>
    // </Slider>
  );
}

export default apiDatas;
