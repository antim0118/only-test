import React, { useRef, useState } from "react";
import { Card, CardProps } from "./Card";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderButton } from "./SliderButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type SliderProps = {
    cards: CardProps[] | undefined;
};

export const Slider = ({ cards }: SliderProps) => {
    const [drawCards, setDrawCards] = useState(cards);
    const sliderRef = useRef(null);

    useGSAP(
        () => {
            gsap.timeline({
                defaults: { duration: 1, ease: "exp.out" },
            })
                .to(sliderRef.current, { opacity: 0, y: 10 })
                .call(() => setDrawCards(cards))
                .to(sliderRef.current, { opacity: 1, y: 0 });
        },
        { revertOnUpdate: true, dependencies: [cards] }
    );

    return (
        <div className="slider" ref={sliderRef}>
            <SliderButton invert={true} />
            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                // style={{ height: "135px" }}
                navigation={{
                    prevEl: ".slider-button-left",
                    nextEl: ".slider-button-right",
                }}
                // loop={true}
            >
                {drawCards?.map((c, idx) => (
                    <SwiperSlide key={idx}>
                        <Card year={c.year} text={c.text} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <SliderButton />
        </div>
    );
};
