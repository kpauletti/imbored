import { motion as m, useAnimate } from "framer-motion";
import { FaPerson, FaPeopleGroup } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import { yellowtail } from "../utils/fonts";
import { useRouter } from "next/router";
import PageTransition from "@/components/PageTransition";

function Option({
    id,
    text,
    onClick,
    icon,
}: {
    id: string;
    text: string;
    onClick: () => void;
    icon: React.ReactNode;
}) {
    return (
        <m.div className="grow flex flex-col justify-center items-center" id={id} whileHover={{ scale: 1.1 }} onClick={onClick}>
            <div className="p-1">{icon}</div>
            <div className="w-[1px] h-10 bg-white"/>
            <div className="text-center text-white font-medium tracking-wide">{text}</div>
        </m.div>
    );
}

export default function People() {
    const [scope, animate] = useAnimate();
    const router = useRouter();

    const handleClick = (element: string) => {
        animate(
            element,
            {
                opacity: [1, 0],
                scale: [1, 0.1],
                rotate: [0, 140],
                y: [0, 300],
                display: ["block", "hidden"],
            },
            { duration: 0.5 }
        ).then(() => {
            router.push("/style");
        });
    };

    return (
        <PageTransition>
            <div
                ref={scope}
                className="flex flex-col items-center h-full"
            >
            <div className={`${yellowtail.className} text-5xl text-center my-10 neon-text-fuchsia`}>
                Headcount
            </div>
            <div className="flex flex-col items-center h-full p-10">
                <Option
                    id="ridin-solo"
                    text="Riding Solo"
                    icon={<FaPerson  color="white" size={50} />}
                    onClick={() => {
                        handleClick("#ridin-solo");
                    }}
                />

                <Option
                    id="with-bae"
                    text="Hangin' With Bae"
                    icon={<GiLovers color="white" size={50} />}
                    onClick={() => {
                        handleClick("#with-bae");
                    }}
                />

                <Option
                    id="da-squad"
                    text="With The Squad"
                    icon={<FaPeopleGroup color="white" size={50} />}
                    onClick={() => {
                        handleClick("#da-squad");
                    }}
                />
            </div>

            </div>
        </PageTransition>
    );
}
