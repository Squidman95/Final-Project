import React, {useEffect, useState} from 'react';
import './BasketPage.scss';
import Button from '../../Components/Button/Button';
// import products from '../../Data/ProductData';
import Card from '../../Components/Card/Card';
import { getBasket, createBasket, removeItemFromBasket } from '../../Service/BasketServices';

const BasketPage = (props) => {

    let {
        costumerId
    } = props

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        getBasket(costumerId).then(function(basket) {
            setBasket(basket.items); // get and save content to state
        }).catch(() => {
            createBasket(costumerId); //if we can't get basket, we create one
        });
    }, []);

    function removeBasketItem(productId) {
        removeItemFromBasket(costumerId, productId) //remove item from backend
        .then(function () { // if successful, then also remove from frontend
            setBasket(basket.filter(function (el) {
                return el.id !== productId;
            }));
        }); 
    }

    console.log(basket);

    return (
        <div className='BasketPage'>
            <div className='Basket-Cards'>
                {
                    basket.map((item, index) => {
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

