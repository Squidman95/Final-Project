import React from "react";
// import products from '../../Data/ProductData';
import Card from "../Card/Card";
import "./ShowResults.scss";
import CarouselComponent from "../Carousel/Carousel";

const SearchResult = (props) => {
    let { products = [] } = props;

    return (
        <div className="ShowResults">

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

            <h2>Search result:</h2>
            <div className="ShowResults-Cards">
                {products.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                id={item.id}
                                image={item.image}
                                header={item.name}
                                subtext={item.shortDescription}
                                price={item.price}
                            />
                        );
                })}
            </div> 
        </div>
    );
};

export default SearchResult;
