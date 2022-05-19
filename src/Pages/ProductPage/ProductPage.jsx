import React from 'react';
import products from '../../Data/ProductData';
import './ProductPage.scss';
import Topbar from "../../Components/Topbar/Topbar";
import { Link } from "react-router-dom";
import {
    useParams
  } from "react-router-dom";

const ProductPage = (props) => {
    
    let { id } = useParams();
    
    console.log(id);

    /*
    let {
        name,
        image,
        shortDescription,
        longDescription,
        price
    } = props;
    */

    let name = products[id].name;
    let image = products[id].image;
    let shortDescription = products[id].shortDescription;
    let longDescription = products[id].longDescription;
    let price = products[id].price;

    function addToBasket(id) {
        // need to implement adding a product to the basket.
    }

    return (
       <div>
            <Topbar isLoggedIn={true} />
            <div className='Product'>
                <div className='columns'>
                    <div className = 'leftColumn'>
                        <img src = {image} />
                        <div className='longDescription'> {longDescription} </div>
                    </div>
                    <div className='rightColumn'>
                        <h1 className='productName'> {name} </h1>
                        <div className='shortDescription'> {shortDescription}</div>
                        <h3 className='price'>{price} DKK</h3>
                        <div className = "ButtonsContainer">
                            <a className="ProductButtonContainer" onClick={addToBasket(id)}> Add to basket</a>
                            <a className="ProductButtonContainer" href='/Basket' onClick={addToBasket(id)}> Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ProductPage;