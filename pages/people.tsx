import { motion as m, useAnimate,  } from "framer-motion";
import { FaPerson, FaPeopleGroup } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import { yellowtail } from "../utils/fonts";
import { useRouter } from "next/router";

export default function People() {
    const [scope, animate] = useAnimate();
    const router = useRouter();

    const handleClick = (element: string) => {
        animate(
            element,
            {
                opacity: [1, 0],
                scale: [1, 50],
                rotate: [0, 800],
                y: [0, 150],
                display: ["block", "none"],
            },
            { duration: 1.65 },
        ).then(() => {
            router.push("/style")
        })
    };

    return (
        <m.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-screen h-screen text-white bg-black overflow-hidden"
        >
            <div
                className={`${yellowtail.className} text-5xl text-center my-10`}
            >
                Headcount
            </div>

            <div
                ref={scope}
                className="flex flex-col justify-between items-center gap-4"
            >
                <m.div
                    id="ridin-solo"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                        handleClick("#ridin-solo");
                    }}
                >
                    <div className="border-white border-2 rounded p-8">
                        <FaPerson color="white" size={50} />
                    </div>
                    <div className="text-center">Riding Solo</div>
                </m.div>
                <m.div
                    id="with-bae"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                        handleClick("#with-bae");
                    }}
                >
                    <div className="border-white border-2 rounded p-8">
                        <GiLovers color="white" size={50} />
                    </div>
                    <div className="text-center">Chillin&apos; With Bae</div>
                </m.div>
                <m.div
                    id="da-squad"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                        handleClick("#da-squad");
                    }}
                >
                    <div className="border-white border-2 rounded p-8">
                        <FaPeopleGroup color="white" size={50} />
                    </div>
                    <div className="text-center">With The Squad</div>
                </m.div>
            </div>
        </m.div>
    );
}
