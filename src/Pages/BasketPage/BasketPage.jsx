import React, { useEffect, useState } from "react";
import "./BasketPage.scss";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import { getBasket, deleteItemFromBasket } from "../../Service/BasketService";

const BasketPage = (props) => {
  let { userID, setBasket, basket } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getBasket(userID)
      .then((result) => {
        setBasket(result.items); // get and save content to state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function removeBasketItem(itemID) {
    deleteItemFromBasket(userID, itemID).then(() => {
      getBasket(userID) // something wrong with the userID?
        .then((result) => {
          setBasket(result.items);
          console.log(result.items);
        });
    });
  }

  useEffect(() => {
    let tempTotal = 0;
    basket.forEach(function (item) {
      console.log(item);
      tempTotal += item.price;
    });
    setTotal(tempTotal);
  }, [basket]);

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
            onClick={() =>
              basket.forEach(function (item) {
                // empties the basket when checking out
                removeBasketItem(item.id);
              })
            }
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
