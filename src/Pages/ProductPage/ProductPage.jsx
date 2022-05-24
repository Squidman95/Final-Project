import React, { useEffect, useState } from "react";
// import products from "../../Data/ProductData";
import Button from "../../Components/Button/Button";
import { getBasket, addItemToBasket } from "../../Service/BasketService";
import { getSingleProduct } from "../../Service/ProductService";
import "./ProductPage.scss";
// import Topbar from "../../Components/Topbar/Topbar";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  let { id: itemID } = useParams();
  let { userID, setBasket } = props;
  const [product, setProduct] = useState([]);

  function addToBasket(itemID) {
    addItemToBasket(userID, itemID).then(() => {
      getBasket(userID) // something wrong with the userID?
        .then((result) => {
          setBasket(result.items);
        });
    });
  }

  useEffect(() => {
    getSingleProduct(itemID).then(function (productResult) {
      setProduct(productResult[0]);
    });
  }, []);

  return (
    <div>
      <div className="Product">
        <div className="columns">
          <div className="leftColumn">
            <img
              className="prodImg"
              src={`${process.env.PUBLIC_URL}/${product.image}`}
              alt={"Unable to find"}
            />
            <p className="longDescription"> {product.longDescription} </p>
          </div>

          <div className="rightColumn">
            <h1 className="productName"> {product.name} </h1>
            <p className="shortDescription"> {product.shortDescription}</p>
            <h3 className="price">{product.price} DKK</h3>

            <div className="ButtonsContainer">
              <div className="ProductButtonContainer">
                <Button
                  onClick={() => {
                    // addItemToBasket(userID, itemID);
                    addToBasket(itemID);
                  }}
                  imageSrc="/assets/images/icons/add-basket-icon.png"
                  imageClass="default-img-loc"
                  btnText="Add to basket!"
                />
              </div>

              <div className="ProductButtonContainer">
                <Button
                  to="/Basket"
                  onClick={() => {
                    // addItemToBasket(userID, itemID);
                    addToBasket(itemID);
                  }}
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
