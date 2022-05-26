import React, { useEffect, useState } from "react";
import './NavbarController.scss';
import Sidebar from './Sidebar';
import PhoneNav from './PhoneNav';
import {
    getAllAnimals,
    getAllCategories,
    getAllSubCategories,
} from "../../Service/ProductService";

const NavbarController = (props) => {

    let {
        FilterAnimal,
        FilterState,  //if removed, check that the states are updated!!!
        FilterCategory,
        FilterSubCategory,
        FilterMinPrice,
        FilterMaxPrice,
    } = props;

    const [animals, setAnimals] = useState([]);
    const [animalArray, setAnimalArray] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [subCategoriesArray, setSubCategoriesArray] = useState([]);
    const [subShowState, setSubShowState] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        getAllAnimals().then(function (animal) {
            setAnimals(animal);
            setAnimalArray(new Array(animal.length).fill(null));
        });
    }, []);

    useEffect(() => {
        getAllCategories().then(function (categories) {
            setCategories(categories);
            setSubShowState(new Array(categories.length).fill('false'));
        });
    }, []);

    useEffect(() => {
        getAllSubCategories().then(function (subcategories) {
            setSubCategories(subcategories);
            setSubCategoriesArray(new Array(subcategories.length).fill(null));
        });
    }, []);

    function checkAnimalHandler(animal, index, e) {
        if (e.target.checked === true) {
            animalArray[index] = animal;
            FilterAnimal(animalArray);
            FilterState(animal);
        } else {
            animalArray[index] = null;
            FilterAnimal(animalArray);
            FilterState(Math.random());
        }
    }

    function checkCatHandler(item, index, e) {
        if (e.target.checked === true) {
            FilterCategory(item);
            subShowState[index] = 'true';
        } else {
            FilterCategory(null);
            resetSubCatFilter(item);
            subShowState[index] = 'false';
        }
    }

    function resetSubCatFilter(category) {
        subCategories.filter(function (el) {
            return el.category === category;
        }).map((e) => {
            subCategoriesArray[getSubCatIndex(e.subcategory)] = null;
        })
        FilterSubCategory(subCategoriesArray);
    }

    function getSubCatIndex(item) {
        return subCategories.findIndex(el => {
            return el.subcategory === item;
        });
    }

    function checkSubHandler(item, e) {

        let index = getSubCatIndex(item);

        if (e.target.checked === true) {
            subCategoriesArray[index] = item;
            FilterSubCategory(subCategoriesArray);
            FilterState(item);
        } else {
            subCategoriesArray[index] = null;
            FilterSubCategory(subCategoriesArray);
            FilterState(Math.random());
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


    return (
        <div className="NavbarController">

            <div className="NavbarController-Sidebar">
                <Sidebar
                    animals={animals}
                    checkAnimalHandler={checkAnimalHandler}
                    categories={categories}
                    checkCatHandler={checkCatHandler}
                    subcategories={subCategories}
                    subShowState={subShowState}
                    checkSubHandler={checkSubHandler}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    handleMinPriceChange={handleMinPriceChange}
                    handleMaxPriceChange={handleMaxPriceChange}
                />
            </div>

            <div className="NavbarController-PhoneNav">
                <PhoneNav
                /* createAnimalFilterItem={createAnimalFilterItem}
                categories={categories}
                checkCatHandler={checkCatHandler} */
                /* subcategories={subcategories}
                checkSubHandler={checkSubHandler} */
                /* minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPriceChange={handleMinPriceChange}
                handleMaxPriceChange={handleMaxPriceChange} */
                /* subStateArray={subStateArray} */
                />
            </div>

        </div>
    );
};

export default NavbarController;