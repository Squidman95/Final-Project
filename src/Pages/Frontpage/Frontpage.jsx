// import React from "react";
import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import { getAllProducts } from "../../Service/ProductService";
import Popup from "../../Components/Popup/Popup";
// import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';
import ShowResults from "../../Components/ShowResults/ShowResults";
// import products from '../../Data/ProductData';
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Frontpage.scss"

const Frontpage = (props) => {
  let { userId } = props;

  console.log(`userId: ${userId}`);

  const [visibility, setVisibility] = useState(true); // For the login/signup popup

  const [products, setProducts] = useState([]); // the reference (all products). Should not change
  const [filteredProducts, setFilteredProducts] = useState([]); // SHOULD BE THE SHOWN LIST

  // filter variables
  const [productsFilterMinPrice, setproductsFilterMinPrice] = useState(0);
  const [productsFilterMaxPrice, setproductsFilterMaxPrice] = useState(1000);
  const [productsFilterAnimal, setproductsFilterAnimal] = useState(null);
  const [productsFilterCategory, setproductsFilterCategory] = useState(null);
  

  useEffect(() => {
    getAllProducts().then(function (products) {
      setProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  useEffect(() => {
    let localProducts = products;

    if(productsFilterMinPrice < productsFilterMaxPrice && productsFilterMinPrice>=0 && productsFilterMaxPrice>0) {
      if(productsFilterMinPrice !== null && productsFilterMinPrice !== undefined ) {
        localProducts = getMinPriceFilteredItems(localProducts, productsFilterMinPrice)
      }
  
      if(productsFilterMaxPrice !== null && productsFilterMaxPrice !== undefined) {
        localProducts = getMaxPriceFilteredItems(localProducts, productsFilterMaxPrice)
      }
    }
    

    if (productsFilterAnimal !== null && productsFilterAnimal !== undefined) {
      localProducts = getNameFilteredItems(localProducts, productsFilterAnimal);
    }

    if (
      productsFilterCategory !== null &&
      productsFilterCategory !== undefined
    ) {
      localProducts = getCategoriesFilterItems(
        localProducts,
        productsFilterCategory
      );
    }

    setFilteredProducts(localProducts);
  }, [productsFilterMaxPrice, productsFilterMinPrice, productsFilterAnimal, productsFilterCategory]);

  function getNameFilteredItems(products, animalName){
    return products.filter(function(el) {
        return el.animal === animalName;
    })
  }

  function getCategoriesFilterItems(products, category){
    return products.filter(function(el) {
        return el.category === category;
    })
  }

  function getMinPriceFilteredItems(products, priceMin){
    return products.filter(function(el) {
        return el.price >= priceMin;
    });
  }

  function getMaxPriceFilteredItems(products, priceMax){
    return products.filter(function(el) {
        return el.price <= priceMax;
    });
  }

  return (
    <div>
      <h1>Frontpage</h1>
      
      <Topbar isLoggedIn={true} />
      <div className='Frontpage-Content'>
        <Sidebar
          FilterAnimal = {setproductsFilterAnimal}
          FilterCategory = {setproductsFilterCategory}
          FilterMinPrice = {setproductsFilterMinPrice}
          FilterMaxPrice = {setproductsFilterMaxPrice}
        />
        <ShowResults
          products = {filteredProducts}
        />
      </div>
      
      
      {/* <Popup onClose={setVisibility} show={visibility}/>  */}
    </div>
  );
};

export default Frontpage;
