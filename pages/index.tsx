import { yellowtail } from "../utils/fonts";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Home() {

    return (
        <m.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full bg-black"
        >
            <div className={`${yellowtail.className} text-center mt-60`}>
                <Link href="/people" className="neonText text-5xl">I&apos;m Bored...</Link>
            </div>
        </m.div>
    );
}
