import React from "react";
import "./navigation.scss";
import leftArrow from "./left-arrow.svg";
import rightArrow from "./right-arrow.svg";

export default function IndexButtonSlider({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img alt="arrows" src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}