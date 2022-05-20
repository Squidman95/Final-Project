import React from "react";
import './Button.scss';
import { Link } from "react-router-dom";

const Button = (props) => {
    let { 
        to = null,
        onClick = null,
        imageSrc = null,
        imageClass = null,
        btnText = null,
    } = props;
    return (
        <div>
            {to !== null ? 
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
            :
            <button 
                className="btn custom-button"
                role="button"
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
            </button>
            }
            </div>
        );
    }

export default Button;