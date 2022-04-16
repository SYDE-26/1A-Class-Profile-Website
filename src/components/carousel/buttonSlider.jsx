import React from "react";
import "./carousel.scss";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide-photo next" : "btn-slide-photo prev"}
        >
            <img alt="arrows" src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}