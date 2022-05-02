import React from 'react';
import products from '../../Data/ProductData';
import Card from '../../Components/Card/Card';
import './SearchResultPage.scss';

const SearchResult = () => {



    return (
        <div className='Cards'>
            {
                products.map((item, index) => {
                    return(
                        <Card 
                            image = {item.image}
                            header = {item.name}
                            subtext = {item.shortDescription}
                        />
                    );
                })

            }
            
        </div>
    )

}

export default SearchResult;