import React, { useMemo, useState } from "react";
import { Minislider } from "./Minislider";
import { Dates } from "./Dates";
import { TimelineCircle } from "./TimelineCircle";
import { Slider } from "./Slider";
import { TimelineType } from "../types/TimelineType";

type HistoricalDatesProps = {
    timelines: TimelineType[];
};

export const HistoricalDates = ({ timelines }: HistoricalDatesProps) => {
    const [currentTimeline, setCurrentTimeline] = useState(0);

    const timeline = timelines[currentTimeline];
    const cards = timeline?.dates;

    const dates = useMemo(
        () =>
            cards && {
                from: Math.min(...cards.map((c) => c.year)),
                to: Math.max(...cards.map((c) => c.year)),
            },
        [cards]
    );

    return (
        <>
            <div className="bg-container">
                <div className="bg-line-vert-1" />
                <div className="bg-line-vert-2" />
                <div className="bg-line-vert-3" />
                <div className="bg-line-hor" />
            </div>
            <div className="title">
                <p>Исторические даты</p>
            </div>
            <Dates {...dates} />
            <div className="bg-circle-text">{timeline?.name}</div>
            <div className="bottom">
                <Minislider currentTimeline={currentTimeline} setCurrentTimeline={setCurrentTimeline} />
                <Slider cards={cards} />
            </div>
            <TimelineCircle
                items={timelines}
                currentTimeline={currentTimeline}
                setCurrentTimeline={setCurrentTimeline}
            />
        </>
    );
};
