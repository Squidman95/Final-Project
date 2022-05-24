import React from "react";
import "./OfferCarousel.scss";
import CarouselComponent from "../Carousel/Carousel";

const OfferCarousel = (props) => {
    let { products = [] } = props;

    return (
        <div className='OfferCarousel'>
            <h2>Special offers this week:</h2>
            <div className="ShowResults-Carousel">
                <CarouselComponent
                    // imageArray = {getCarouselArray()}
                    imageArray={products.filter((item, index) => index > products.length - 6)} // shows the last 5 products of the array as 'special offer'
                    showIndicators={false}
                    showArrows={true}
                    autoPlay={true}
                    interval={2000}
                    showThumbs={false}
                    infiniteLoop={true}
                />
            </div>
        </div>
    )
}

export default OfferCarousel;