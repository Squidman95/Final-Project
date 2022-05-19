// import React from "react";
import React, { useEffect, useState } from 'react';
import Topbar from "../../Components/Topbar/Topbar";
import { getAllProducts } from '../../Service/ProductService';
import Popup from '../../Components/Popup/Popup';    
// import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';    
import ShowResults from '../../Components/ShowResults/ShowResults';
import products from '../../Data/ProductData';

const Frontpage = () => {
  const [visibility, setVisibility] = useState(false); // For the login/signup popup
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [productsFilterMinPrice, setproductsFilterMinPrice] = useState(null);
  const [productsFilterMaxPrice, setproductsFilterMaxPrice] = useState(null);
  const [productsFilterAnimal, setproductsFilterAnimal] = useState(null);


  useEffect(() => {
    getAllProducts().then(function(products) {
      setProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  useEffect(() => {
    let localProducts = products;
    if(productsFilterMinPrice !== null && productsFilterMinPrice !== undefined 
        && productsFilterMaxPrice !== null && productsFilterMaxPrice !== undefined ) {
      localProducts = getPriceFilteredItems(localProducts, productsFilterMinPrice, productsFilterMaxPrice)
    }

    if(productsFilterAnimal !== null && productsFilterAnimal !== undefined) {
      localProducts = getNameFilteredItems(localProducts, productsFilterAnimal);
    }
      
    setFilteredProducts(localProducts);
  }, [productsFilterMaxPrice, productsFilterMinPrice, productsFilterAnimal]);

  function getNameFilteredItems(products, animalName){
    return products.filter(function(el) {
        return el.animal === animalName;

    })
  }

  function getPriceFilteredItems(products, priceMin, priceMax){
    return products.filter(function(el) {
        return el.price >= priceMin && el.price <= priceMax;
    });
  }

  return (
    <div>
      <h1>Frontpage</h1>

      <p onClick = {() => {setproductsFilterAnimal('Dog'); console.log('click');}}  >dog filter</p>
      <p onClick = {() => {setproductsFilterMinPrice(10); setproductsFilterMaxPrice(100); console.log('click');}}  >price filter</p>
      <p onClick = {() => {setproductsFilterMinPrice(null); setproductsFilterMaxPrice(null); setproductsFilterAnimal(null)}}  >reset filter</p>
      <Topbar isLoggedIn={true} />
      <ShowResults
        products = {filteredProducts}
      />
      {/* <Popup onClose={setVisibility} show={visibility}/>  */}
    </div>
  );
};

export default Frontpage;
