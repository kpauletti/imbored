import { motion as m } from "framer-motion";


export default function TransitionLayout({ children, location }: { children: React.ReactNode, location: string }) {

    return (
        <m.div
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className=" text-gray-900 absolute top-0 left-0 w-full h-full"
        >
            {children}
        </m.div>
    )
}