import React from "react";
import './Button.scss';
import { Link } from "react-router-dom";

const Button = (props) => {
    let { 
        to,
        onClick,
        imageSrc,
        imageClass,
        btnText,
    } = props;
    return (
        <Link 
            className="btn custom-button"
            role="button"
            to={to}
            onClick={(event) => {
                onClick && onClick(event)
            }}
            > 
            <img 
                src={`${process.env.PUBLIC_URL}${imageSrc}`}
                class={imageClass}
            />
            <div className='Button-Text'>
                {btnText}
            </div>
        </Link>
        );
    }

export default Button;