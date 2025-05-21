import React from "react";
import { MinisliderButton } from "./MinisliderButton";

type MinisliderProps = {
    currentTimeline: number;
    setCurrentTimeline: React.Dispatch<React.SetStateAction<number>>;
};

export const Minislider = ({ currentTimeline, setCurrentTimeline }: MinisliderProps) => {
    const total = 6;

    const handleButton = (num: number) => {
        setCurrentTimeline((prev) => {
            prev += num;
            if (prev >= total) {
                prev = 0;
            } else if (prev < 0) {
                prev = total - 1;
            }
            return prev;
        });
    };

    return (
        <div className="minislider">
            <span>
                {("0" + (currentTimeline + 1)).slice(-2)}/{("0" + total).slice(-2)}
            </span>
            <div className="minislider-buttons">
                <MinisliderButton invert={true} onClick={() => handleButton(-1)} />
                <MinisliderButton onClick={() => handleButton(1)} />
            </div>
        </div>
    );
};
