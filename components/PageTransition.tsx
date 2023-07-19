import { motion as m } from "framer-motion";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full text-white"
        >
            {children}
        </m.div>
    );
}
