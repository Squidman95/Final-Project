import React from 'react';
// import products from '../../Data/ProductData';
import Card from '../Card/Card';
import './ShowResults.scss';
import CarouselComponent from '../Carousel/Carousel';

const SearchResult = (props) => {
    
    let {
        products = []
    } = props;

    const getCarouselArray = () => {
        if(products.length > 2){
            return [products[0].image, products[1].image, products[2].image];
        } 
        return [];
    }

    return (

        <div className='ShowResults'>
            <div className='ShowResults-Carousel'>
                <CarouselComponent
                    imageArray = {getCarouselArray()}
                    showIndicators = {false}
                    showArrows = {true}
                    autoPlay = {true}
                    interval = {2000}
                    showThumbs = {false}
                    infiniteLoop = {true}
                />
            </div>
            <div className='ShowResults-Cards'>
                {
                    products.map((item, index) => {
                        return(
                            <Card key = {index}
                                id = {item.id}
                                image = {item.image}
                                header = {item.name}
                                subtext = {item.shortDescription}
                                price = {item.price}
                            />
                        );
                    })
                }
            </div>
        </div>
    )

}

export default SearchResult;