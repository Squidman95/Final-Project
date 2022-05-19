import React from 'react';
import products from '../../Data/ProductData';
import './ProductPage.scss';
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


    return (
        <div className='Product'>
            <img src = {image} />
            <h1 className='productName'> {name} </h1>
            <h3 className='price'>{price} DKK</h3>
            <div className='Description'>
                <div className='shortDescription'> {shortDescription}</div>
                <div className='longDescription'> {longDescription} </div>
            </div>
        </div>
    )
}

export default ProductPage;