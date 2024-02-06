// next
import type { Metadata } from "next";
import "./globals.css";

// fonts
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

// providers
import Providers from "./providers";

export const metadata: Metadata = {
    title: "Movie Land",
    description: "Created by ibrag1moff",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-bg`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
