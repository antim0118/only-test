import React from "react";

interface MinisliderButtonProps {
    invert?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MinisliderButton = ({ invert, onClick }: MinisliderButtonProps) => {
    return (
        <button className="minislider-button" onClick={onClick}>
            <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                style={invert ? { rotate: "180deg" } : undefined}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1 1L6 6L1 11" stroke="#42567A" strokeWidth="2" />
            </svg>
        </button>
    );
};
