import React, { useEffect, useState } from 'react';
import "./Sidebar.scss"
import { getAllCategories } from '../../Service/ProductService';
// import Select from 'react-select';
// import AsyncSelect from 'react-select/async';

const animalsChoices = [
    { label: 'Dog', value: 'Dog'},
    { label: 'Cat', value: 'Cat'},
    { label: 'Bird', value: 'Bird'},
    { label: 'small', value: 'small'}
];



function Sidebar(props) {

    let {FilterAnimal, FilterMinPrice, FilterMaxPrice} = props;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then(function(categories) {
          setCategories(categories);
        });
      }, []);

    return (
        <div className="Sidebar">
            <div className="SidebarAnimals">
                <h1>Animal</h1>
                <p onClick={()=>{FilterAnimal("Dog")}}>
                    Dog
                </p>
                <p>
                    Cat
                </p>
                <p>
                    Rodent
                </p>
                <p>
                    Bird
                </p>
            </div>

            <div className="SidebarCategories">
                <h1>Categories</h1>  
                {
                    categories.map((item, index)=>{
                        return (
                            <div key={index}>
                                <input type="checkbox" id={item} value={item}></input>
                                <label for={item}>{item}</label> 
                            </div>
                        );
                    })
                }
               {/*  <div>
                    <input type="checkbox" id="food" value="Food"></input>
                    <label for="food">Food</label> 
                </div>
                <div>
                    <input type="checkbox" id="Bed" value="Bed"></input>
                    <label for="Bed">Bed</label>
                </div>
                <div>
                    <input type="checkbox" id="Toys" value="Toys"></input>
                    <label for="Toys">Toys</label>
                </div> */}
            </div>   

            <div className="SidebarSubcategories">
                <h1>Subcategories</h1>
            </div>

            <div className="SidebarPrice">
                <h1>Price</h1>
            </div>        
            

            

            
        </div>
    );
}

export default Sidebar;