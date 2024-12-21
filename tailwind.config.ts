import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-lighter': 'var(--color-primary-lighter)',
                dark: 'var(--dark-color)',
                secondary: 'var(--color-secondary)',
                'color-dark': 'var(--color-dark)',
            },
            fontFamily: {
                lugfa: [
                    'Lufga Regular',
                    'Lufga Italic',
                    'Lufga Thin',
                    'Lufga Thin Italic',
                    'Lufga ExtraLight',
                    'Lufga ExtraLight Italic',
                    'Lufga Light',
                    'Lufga Light Italic',
                    'Lufga Medium',
                    'Lufga Medium Italic',
                    'Lufga SemiBold',
                    'Lufga SemiBold Italic',
                    'Lufga Bold',
                    'Lufga Bold Italic',
                    'Lufga ExtraBold',
                    'Lufga ExtraBold Italic',
                    'Lufga Black',
                    'Lufga Black Italic',
                ],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
