import React, { useEffect, useState } from "react";
import { HistoricalDates } from "./components/HistoricalDates";
import { TimelineType } from "./types/TimelineType";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function App() {
    const [timelines, setTimelines] = useState<TimelineType[]>([]);

    useEffect(() => {
        axios("data/dates.json").then((resp) => setTimelines(resp.data));
    }, []);

    return (
        <>
            <HistoricalDates timelines={timelines} />
        </>
    );
}

export default App;
