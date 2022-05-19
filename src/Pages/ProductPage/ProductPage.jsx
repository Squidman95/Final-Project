import React from 'react';
import products from '../../Data/ProductData';
import './ProductPage.scss';
import {
    useParams
  } from "react-router-dom";

const ProductPage = (props) => {
    
    let {
        name,
        image,
        shortDescription,
        longDescription,
        price
    } = props;

    //products[0].name

    let { id } = useParams();
    
    console.log(id);

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