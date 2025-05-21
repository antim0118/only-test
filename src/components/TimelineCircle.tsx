import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import React, { useRef } from "react";

const circleRadius = 530 / 2;

type TimelineCircleProps = {
    items: { name: string }[];
    currentTimeline: number;
    setCurrentTimeline: React.Dispatch<React.SetStateAction<number>>;
};

gsap.registerPlugin(MotionPathPlugin);
export const TimelineCircle = ({ items, currentTimeline, setCurrentTimeline }: TimelineCircleProps) => {
    const circlesRef = useRef<HTMLDivElement[] | null[]>([]);
    const prevTimelineRef = useRef<number>(0);

    useGSAP(() => {
        const totalItems = items.length;
        items.forEach((_, index) => {
            let start = (index - prevTimelineRef.current - 2) / totalItems;
            const end = (index - currentTimeline - 2) / totalItems;
            gsap.to(circlesRef.current[index], {
                motionPath: {
                    path: "#circlePath",
                    align: "#circlePath",
                    alignOrigin: [0.5, 0.5],
                    start: start,
                    end: end,
                },
                duration: 1,
                ease: "power2.inOut",
            });
        });
        prevTimelineRef.current = currentTimeline;
    }, [currentTimeline, items.length]);

    return (
        <div className="bg-circle">
            <svg id="svg" width="530" height="530" viewBox="0 0 530 530" xmlns="http://www.w3.org/2000/svg">
                <path
                    id="circlePath"
                    d={`M 0, ${circleRadius}
      a ${circleRadius},${circleRadius} 0 1,0 ${circleRadius * 2},0
      a ${circleRadius},${circleRadius} 0 1,0 -${circleRadius * 2},0`}
                    fillOpacity="0"
                />
            </svg>
            {items.map((item, index) => (
                <div
                    key={index}
                    ref={(el) => (circlesRef.current[index] = el)}
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setCurrentTimeline(index)}
                >
                    <div className={`bg-circle-dot ${currentTimeline == index ? "bg-circle-dot-active" : ""}`}>
                        <div className="bg-circle-text">{item.name}</div>
                        <div className="bg-circle-number">{index + 1}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
