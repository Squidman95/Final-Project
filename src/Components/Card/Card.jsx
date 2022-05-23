import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
    let {
        id,
        image,
        header,
        subtext,
        price,
        imagePosition = "top", //otherwise 'left'
        showXbutton = false,
        carouselStyle = false,
        onClickXbutton = null
    } = props;

    return (
        <Link to={`/product/${id}`}>
            <div className={`Card Card-${imagePosition}`}>

                <img
                    src={`${process.env.PUBLIC_URL}${image}`}
                    alt={header}
                    className="card-img-css"
                />

                <div className={`Card-text ${carouselStyle ? `Card-text-carousel` : ``}`}>
                    <div className="Card-Header">{header}</div>
                    <div className="Card-subtext">{subtext}</div>
                    <div className="Card-price">{price} DKK</div>
                </div>

                {showXbutton && (
                    <div className="Card-xbutton">
                        <img
                            src={`${process.env.PUBLIC_URL}assets/images/icons/x-icon.png`}
                            className="card-xbuttonimg"
                            alt={header}
                            onClick={(event) => {
                                onClickXbutton && onClickXbutton(event);
                            }}
                        />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default Card;
