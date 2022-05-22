import React from "react";
import products from "../../Data/ProductData";
import Button from "../../Components/Button/Button";
import { addItemToBasket } from "../../Service/BasketService";
import "./ProductPage.scss";
// import Topbar from "../../Components/Topbar/Topbar";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  let { id: itemID } = useParams();
  let { userId } = props;

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

  return (
    <div>
      {/* <Topbar isLoggedIn={false} /> */}
      <div className="Product">
        <div className="columns">
          <div className="leftColumn">
            
            <img className="prodImg" src={`${process.env.PUBLIC_URL}${image}`} alt={''}/>
            <p className="longDescription"> {longDescription} </p>

          </div>

          <div className="rightColumn">

            <h1 className="productName"> {name} </h1>
            <p className="shortDescription"> {shortDescription}</p>
            <h3 className="price">{price} DKK</h3>

            <div className="ButtonsContainer">

              <div className="ProductButtonContainer">
                <Button
                  onClick={() => addItemToBasket(userId, itemID)}
                  imageSrc="/assets/images/icons/add-basket-icon.png"
                  imageClass="default-img-loc"
                  btnText="Add to basket!"
                />
              </div>

              <div className="ProductButtonContainer">
                <Button
                  to="/Basket"
                  onClick={() => addItemToBasket(userId, itemID)}
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
