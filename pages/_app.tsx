import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { openSans } from "@/utils/fonts";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${openSans.className} relative h-screen overflow-hidden`}>
        <QueryClientProvider client={queryClient}>
            <AnimatePresence mode="wait">
                <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </div>
  );
}
