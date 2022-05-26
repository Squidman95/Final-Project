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

  // const [visibility, setVisibility] = useState(true); // For the login/signup popup

  const [allProducts, setAllProducts] = useState([]); // the reference (all products). Should not change
  const [filteredProducts, setFilteredProducts] = useState([]); // SHOULD BE THE SHOWN LIST

  // filter variables

  const [productsFilterAnimal, setproductsFilterAnimal] = useState(null);
  const [filterState, setFilterState] = useState('false');
  const [productsFilterCategory, setproductsFilterCategory] = useState(null);
  const [productsFilterSubCategory, setproductFilterSubCategory] = useState(null);
  const [productsFilterMinPrice, setproductsFilterMinPrice] = useState(0);
  const [productsFilterMaxPrice, setproductsFilterMaxPrice] = useState(1000);
  const [allFilterState, setAllFilterState] = useState(false);

  //const [subCatFlag, setSubCatFlag] = useState(true);
  //const [animalFlag, setAnimalFlag] = useState(true);


  useEffect(() => {
    getAllProducts().then(function (products) {
      setAllProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  useEffect(() => {

    console.log('new rendering');
    let localProducts = getProducts();

    localProducts = updateAnimalFilter(localProducts);
    checkFilterState();
    localProducts = updateCategoryFilter(localProducts);
    checkFilterState();

    if (productsFilterSubCategory !== null && productsFilterSubCategory !== undefined) {
      console.log('check4.0');
      console.log(productsFilterSubCategory);
      if (checkFilterState()) {
        console.log('check4');
        console.log(localProducts);
        localProducts = getProducts();
        console.log(localProducts);
      } else if (nullArray(productsFilterSubCategory)) {
        console.log('check4.5');
      } else {
        console.log('check5');
        console.log(localProducts);
        localProducts = getSubCategoriesFilterItems(localProducts, productsFilterSubCategory);
        console.log(localProducts);
      }
    }
    

    if (productsFilterMinPrice < productsFilterMaxPrice && productsFilterMinPrice >= 0 && productsFilterMaxPrice > 0) {
      if (productsFilterMinPrice !== null && productsFilterMinPrice !== undefined) {
        localProducts = getMinPriceFilteredItems(localProducts, productsFilterMinPrice);
      }

      if (productsFilterMaxPrice !== null && productsFilterMaxPrice !== undefined) {
        localProducts = getMaxPriceFilteredItems(localProducts, productsFilterMaxPrice);
      }
    }


    console.log('check18');
    console.log(localProducts);
    setFilteredProducts(localProducts);
  }, [productsFilterAnimal, filterState, productsFilterCategory, productsFilterSubCategory, productsFilterMaxPrice, productsFilterMinPrice, setFilteredProducts]);

  function checkFilterState() {
    if (nullArray(productsFilterSubCategory) && nullArray(productsFilterAnimal) && nullArray(productsFilterAnimal)) {
      setAllFilterState(true);
    } else {
      setAllFilterState(false);
    }
  }

  function updateAnimalFilter(localProducts) {
    //console.log('animalflag: ' + animalFlag);

    if (productsFilterAnimal !== null && productsFilterAnimal !== undefined) {
      console.log('check0');
      if (checkFilterState()) {
        console.log('check1');
        console.log(localProducts);
        localProducts = getProducts();
        console.log(localProducts);
      } else if (nullArray(productsFilterAnimal)) {
        console.log('check1.5');
      } else {
        console.log('check2');
        console.log(localProducts);
        localProducts = getNameFilteredItems(localProducts, productsFilterAnimal);
        console.log(localProducts);
      }
    }
    return localProducts;
  }

  function updateCategoryFilter(localProducts) {
    if (productsFilterCategory !== null && productsFilterCategory !== undefined) {
      console.log('check3');
      console.log(localProducts);
      localProducts = getCategoriesFilterItems(localProducts, productsFilterCategory);
      console.log(localProducts);
    }
    return localProducts;
  }


  function getProducts() {
    return allProducts;
  }

  function nullArray(arr) {
    if (arr === undefined || arr === null) {
      return true;
    } else if (arr.every(e => e === null)) {
      return true;
    } else {
      return false;
    }
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

  function getMinPriceFilteredItems(products, priceMin) {
    return products.filter(function (el) {
      return el.price >= priceMin;
    });
  }

  function getMaxPriceFilteredItems(products, priceMax) {
    return products.filter(function (el) {
      return el.price <= priceMax;
    });
  }

  return (
    <div className="Frontpage-Content">

      <div className="Frontpage-sidebarcontainer">
        <NavbarController
          FilterAnimal={setproductsFilterAnimal}
          FilterState={setFilterState}
          FilterCategory={setproductsFilterCategory}
          FilterSubCategory={setproductFilterSubCategory}
          FilterMinPrice={setproductsFilterMinPrice}
          FilterMaxPrice={setproductsFilterMaxPrice}
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
