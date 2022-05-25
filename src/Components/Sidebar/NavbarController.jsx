import React, { useEffect, useState } from "react";
import './NavbarController.scss';
import Sidebar from './Sidebar';
import PhoneNav from './PhoneNav';
import {
    getAllAnimals
    /* getAllCategories, */
    /* getAllSubCategories, */
} from "../../Service/ProductService";

const NavbarController = (props) => {

    let {
        FilterAnimal,
        /* FilterCategory, */
        /* FilterSubCategory, */
        /* FilterMinPrice,
        FilterMaxPrice, */
    } = props;

    const [animalArray, setAnimalArray] = useState([]);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        getAllAnimals().then(function (animal) {
            setAnimals(animal);
            setAnimalArray(new Array(animal.length).fill(null));
        });
    }, []);

    function checkAnimalHandler(animal, index, e) {
        if (e.target.checked === true) {
            animalArray[index] = animal;
            FilterAnimal(animalArray);
            console.log('check1');
            console.log(animalArray);
        } else {
            animalArray[index] = null;
            FilterAnimal(animalArray);
            console.log('check2');
            console.log(animalArray);
        }
    }

    /* const [categories, setCategories] = useState([]); */
    /* const [subcategories, setSubCategories] = useState([]); */
    /* const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0); */
    /* const [subStateArray, setSubStateArray] = useState([]); */


    /* useEffect(() => {
        getAllCategories().then(function (categories) {
            setCategories(categories); */
    /* setSubStateArray(new Array(categories.length).fill('false')); */
    /*  });
 }, []); */

    /* useEffect(() => {
        getAllSubCategories().then(function (subcategories) {
            setSubCategories(subcategories);
        });
    }, []); */


    /* function checkCatHandler(item, index, e) { */
    //let id = "sub" + item;
    /* if (e.target.checked === true) {
        FilterCategory(item); */
    //document.getElementById(id).style.display = "block  ";
    /* subStateArray[index] = 'true'; */
    /*  } else {
         FilterCategory(null); */
    //document.getElementById(id).style.display = "none";
    /*  FilterSubCategory(null);
     subStateArray[index] = 'false'; */
    /*  }
 } */

    /* function checkSubHandler(item, e) {
        if (e.target.checked === true) {
            FilterSubCategory(item);
        } else {
            FilterSubCategory(null);
        }
    } */

    /*  const handleMinPriceChange = (e) => {
         setMinPrice(parseInt(e.target.value));
         FilterMinPrice(parseInt(e.target.value));
     };
 
     const handleMaxPriceChange = (e) => {
         setMaxPrice(parseInt(e.target.value));
         FilterMaxPrice(parseInt(e.target.value));
     }; */


    return (
        <div className="NavbarController">

            <div className="NavbarController-Sidebar">
                <Sidebar
                    animals={animals}
                    checkAnimalHandler={checkAnimalHandler}
                /*  categories={categories}
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