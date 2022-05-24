import React, { useEffect, useState } from "react";
import "./PhoneNav.scss";

function PhoneNav(props) {
    let {
        createAnimalFilterItem,
        categories,
        checkCatHandler,
        subcategories,
        checkSubHandler,
        minPrice,
        maxPrice,
        handleMinPriceChange,
        handleMaxPriceChange
    } = props;

    return (
        <div className="PhoneNav">
            
                <input type="checkbox" name="" id="hamburger" />
                <div className="PhoneNav-Hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            
            <div className="PhoneNav-Filter-Items">

                <div className="PhoneNavAnimals">
                    <h1>Animal</h1>
                    <div className="PhoneNavAnimals-grid">
                        {createAnimalFilterItem("Dog")}
                        {createAnimalFilterItem("Cat")}
                        {createAnimalFilterItem("Rodent")}
                        {createAnimalFilterItem("Bird")}
                    </div>
                </div>

                <div className="PhoneNavCategories">
                    <h1>Categories</h1>

                    <div className="PhoneNav-checkbox-container">
                        {categories.map((categoryItem, categoryIndex) => {
                            return (
                                <div key={categoryIndex}>

                                    <input
                                        className="PhoneNav-Filter-Checkbox"
                                        type="checkbox"
                                        id={categoryItem}
                                        value={categoryItem}
                                        onChange={(e) => checkCatHandler(categoryItem, e)}
                                    />
                                    <label htmlFor={categoryItem}>{categoryItem}</label>

                                    <div className="PhoneNav-subcategories" id={"sub" + categoryItem}>
                                        {subcategories
                                            .filter((e) => e.category === categoryItem)
                                            .map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <input
                                                            className="PhoneNav-Filter-Checkbox"
                                                            type="checkbox"
                                                            id={item.subcategory}
                                                            value={item.subcategory}
                                                            onChange={(e) => checkSubHandler(item.subcategory, e) }
                                                        />
                                                        <label htmlFor={item.subcategory}> {item.subcategory} </label>
                                                    </div>
                                                );
                                            })}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>

                <div className="PhoneNavPrice">
                    <h1>Price</h1>

                    <div>
                        <input
                            type="number"
                            id="minPrice"
                            value={minPrice}
                            min="0"
                            onChange={handleMinPriceChange}
                        />
                        <label htmlFor="minPrice"> Min Price</label>
                    </div>
                    
                    <div>
                        <input
                            type="number"
                            id="maxPrice"
                            value={maxPrice}
                            min="0"
                            onChange={handleMaxPriceChange}
                        />
                        <label htmlFor="maxPrice"> Max Price</label>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PhoneNav;
