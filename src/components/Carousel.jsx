import React from "react";
import Slider from "infinite-react-carousel";

function Carousel(data) {
  const settings = {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
  };

  return (
    <Slider {...settings}>
      {data.images.map((image) => (
        <img
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform durantion-200 ease-in-out"
          src={image}
          alt={data.address.formattedAddress}
          key={data.id}
        />
      ))}
    </Slider>
  );
}

export default Carousel;
