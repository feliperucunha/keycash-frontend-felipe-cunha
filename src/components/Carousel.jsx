import React from "react";
import Slider from "infinite-react-carousel";

function Carousel(data) {
  const settings = {
    arrows: true,
    autoplaySpeed: 2500,
    dots: true,
    autoplay: data.HouseDetailsPage,
    centerMode: data.HouseDetailsPage,
    adaptiveHeight: data.HouseDetailsPage,
  };

  return (
    <Slider {...settings}>
      {data.images.map((image) => (
        <img
          className={`${data.HouseDetailsPage && 'h-[40rem]'} w-full object-cover group-hover:scale-105 transition-transform durantion-200 ease-in-out`}
          src={image}
          alt={data.address.formattedAddress}
          key={data.id}
          onClick
        />
      ))}
    </Slider>
  );
}

export default Carousel;
