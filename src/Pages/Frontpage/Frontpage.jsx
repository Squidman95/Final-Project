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
  const [productsFilterCategory, setproductsFilterCategory] = useState(null);
  const [productsFilterSubCategory, setproductFilterSubCategory] = useState(null);


  useEffect(() => {
    getAllProducts().then(function (products) {
      setAllProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  useEffect(() => {
    let localProducts = getProducts();

    console.log('check3');
    console.log(filterState);

    if (productsFilterAnimal !== null && productsFilterAnimal !== undefined) {
      if (nullArray(productsFilterAnimal)) {
        localProducts = getProducts();
      } else {
        console.log('check4');
        console.log(productsFilterAnimal);
        localProducts = getNameFilteredItems(localProducts, productsFilterAnimal);
        console.log('check5');
        console.log(productsFilterAnimal);
        console.log(localProducts);
      }
    }

    if (productsFilterCategory !== null && productsFilterCategory !== undefined) {
      localProducts = getCategoriesFilterItems(localProducts, productsFilterCategory);
    }

    if (productsFilterSubCategory !== null && productsFilterSubCategory !== undefined) {
      if (nullArray(productsFilterSubCategory)) {
        console.log('check1');
        localProducts = getProducts();
        console.log(productsFilterSubCategory);
        console.log(localProducts);
      } else {
        console.log('check2');
        localProducts = getSubCategoriesFilterItems(localProducts, productsFilterSubCategory);
        console.log(productsFilterSubCategory);
        console.log(localProducts);
      }
    }


    /* if (productsFilterMinPrice < productsFilterMaxPrice && productsFilterMinPrice >= 0 && productsFilterMaxPrice > 0) {
      if (productsFilterMinPrice !== null && productsFilterMinPrice !== undefined) {
        localProducts = getMinPriceFilteredItems(localProducts, productsFilterMinPrice);
      }

      if (productsFilterMaxPrice !== null && productsFilterMaxPrice !== undefined) {
        localProducts = getMaxPriceFilteredItems(localProducts, productsFilterMaxPrice);
      }
    } */


    setFilteredProducts(localProducts);
  }, [productsFilterAnimal, filterState, productsFilterCategory, productsFilterSubCategory, setFilteredProducts]);

  /* productsFilterMaxPrice, productsFilterMinPrice, , , */

  function getProducts() {
    return allProducts;
  }

  function nullArray(arr) {
    console.log(arr.every(e => e === null));
    return arr.every(e => e === null);
  }

  function getNameFilteredItems(products, animalName) {
    return products.filter((el) => {
      return animalName.some((e) => {
        return el.animal === e;
      })
    })
  }

  function getCategoriesFilterItems(products, category) {
    return products.filter(function (el) {
      return el.category === category;
    })
  }

  function getSubCategoriesFilterItems(products, subcategory) {
    return products.filter((el) => {
      return subcategory.some((e) => {
        return el.subcategory === e;
      })
    })
  }

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
          FilterCategory={setproductsFilterCategory}
          FilterSubCategory={setproductFilterSubCategory}
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
