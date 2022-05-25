import React, { useEffect, useState } from "react";
// import Topbar from "../../Components/Topbar/Topbar";
import { getAllProducts } from "../../Service/ProductService";
// import Popup from "../../Components/Popup/Popup";
// import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';
import ShowResults from "../../Components/ShowResults/ShowResults";
import OfferCarousel from "../../Components/OfferCarousel/OfferCarousel";
import NavbarController from "../../Components/Sidebar/NavbarController";
import "./Frontpage.scss";

const Frontpage = (props) => {
  // let { userId } = props;

  // console.log(`userId: ${userId}`);

  // const [visibility, setVisibility] = useState(true); // For the login/signup popup

  const [allProducts, setAllProducts] = useState([]); // the reference (all products). Should not change
  const [filteredProducts, setFilteredProducts] = useState([]); // SHOULD BE THE SHOWN LIST

  // filter variables
  /* const [productsFilterMinPrice, setproductsFilterMinPrice] = useState(0);
  const [productsFilterMaxPrice, setproductsFilterMaxPrice] = useState(0); */
  const [productsFilterAnimal, setproductsFilterAnimal] = useState(null);
  const [filterState, setFilterState] = useState('false');
 /*  const [productsFilterCategory, setproductsFilterCategory] = useState(null); */
  /* const [productsFilterSubCategory, setproductFilterSubCategory] = useState(null); */


  useEffect(() => {
    getAllProducts().then(function (products) {
      setAllProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  useEffect(() => {
    let localProducts = allProducts;

    if (filterState === 'false') {
      console.log('filterState is false');
    } else {
      console.log('filterState is true');
    }

    /* if (productsFilterMinPrice < productsFilterMaxPrice && productsFilterMinPrice >= 0 && productsFilterMaxPrice > 0) {
      if (productsFilterMinPrice !== null && productsFilterMinPrice !== undefined) {
        localProducts = getMinPriceFilteredItems(localProducts, productsFilterMinPrice);
      }

      if (productsFilterMaxPrice !== null && productsFilterMaxPrice !== undefined) {
        localProducts = getMaxPriceFilteredItems(localProducts, productsFilterMaxPrice);
      }
    } */

    if (productsFilterAnimal !== null && productsFilterAnimal !== undefined) {
      localProducts = getNameFilteredItems(localProducts, productsFilterAnimal);
      console.log('check6.3');
      console.log(localProducts);
    }
/* 
    if (productsFilterCategory !== null && productsFilterCategory !== undefined) {
      localProducts = getCategoriesFilterItems(localProducts, productsFilterCategory);
    } */

    /* if (productsFilterSubCategory !== null && productsFilterSubCategory !== undefined) {
      localProducts = getSubCategoriesFilterItems(localProducts, productsFilterSubCategory);
    } */

    setFilteredProducts(localProducts);
  }, [productsFilterAnimal, filterState, setFilteredProducts]);

  /* productsFilterMaxPrice, productsFilterMinPrice, , productsFilterCategory, productsFilterSubCategory*/


  function getNameFilteredItems(products, animalName) {
    return products.filter((el) => {
      return animalName.some((e) => {
        return el.animal === e;
      })
    })
  }
/* 
  function getCategoriesFilterItems(products, category) {
    return products.filter(function (el) {
      return el.category === category;
    })
  } */
/* 
  function getSubCategoriesFilterItems(products, subcategory) {
    return products.filter(function (el) {
      return el.subcategory === subcategory;
    })
  } */

  /* function getMinPriceFilteredItems(products, priceMin) {
    return products.filter(function (el) {
      return el.price >= priceMin;
    });
  } */

  /* function getCategoriesFilterItems(products, category) {
    return products.filter(function (el) {
      return el.category === category;
    });
  } */

  /* function getMinPriceFilteredItems(products, priceMin) {
    return products.filter(function (el) {
      return el.price >= priceMin;
    });
  }

  function getMaxPriceFilteredItems(products, priceMax) {
    return products.filter(function (el) {
      return el.price <= priceMax;
    });
  } */

  return (
    <div className="Frontpage-Content">

      <div className="Frontpage-sidebarcontainer">
        <NavbarController
          FilterAnimal={setproductsFilterAnimal}
          FilterState={setFilterState}
          /* FilterCategory={setproductsFilterCategory} */
          /* FilterSubCategory={setproductFilterSubCategory} */
          /* FilterMinPrice={setproductsFilterMinPrice}
          FilterMaxPrice={setproductsFilterMaxPrice} */
        />
      </div>

      <div className="Frontpage-resultscontainer">
      <div
          style={{
            display: allProducts.length === filteredProducts.length ? "block" : "none",
            // show the carousel only when no filter is applied
          }} 
      >
          <OfferCarousel
              products={filteredProducts}
          />
      </div>
      <h2 style={{
            display: allProducts.length === filteredProducts.length ? "none" : "block",
            // show 'search result' headline only when a filter has been applied
          }} >Search result:</h2>
          <ShowResults
            products={filteredProducts}
          />
      </div>

    </div>
  );
};

export default Frontpage;
