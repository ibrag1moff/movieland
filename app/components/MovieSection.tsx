"use client";
// slider
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// types
import { Data, Movie } from "../types/movies";

// components
import MovieCard from "./MovieCard";

interface MovieSectionProps {
    data: any;
    title: string;
}

export default function MovieSection({ data, title }: MovieSectionProps) {
    const breakpoints = {
        270: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 110,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 150,
        },
        1290: {
            slidesPerView: 5,
            spaceBetween: 180,
        },
    };
    return (
        <div className="pb-12 pt-20 md:pt-24">
            <h1 className="text-center font-bold text-3xl CCCL:text-4xl md:text-left md:text-5xl px-2 mb-8">
                {title}
            </h1>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                loop
                autoplay={{ delay: 3000 }}
                breakpoints={breakpoints}
            >
                {data.map((data: Data) => (
                    <SwiperSlide>
                        <MovieCard key={data.id} data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
