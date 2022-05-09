import React from 'react';
import './Card.scss';
import { Link } from "react-router-dom";

const Card = (props) => {

    let {
        id,
        image,
        header,
        subtext
    } = props;


    return (
        <Link to={`/product/${id}`}>
            <div className='Card'>
                <img src={`${process.env.PUBLIC_URL}${image}`} alt={header}/>
                <div className='Card-text'>
                    <div className='Card-Header'>
                        {header}
                    </div>
                    <div className='Card-subtext'>
                        {subtext}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;