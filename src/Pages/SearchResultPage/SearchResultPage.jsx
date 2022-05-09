import React from 'react';
import products from '../../Data/ProductData';
import Card from '../../Components/Card/Card';
import './SearchResultPage.scss';
import CarouselComponent from '../../Components/Carousel/Carousel';

const SearchResult = (props) => {
    
    // let {
    //     products
    // } = props;

    const getCarouselArray = () => {
        if(products.length > 2){
            return [products[0].image, products[1].image, products[2].image];
        } 
        return [];
    }

    const onCardClick = (product) => {

    }

    return (

        <div className='SearchResultPage'>
            <div className='SearchResultPage-Carousel'>
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
            <div className='SearchResultPage-Cards'>
                {
                    products.map((item, index) => {
                        return(
                            <Card key = {index}
                                id = {item.id}
                                image = {item.image}
                                header = {item.name}
                                subtext = {item.shortDescription}
                            />
                        );
                    })
                }
            </div>
        </div>
    )

}

export default SearchResult;