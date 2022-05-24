import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../Card/Card";
import "./Carousel.scss";

const CarouselComponent = (props) => {
  let {
    imageArray,
    showIndicators,
    showArrows,
    autoPlay,
    interval,
    showThumbs,
    infiniteLoop,
  } = props;

  return (
    <div className="carousel-outer">
      <Carousel
        showIndicators={showIndicators}
        showArrows={showArrows}
        autoPlay={autoPlay}
        interval={interval}
        showThumbs={showThumbs}
        infiniteLoop={infiniteLoop}
      >
        {imageArray.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              image={item.image}
              price={item.price}
              header={item.name}
              carouselStyle={true}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
