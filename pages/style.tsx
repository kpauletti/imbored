import React from "react";
import { motion as m, wrap } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import { yellowtail } from "../utils/fonts";
import PageTransition from "@/components/PageTransition";

export default function Style() {
    const [[slide, direction], setSlide] = React.useState([0, 0]);

    const paginate = (newDirection: number) => {
        setSlide([slide + newDirection, newDirection]);
    };

    const slides = [
        { image: "i", text: "Chillin' at home. watching netflix, board games, video games, cooking" },
        { image: "i", text: "Adventurous. Outdoorsy shit, hiking, rock climbing, going to the beach, exploring." },
        { image: "i", text: "Rager. Don't give a shit as long as alcohol is involved" },
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
        <PageTransition>
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
                    className="border-white border-2 rounded h-full grow text-center flex flex-col justify-center items-center"
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
                    <div className="border-white border-2 rounded h-4/5 w-4/5"  />
                    <span className="text-sm">{slides[slideIndex].text}</span>
                </m.div>

                <div className="m-3">
                    <FaAngleRight size={20} onClick={() => paginate(1)} />
                </div>
                </div>

            </div>
        </PageTransition>
    );
}
