import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { getBasket, addItemToBasket } from "../../Service/BasketService";
import { getSingleProduct } from "../../Service/ProductService";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  let { id: itemID } = useParams();
  let { userID, setBasket } = props;
  const [product, setProduct] = useState([]);

  function addToBasket(itemID) {
    addItemToBasket(userID, itemID).then(() => {
      getBasket(userID) 
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
              src={`http://localhost:4000${product.image}`}
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
