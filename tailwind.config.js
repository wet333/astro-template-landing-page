import tinycolor from "tinycolor2";

const baseBgColor = "#F5F5F5";
const basePrimaryColor = "#EAA221";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                'site': '1200px'
            },
            colors: {
                primary: {
                    DEFAULT: basePrimaryColor,
                    100: tinycolor(basePrimaryColor).lighten(15).toString(),
                    300: basePrimaryColor,
                    600: tinycolor(basePrimaryColor).darken(15).toString(),
                },
                secondary: '#9333EA',
                fontcolor: '#1e1e1e',
                background: {
                    DEFAULT: baseBgColor,
                    50: tinycolor(baseBgColor).lighten(15).toString(),
                    100: tinycolor(baseBgColor).lighten(10).toString(),
                    200: tinycolor(baseBgColor).lighten(5).toString(),
                    300: baseBgColor,
                    400: tinycolor(baseBgColor).darken(5).toString(),
                    500: tinycolor(baseBgColor).darken(10).toString(),
                    600: tinycolor(baseBgColor).darken(15).toString(),
                },
                shadow: {
                    50: 'rgba(0,0,0,0.05)',
                    100: 'rgba(0,0,0,0.1)',
                    200: 'rgba(0,0,0,0.15)',
                    300: 'rgba(0,0,0,0.20)',
                    400: 'rgba(0,0,0,0.25)',
                },
                light: {
                    50: 'rgba(255,255,255,0.05)',
                    100: 'rgba(255,255,255,0.1)',
                    200: 'rgba(255,255,255,0.15)',
                    300: 'rgba(255,255,255,0.20)',
                    400: 'rgba(255,255,255,0.25)',
                },
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
            }
        }
    },
    plugins: [],
}

