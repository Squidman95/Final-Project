import React from 'react';
import './Card.scss';
import { Link } from "react-router-dom";

const Card = (props) => {

    let {
        id,
        image,
        header,
        subtext,
        imagePosition = 'top', //otherwise 'left'
        showXbutton = false,
    } = props;


    return (
        <Link to={`/product/${id}`}>
            <div className={`Card Card-${imagePosition}`}>
                <img 
                    src={`${process.env.PUBLIC_URL}${image}`} 
                    alt={header}
                    class='card-img-css'/>
                <div className='Card-text'>
                    <div className='Card-Header'>
                        {header}
                    </div>
                    <div className='Card-subtext'>
                        {subtext}
                    </div>
                </div>
                {showXbutton && 
                    <div className='Card-xbutton'>
                        <img 
                            src={`${process.env.PUBLIC_URL}assets/images/icons/x-icon.png`} 
                            class='card-xbuttonimg'/>
                    </div>
                }
            </div>
        </Link>
    )
}

export default Card;