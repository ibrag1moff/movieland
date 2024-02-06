"use client";
// react
import { ReactNode } from "react";

// progress bar
import NextTopLoader from "nextjs-toploader";

// loading
import { SkeletonTheme } from "react-loading-skeleton";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Navbar />
                <NextTopLoader
                    color="#6a0dad"
                    zIndex={1000}
                    height={3}
                    speed={100}
                />
                {children}
                <Footer />
            </SkeletonTheme>
        </>
    );
}
