import React from "react";

type SliderButtonProps = {
    invert?: boolean;
};

export const SliderButton = ({ invert }: SliderButtonProps) => {
    return (
        <button className={`slider-button ${invert ? "slider-button-left" : "slider-button-right"}`}>
            <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={invert ? { rotate: "180deg" } : undefined}
            >
                <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
            </svg>
        </button>
    );
};
