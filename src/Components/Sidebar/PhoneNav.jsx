import React from "react";

function PhoneNav(props) {
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
                        {animals.map((animalItem, animalIndex) => {
                            return (
                                <div key={animalIndex} className="PhoneNav-Animals-animalfilteritem">
                                    <input
                                        className="PhoneNav-Animal-Checkbox"
                                        type="checkbox"
                                        id={animalItem}
                                        value={animalItem}
                                        onChange={(e) => checkAnimalHandler(animalItem, animalIndex, e)}
                                    />
                                    <label htmlFor={animalItem}>
                                        <img
                                            className="PhoneNav-Animals-icon"
                                            src={`${process.env.PUBLIC_URL}assets/images/icons/${animalItem}-icon.png`}
                                            alt={animalItem}
                                        />
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="PhoneNavCategories">
                    {/* <h1>Categories</h1> */}

                    <div className="PhoneNav-checkbox-container">
                        {categories.map((categoryItem, categoryIndex) => {
                            return (
                                <div key={categoryIndex}>

                                    <input
                                        className="PhoneNav-Filter-Checkbox"
                                        type="checkbox"
                                        id={categoryItem}
                                        value={categoryItem}
                                        onChange={(e) => checkCatHandler(categoryItem, categoryIndex, e)}
                                    />
                                    <label htmlFor={categoryItem}>{categoryItem}</label>

                                    <div className={`PhoneNav-subcategories PhoneNav-subcategories-${subShowState[categoryIndex]}`}>
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

                <div className="PhoneNavPrice">
                    {/* <h1>Price</h1> */}

                    <div>
                        <label htmlFor="minPrice"> Min Price</label>
                        <input
                            type="number"
                            id="minPrice"
                            value={minPrice}
                            min="0"
                            onChange={handleMinPriceChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="maxPrice"> Max Price</label>
                        <input
                            type="number"
                            id="maxPrice"
                            value={maxPrice}
                            min="0"
                            onChange={handleMaxPriceChange}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PhoneNav;
