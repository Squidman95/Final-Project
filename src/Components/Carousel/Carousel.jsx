import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = (props) => {

    let {
        imageArray,
        showIndicators,
        showArrows,
        autoPlay,
        interval,
        showThumbs,
        infiniteLoop
    } = props;

    return (
        <Carousel
            showIndicators = {showIndicators}
            showArrows = {showArrows}
            autoPlay = {autoPlay}
            interval = {interval}
            showThumbs = {showThumbs}
            infiniteLoop = {infiniteLoop}
        >
            {imageArray.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item} />
                    </div>
                )
            })}
        </Carousel>
    )
}

export default CarouselComponent;