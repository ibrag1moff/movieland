import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#6a0dad",
                bg: "#030608",
                gray: "#363636",
            },
            screens: {
                CCCL: "350px",
                D: "500px",
                DCCC: "800px",
                lg: "1000px",
                MCC: "1200px",
            },
        },
    },
    plugins: [],
};
export default config;
