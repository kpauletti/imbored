import "../styles/globals.css";

import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { openSans } from "@/utils/fonts";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${openSans.className} relative h-screen overflow-hidden`}>
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
