import React from "react";

function Sidebar(props) {
    let {
        animals,
        checkAnimalHandler,
        categories,
        checkCatHandler,
        subcategories,
        subShowState,
        checkSubHandler,
        minPrice,
        maxPrice,
        handleMinPriceChange,
        handleMaxPriceChange,
    } = props;

    return (
        <div className="Sidebar">
            <div className="Sidebar-Filter-Items">
                <div className="SidebarAnimals">
                    <h1>Animal</h1>
                    <div className="SidebarAnimals-grid">
                        {animals.map((animalItem, animalIndex) => {
                            return (
                                <div key={animalIndex} className="Sidebar-Animals-animalfilteritem">
                                    <input
                                        className="Sidebar-Animal-Checkbox"
                                        type="checkbox"
                                        id={animalItem}
                                        value={animalItem}
                                        onChange={(e) => checkAnimalHandler(animalItem, animalIndex, e)}
                                    />
                                    <label htmlFor={animalItem}>
                                        <img
                                            className="Sidebar-Animals-icon"
                                            src={`${process.env.PUBLIC_URL}assets/images/icons/${animalItem}-icon.png`}
                                            alt={animalItem}
                                        />
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="SidebarCategories">
                    {/* <h1>Categories</h1> */}

                    <div className="Sidebar-checkbox-container">
                        {categories.map((categoryItem, categoryIndex) => {
                            return (
                                <div key={categoryIndex}>

                                    <input
                                        className="Sidebar-Filter-Checkbox"
                                        type="checkbox"
                                        id={categoryItem}
                                        value={categoryItem}
                                        onChange={(e) => checkCatHandler(categoryItem, categoryIndex, e)}
                                    />

                                    <label htmlFor={categoryItem}>{categoryItem}</label>

                                    <div className={`Sidebar-subcategories Sidebar-subcategories-${subShowState[categoryIndex]}`}>
                                        {subcategories
                                            .filter((e) => e.category === categoryItem)
                                            .map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <input
                                                            className="Sidebar-Filter-Checkbox"
                                                            type="checkbox"
                                                            id={item.subcategory}
                                                            value={item.subcategory}

                                                            onChange={(e) => checkSubHandler(item.subcategory, e)}
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

                <div className="SidebarPrice">
                    {/* <h1>Price</h1> */}

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

export default Sidebar;
