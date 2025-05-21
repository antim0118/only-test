import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

type AnimatedNumberProps = {
    number: number;
    [x: string]: any;
};

export const AnimatedNumber = ({ number, ...props }: AnimatedNumberProps) => {
    const [showNumber, setShowNumber] = useState(number);
    const numObjectRef = useRef({ num: number });

    useGSAP(() => {
        gsap.to(numObjectRef.current, {
            num: number,
            roundProps: "num",
            duration: 1,
            ease: "exp.out",
            onUpdate: () => {
                setShowNumber(numObjectRef.current.num);
            },
        });
    }, [number]);

    return (
        <>
            <span {...props}>{showNumber}</span>
        </>
    );
};
