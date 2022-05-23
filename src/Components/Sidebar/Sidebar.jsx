import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import {
  getAllCategories,
  getAllSubCategories,
} from "../../Service/ProductService";

function Sidebar(props) {
  let {
    FilterAnimal,
    FilterCategory,
    FilterSubCategory,
    FilterMinPrice,
    FilterMaxPrice,
  } = props;
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    getAllCategories().then(function (categories) {
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    getAllSubCategories().then(function (subcategories) {
      setSubCategories(subcategories);
    });
  }, []);

  function checkCatHandler(item, e) {
    let id = "sub" + item;
    if (e.target.checked === true) {
      FilterCategory(item);
      document.getElementById(id).style.display = "block  ";
    } else {
      FilterCategory(null);
      document.getElementById(id).style.display = "none";
      FilterSubCategory(null);
    }
  }

  function checkSubHandler(item, e) {
    if (e.target.checked === true) {
      FilterSubCategory(item);
    } else {
      FilterSubCategory(null);
    }
  }

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
    FilterMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
    FilterMaxPrice(parseInt(e.target.value));
  };

  function createAnimalFilterItem(animal) {
    return (
      <div className="SidebarAnimals-animalfilteritem">
        <p
          onClick={() => {
            FilterAnimal(animal);
          }}
        >
          <img
            className="SidebarAnimals-icon"
            src={`${process.env.PUBLIC_URL}assets/images/icons/${animal}-icon.png`}
            alt={animal}
          />
        </p>
      </div>
    );
  }

  return (
    <div className="Sidebar">
      <div className="SidebarAnimals">
        <h1>Animal</h1>
        <div className="SidebarAnimals-grid">
          {createAnimalFilterItem("Dog")}
          {createAnimalFilterItem("Cat")}
          {createAnimalFilterItem("Rodent")}
          {createAnimalFilterItem("Bird")}
        </div>
      </div>

      <div className="SidebarCategories">
        <h1>Categories</h1>
        <div className="Sidebar-checkbox-container">
          {categories.map((categoryItem, categoryIndex) => {
            return (
              <div key={categoryIndex}>
                <input
                  type="checkbox"
                  id={categoryItem}
                  value={categoryItem}
                  onChange={(e) => checkCatHandler(categoryItem, e)}
                ></input>
                <label htmlFor={categoryItem}>{categoryItem}</label>

                <div
                  className="Sidebar-subcategories"
                  id={"sub" + categoryItem}
                >
                  {subcategories
                    .filter((e) => e.category === categoryItem)
                    .map((item, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={item.subcategory}
                            value={item.subcategory}
                            onChange={(e) =>
                              checkSubHandler(item.subcategory, e)
                            }
                          ></input>
                          <label htmlFor={item.subcategory}>
                            {item.subcategory}
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="SidebarSubcategories">
                <h1>Subcategories</h1>
                {
                    subcategories.map((item, index)=>{
                        return (
                            <div key={index}>
                                <input type="checkbox" id={item.subcategory} value={item.subcategory} onChange={(e)=> checkSubHandler(item.subcategory, e)}></input>
                                <label htmlFor={item.subcategory}>{item.subcategory}</label> 
                            </div>
                        );
                    })
                }
            </div> */}

      <div className="SidebarPrice">
        <h1>Price</h1>
        <div>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            min="0"
            onChange={handleMinPriceChange}
          ></input>
          <label htmlFor="minPrice"> Min Price</label>
        </div>
        <div>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            min="0"
            onChange={handleMaxPriceChange}
          ></input>
          <label htmlFor="maxPrice"> Max Price</label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
