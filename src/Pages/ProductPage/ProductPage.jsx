import React, { useEffect } from "react";
import products from "../../Data/ProductData";
import Button from "../../Components/Button/Button";
import { addItemToBasket } from "../../Service/BasketService";
import { getSingleProduct } from "../../Service/ProductService";
import "./ProductPage.scss";
// import Topbar from "../../Components/Topbar/Topbar";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  let { id: itemID } = useParams();
  let { userID } = props;

  let name = products[itemID].name;
  let image = `${process.env.PUBLIC_URL}/${products[itemID].image}`;
  let shortDescription = products[itemID].shortDescription;
  let longDescription = products[itemID].longDescription;
  let price = products[itemID].price;
  // let contextType = UserContext;
  // function addToBasket() {
  //     addItemToBasket(0, itemID);
  //     console.log(`Adding item ${itemID} to basket`);
  // }

  // useEffect(() => {
  //   getBasket(userID)
  //     .then((basket) => {
  //       setBasket(basket.items); // get and save content to state
  //     })
  //     .catch((err) => {
  //       createBasket(userID).then((basket) => {
  //         //if we can't get basket, we create one
  //         setBasket(basket);
  //       });
  //     });
  // }, []);

  return (
    <div>
      <div className="Product">
        <div className="columns">
          <div className="leftColumn">
            <img
              className="prodImg"
              src={`${process.env.PUBLIC_URL}${image}`}
              alt={""}
            />
            <p className="longDescription"> {longDescription} </p>
          </div>

          <div className="rightColumn">
            <h1 className="productName"> {name} </h1>
            <p className="shortDescription"> {shortDescription}</p>
            <h3 className="price">{price} DKK</h3>

            <div className="ButtonsContainer">
              <div className="ProductButtonContainer">
                <Button
                  onClick={() => addItemToBasket(userID, itemID)}
                  imageSrc="/assets/images/icons/add-basket-icon.png"
                  imageClass="default-img-loc"
                  btnText="Add to basket!"
                />
              </div>

              <div className="ProductButtonContainer">
                <Button
                  to="/Basket"
                  onClick={() => addItemToBasket(userID, itemID)}
                  imageSrc="/assets/images/icons/horse-icon.png"
                  imageClass="default-img-loc"
                  btnText="Buy now!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
