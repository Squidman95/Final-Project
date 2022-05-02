import React from 'react';
import products from '../../Data/ProductData';
import './ProductPage.scss';

const ProductPage = (props) => {

    let {
        name,
        image,
        shortDescription,
        longDescription,
        price
    } = props;

    return (
        <div className='Product'>
            <img src = {image} />
            <h1 className='productName'> {name} </h1>
            <h3 className='price'>Price: {price} DKK</h3>
            <div className='Description'>
                <div className='shortDescription'> {shortDescription}</div>
                <div className='longDescription'> {longDescription} </div>
            </div>
        </div>
    )
}

export default ProductPage;