import React from 'react';
import './Card.scss';

const Card = (props) => {

    let {
        image,
        header,
        subtext
    } = props;


    return (
        <div className='Card'>
            <img src={image}/>
            <div className='Card-text'>
                <div className='Card-Header'>
                    {header}
                </div>
                <div className='Card-subtext'>
                    {subtext}
                </div>
            </div>
        </div>
    )
}

export default Card;