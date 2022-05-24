import React, {useEffect, useState} from "react";
import './NavbarController.scss';
import Sidebar from './Sidebar';
import PhoneNav from './PhoneNav';
import {
    getAllCategories,
    getAllSubCategories,
} from "../../Service/ProductService";

const NavbarController = ( props ) => {

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
    const [subStateArray, setSubStateArray] = useState([]);
    

    useEffect(() => {
        getAllCategories().then(function (categories) {
            setCategories(categories);
            setSubStateArray(new Array(categories.length).fill('false'));
        });
    }, []);

    useEffect(() => {
        getAllSubCategories().then(function (subcategories) {
            setSubCategories(subcategories);
        });
    }, []);


    function checkCatHandler(item, index, e) {
        //let id = "sub" + item;
        if (e.target.checked === true) {
            FilterCategory(item);
            //document.getElementById(id).style.display = "block  ";
            subStateArray[index] = 'true';
        } else {
            FilterCategory(null);
            //document.getElementById(id).style.display = "none";
            FilterSubCategory(null);
            subStateArray[index] = 'false';
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
            <div className="Animals-animalfilteritem">
                <p onClick = {() => { FilterAnimal(animal); }} >
                    <img
                        className="Animals-icon"
                        src={`${process.env.PUBLIC_URL}assets/images/icons/${animal}-icon.png`}
                        alt={animal}
                    />
                </p>
            </div>
        );
    }

    return (
        <div className="NavbarController">

            <div className="NavbarController-Sidebar">
                <Sidebar
                    createAnimalFilterItem = {createAnimalFilterItem}
                    categories = {categories}
                    checkCatHandler = {checkCatHandler}
                    subcategories = {subcategories}
                    checkSubHandler = {checkSubHandler}
                    minPrice = {minPrice}
                    maxPrice = {maxPrice}
                    handleMinPriceChange = {handleMinPriceChange}
                    handleMaxPriceChange = {handleMaxPriceChange}
                    subStateArray = {subStateArray}
                />
            </div>

            <div className="NavbarController-PhoneNav">
                <PhoneNav
                    createAnimalFilterItem = {createAnimalFilterItem}
                    categories = {categories}
                    checkCatHandler = {checkCatHandler}
                    subcategories = {subcategories}
                    checkSubHandler = {checkSubHandler}
                    minPrice = {minPrice}
                    maxPrice = {maxPrice}
                    handleMinPriceChange = {handleMinPriceChange}
                    handleMaxPriceChange = {handleMaxPriceChange}
                    subStateArray = {subStateArray}
                />
            </div>

        </div>
    );
};

export default NavbarController;