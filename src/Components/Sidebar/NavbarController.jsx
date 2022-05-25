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
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [animalArray, setAnimalArray] = useState([]);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        getAllAnimals().then(function (animal) {
            setAnimals(animal);
            setAnimalArray(new Array(animal.length).fill(null));
        });
    }, []);

    useEffect(() => {
        getAllCategories().then(function (categories) {
            setCategories(categories);
            setSubStateArray(new Array(categories.length).fill('false'));
            setCategoriesArray(new Array(categories.length).fill(null));
        });
    }, []);

    useEffect(() => {
        getAllSubCategories().then(function (subcategories) {
            setSubCategories(subcategories);
        });
    }, []);

    function checkAnimalHandler(animal, index, e) {
        if (e.target.checked === true) {
            console.log('check9.1');
            console.log(animalArray[index]);
            animalArray[index] = animal;
            console.log('check9.2');
            console.log(animalArray[index]);
            FilterAnimal(animalArray);
        } else {
            console.log('check9.3');
            console.log(animalArray[index]);
            animalArray[index] = null;
            FilterAnimal(animalArray);
            console.log('check9.4');
            console.log(animalArray[index]);
        }
    }


    function checkCatHandler(item, index, e) {
        if (e.target.checked === true) {
            categoriesArray[index] = item;
            console.log(categoriesArray);
            FilterCategory(categoriesArray);
            subStateArray[index] = 'true';
        } else {
            FilterCategory(null);
            FilterSubCategory(null);
            categoriesArray[index] = null;
            console.log(categoriesArray);
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

    function createAnimalFilterItem(animal, index) {
        
        return (
            <div className="Sidebar-Animals-animalfilteritem PhoneNav-Animals-animalfilteritem">

                <input
                    className="Sidebar-Animal-Checkbox PhoneNav-Animal-Checkbox"
                    type="checkbox"
                    id={animal}
                    value={animal}
                    onChange={(e) => checkAnimalHandler(animal, index, e)}
                />
                <label htmlFor={animal}>
                    <img
                        className="Sidebar-Animals-icon PhoneNav-Animals-icon"
                        src={`${process.env.PUBLIC_URL}assets/images/icons/${animal.animalItem}-icon.png`}
                        alt={animal}
                        
                    />
                </label>
            </div>
        );
    }

    return (
        <div className="NavbarController">

            <div className="NavbarController-Sidebar">
                <Sidebar
                    //createAnimalFilterItem={createAnimalFilterItem}
                    animals={animals}
                    //animalArray={animalArray}
                    checkAnimalHandler={checkAnimalHandler}
                    categories={categories}
                    checkCatHandler={checkCatHandler}
                    subcategories={subcategories}
                    checkSubHandler={checkSubHandler}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    handleMinPriceChange={handleMinPriceChange}
                    handleMaxPriceChange={handleMaxPriceChange}
                    subStateArray={subStateArray}
                />
            </div>

            <div className="NavbarController-PhoneNav">
                <PhoneNav
                    createAnimalFilterItem={createAnimalFilterItem}
                    categories={categories}
                    checkCatHandler={checkCatHandler}
                    subcategories={subcategories}
                    checkSubHandler={checkSubHandler}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    handleMinPriceChange={handleMinPriceChange}
                    handleMaxPriceChange={handleMaxPriceChange}
                    subStateArray={subStateArray}
                />
            </div>

        </div>
    );
};

export default NavbarController;