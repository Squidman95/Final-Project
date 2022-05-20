import React from "react";
import "./Button.scss";
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
    <div className="btn custom-button">
      {to !== null ? (
        <Link
          className="c-button"
          role="button"
          to={to}
          onClick={(event) => {
            onClick && onClick(event);
          }}
        >
          {imageSrc !== null ? (
            <div className="c-button">
              <img
                src={`${process.env.PUBLIC_URL}${imageSrc}`}
                className={imageClass}
              />
              <div className="Button-Text">{btnText}</div>
            </div>
          ) : (
            <div className="Button-Text">{btnText}</div>
          )}
        </Link>
      ) : (
        <button
          className="c-button"
          role="button"
          onClick={(event) => {
            onClick && onClick(event);
          }}
        >
          {imageSrc !== null ? (
            <div className="c-button">
              <img
                src={`${process.env.PUBLIC_URL}${imageSrc}`}
                className={imageClass}
              />
              <div className="Button-Text">{btnText}</div>
            </div>
          ) : (
            <div className="Button-Text">{btnText}</div>
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
