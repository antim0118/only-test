import React from "react";

export type CardProps = {
    year: number;
    text: string;
};

export const Card = ({ year, text }: CardProps) => {
    return (
        <div className="card">
            <span className="card__year">{year}</span>
            <span className="card__text">{text}</span>
        </div>
    );
};
