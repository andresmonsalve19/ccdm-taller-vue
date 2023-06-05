/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "library-primary": "#CB4335",
                "library-secondary": "#EC7063 ",
            },
        },
        fontFamily: {
            Ubuntu: ["sans-serif"],
        },
        container: {
            padding: "2rem",
            center: true,
        },
        screens: {
            sm: "648px",
            md: "768px",
            lg: "1280px",
        },
    },
    plugins: [],
};
