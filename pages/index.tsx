import React from "react";
import { motion as m } from "framer-motion";
import { yellowtail } from "../utils/fonts";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function Home() {
    return (
        <PageTransition>
            <div className={`${yellowtail.className} text-center mt-60`}>
                <Link
                    href="/people"
                    className="neon-text-fuchsia-pulse text-white text-5xl"
                >
                    I&apos;m Bored...
                </Link>
            </div>
        </PageTransition>
    );
}
