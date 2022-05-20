import React from 'react';
import products from '../../Data/ProductData';
import Button from '../../Components/Button/Button';
import { addItemToBasket } from '../../Service/BasketService';
import './ProductPage.scss';
import Topbar from "../../Components/Topbar/Topbar";
import { Link } from "react-router-dom";
import {
    useParams
  } from "react-router-dom";

const ProductPage = (props) => {
    
    let { id: itemID } = useParams();
    
    console.log(itemID);

    /*
    let {
        name,
        image,
        shortDescription,
        longDescription,
        price
    } = props;
    */

    let name = products[itemID].name;
    let image = products[itemID].image;
    let shortDescription = products[itemID].shortDescription;
    let longDescription = products[itemID].longDescription;
    let price = products[itemID].price;
    // let contextType = UserContext;
    // function addToBasket() {
    //     addItemToBasket(0, itemID);
    //     console.log(`Adding item ${itemID} to basket`);
    // }

    return (
       <div>
            <Topbar isLoggedIn={true} />
            <div className='Product'>
                <div className='columns'>
                    <div className = 'leftColumn'>
                        <img className='prodImg' src = {image} />
                        <div className='longDescription'> {longDescription} </div>
                    </div>
                    <div className='rightColumn'>
                        <h1 className='productName'> {name} </h1>
                        <div className='shortDescription'> {shortDescription}</div>
                        <h3 className='price'>{price} DKK</h3>
                        <div className = "ButtonsContainer">
                            <div className="ProductButtonContainer">
                                <Button
                                    to='/Basket'
                                    onClick={() => addItemToBasket(0, itemID)}
                                    imageSrc='/assets/images/icons/add-basket-icon.png'
                                    imageClass='default-img-loc'
                                    btnText = "Add to basket!"
                                />
                            </div>
                            <div className="ProductButtonContainer">
                                <Button 
                                    to='/Basket'
                                    onClick={() => addItemToBasket(0, itemID)}
                                    imageSrc='/assets/images/icons/horse-icon.png'
                                    imageClass='default-img-loc'
                                    btnText = "Buy now!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ProductPage;