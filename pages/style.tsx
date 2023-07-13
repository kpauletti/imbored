import React from "react";
import { motion as m, wrap } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import { yellowtail } from "../utils/fonts";

export default function Style() {
    const [[slide, direction], setSlide] = React.useState([0, 0]);

    const paginate = (newDirection: number) => {
        setSlide([slide + newDirection, newDirection]);
    };

    const slides = [
        { image: "i", text: "Just Chillin" },
        { image: "i", text: "Just Chillin2" },
    ];

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
    };

    const slideIndex = wrap(0, slides.length, slide);

    return (
        <m.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full text-white bg-black overflow-hidden"
        >
            <div className="flex flex-col w-full h-full items-center">
                <div
                    className={`${yellowtail.className} text-5xl text-center my-10`}
                >
                    What&apos;s your style?
                </div>

                <div className="flex items-center w-full h-1/2">

                <div className="m-3">
                    <FaAngleLeft size={20} onClick={() => paginate(-1)} />
                </div>

                <m.div
                    className="border-white border-2 rounded h-40 grow text-center"
                    key={slide}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                >
                    {slides[slideIndex].text}
                </m.div>

                <div className="m-3">
                    <FaAngleRight size={20} onClick={() => paginate(1)} />
                </div>
                </div>

            </div>
        </m.div>
    );
}
