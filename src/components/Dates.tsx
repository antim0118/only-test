import React from "react";
import { AnimatedNumber } from "./AnimatedNumber";

type DatesProps = {
    from: number;
    to: number;
};

export const Dates = ({ from, to }: DatesProps) => {
    return (
        <div className="dates">
            <AnimatedNumber number={from} className="dates__from" />
            {"\t"}
            <AnimatedNumber number={to} className="dates__to" />
        </div>
    );
};
