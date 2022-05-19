import React from 'react';
import './BasketPage.scss';
import Button from '../../Components/Button/Button';
import products from '../../Data/ProductData';
import Card from '../../Components/Card/Card';

const BasketPage = (props) => {
    return (
        <div className='BasketPage'>
            <div className='Basket-Cards'>
                {
                    products.map((item, index) => {
                        return(
                            <Card key = {index}
                                id = {item.id}
                                image = {item.image}
                                header = {item.name}
                                subtext = {item.shortDescription}
                                imagePosition = 'left'
                            />
                        );
                    })
                }
            </div>

            <div id="total" class="align-self-end">Total:</div>

            <div className='Checkout-Button'>
                <Button 
                    to='/SearchResult'
                    onClick={() => console.log('You clicked on the custom button!')}
                    imageSrc='/assets/images/icons/basket-icon.png'
                    imageClass='default-img-loc'
                    btnText = "Checkout!"
                />
            </div>
        </div>
    )

}

export default BasketPage;

