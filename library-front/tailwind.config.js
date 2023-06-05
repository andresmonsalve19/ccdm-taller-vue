/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "library-primary": "#20e9d5",
                "library-secondary": "#086763",
            }
        },
        fontFamily: {
            Amatic: ["Amatic SC, sans-serif"]
        },
        container: {
            padding: "2rem",
            center: true
        },
        screens: {
            sm: "648px",
            md: "768px",
            lg: "1280px",
        }
    },
    plugins: [],
}

