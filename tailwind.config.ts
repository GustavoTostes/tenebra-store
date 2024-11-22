import type { Config } from "tailwindcss";

export default {

    content: [

        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"

    ],

    theme: {

        extend: {

            colors: {

                "background": "#fafafa",
                "foreground": "#f5f5f5",
                "primary": "#0a0a0a",
                "border": "#e5e5e5",
                "text-primary": "#0a0a0a",
                "text-secondary": "#737373",
            
            }

        }
    
    },

    plugins: []

} satisfies Config;
