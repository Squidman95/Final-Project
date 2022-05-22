import React, {useEffect, useState} from 'react';
import './BasketPage.scss';
import Button from '../../Components/Button/Button';
//import products from '../../Data/ProductData';
import Card from '../../Components/Card/Card';
import { getBasket, createBasket, removeItemFromBasket } from '../../Service/BasketServices';

const BasketPage = (props) => {

    let {
        userId,
    } = props

    console.log(`userId: ${userId}`);

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        getBasket(userId)
        .then(basket => {
            setBasket(basket.items); // get and save content to state
        })
        .catch(err => {
            createBasket(userId).then(basket =>{ //if we can't get basket, we create one
                setBasket(basket);
            });
        });
    }, []);

    function removeBasketItem(productId) {
        removeItemFromBasket(userId, productId) //remove item from backend
        .then(function () { // if successful, then also remove from frontend
            setBasket(basket.filter(function (el) {
                return el.id !== productId;
            }));
        }); 
    }

    console.log(basket);

    // calculating the total (should maybe go somewhere else..)
    let total = 0;
    basket.forEach(function (item) {
        total += item.price;
    });

    return (
        <div className='BasketPage'>

            <h1 className = 'basketHeader'>
                Products in basket:
            </h1>

            <div className='Basket-Cards'>
                {
                    basket.map((item, index) => {
                        return(
                            <Card key = {index}
                                id = {item.id}
                                image = {item.image}
                                header = {item.name}
                                price = {item.price}
                                imagePosition = 'left'
                                showXbutton = 'true'
                            />
                        );
                    })
                }
            </div>

            <div className='TotalAndButton'>
                <h3 className="total">Total: {total} DKK</h3>
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
            
        </div>
    )

}

export default BasketPage;