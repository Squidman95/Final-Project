import React, { useEffect, useState } from 'react';
import "./Sidebar.scss"
import { getAllCategories, getAllSubCategories } from '../../Service/ProductService';

function Sidebar(props) {

    let {FilterAnimal, FilterCategory, FilterSubCategory, FilterMinPrice, FilterMaxPrice} = props;
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubCategories] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        getAllCategories().then(function(categories) {
          setCategories(categories);
        });
      }, []);

    useEffect(() => {
        getAllSubCategories().then(function(subcategories) {
          setSubCategories(subcategories);
        });
    }, []);  

    function checkCatHandler(item, e) {
        if(e.target.checked == true) {
            FilterCategory(item);
        } else {
            FilterCategory(null);
        }
    }

    function checkSubHandler(item, e) {
        if(e.target.checked == true) {
            FilterSubCategory(item);
        } else {
            FilterSubCategory(null);
        }
    }

    const handleMinPriceChange = (e) => {
        setMinPrice(parseInt(e.target.value));
        FilterMinPrice(parseInt(e.target.value));
    }

    const handleMaxPriceChange = (e) => {
        setMaxPrice(parseInt(e.target.value));
        FilterMaxPrice(parseInt(e.target.value));
    }

    return (
        <div className="Sidebar">
            <div className="SidebarAnimals">
                <h1>Animal</h1>
                <p onClick={()=>{FilterAnimal("Dog")}}>
                    Dog
                </p>
                <p onClick={()=>{FilterAnimal("Cat")}}>
                    Cat
                </p>
                <p onClick={()=>{FilterAnimal("Rodent")}}>
                    Rodent
                </p>
                <p onClick={()=>{FilterAnimal("Bird")}}>
                    Bird
                </p>
            </div>

            <div className="SidebarCategories">
                <h1>Categories</h1>  
                {
                    categories.map((item, index)=>{
                        return (
                            <div key={index}>
                                <input type="checkbox" id={item} value={item} onChange={(e)=> checkCatHandler(item, e)}></input>
                                <label for={item}>{item}</label> 
                            </div>
                        );
                    })
                }
            </div>   

            <div className="SidebarSubcategories">
                <h1>Subcategories</h1>
                {
                    subcategories.map((item, index)=>{
                        return (
                            <div key={index}>
                                <input type="checkbox" id={item} value={item} onChange={(e)=> checkSubHandler(item, e)}></input>
                                <label for={item}>{item}</label> 
                            </div>
                        );
                    })
                }
            </div>

            <div className="SidebarPrice">
                <h1>Price</h1>
                <div>
                    <input type="number" id="minPrice" value={minPrice} min="0" onChange={handleMinPriceChange}></input>
                    <label for="minPrice"> Min Price</label>
                </div>
                <div>
                    <input type="number" id="maxPrice" value={maxPrice} min="0" onChange={handleMaxPriceChange}></input>
                    <label for="maxPrice"> Max Price</label>
                </div>
            </div>        
            

            

            
        </div>
    );
}

export default Sidebar;