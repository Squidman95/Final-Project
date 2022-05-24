    import React, { useEffect, useState } from "react";
    import "./BasketPage.scss";
    import Button from "../../Components/Button/Button";
    import Card from "../../Components/Card/Card";
    import {
    getBasket,
    createBasket,
    deleteItemFromBasket,
    } from "../../Service/BasketService";

    const BasketPage = (props) => {
    let { userID } = props;

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        getBasket(userID)
        .then((basket) => {
            setBasket(basket.items); // get and save content to state
        })
        .catch((err) => {
            createBasket(userID).then((basket) => {
            //if we can't get basket, we create one
            setBasket(basket);
            });
        });
    }, []);

    function removeBasketItem(productId) {
        deleteItemFromBasket(userID, productId) //remove item from backend
        .then(function () {
            // if successful, then also remove from frontend
            setBasket(
            basket.filter(function (el) {
                return el.id !== productId;
            })
            );
        });
    }

    // calculating the total (should maybe go somewhere else..)
    let total = 0;
    basket.forEach(function (item) {
        total += item.price;
    });

    return (
        <div className="BasketPage">
            
            <h1 className="basketHeader">Products in basket:</h1>

            <div className="Basket-Cards">
                {basket.map((item, index) => {
                return (
                    <Card
                    key={index}
                    id={item.id}
                    image={item.image}
                    header={item.name}
                    price={item.price}
                    imagePosition="left"
                    showXbutton="true"
                    onClickXbutton={(event) => {
                        event.preventDefault();
                        removeBasketItem(item.id); //removes ALL products with this id, not ideal.
                    }}
                    />
                );
                })}
            </div>

            <div className="TotalAndButton">

                <h3 className="total">Total: {total} DKK</h3>
                <div className="Checkout-Button">
                <Button
                    to="/Payment"
                    onClick={() => console.log("You clicked on the custom button!")}
                    imageSrc="/assets/images/icons/basket-icon.png"
                    imageClass="default-img-loc"
                    btnText="Checkout!"
                />
                </div>

            </div>

        </div>
    );
    };

    export default BasketPage;
