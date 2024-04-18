import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'inset-orange': 'inset 0 -4px 6px -1px rgba(245, 158, 11, 0.7)', // adjust as needed
      },
      fontFamily: {
        srcSerif: ['var(--font-source-serif-4)'],
        stixToText: ['var(--font-stix-to-text)'],
        renner: ['var(--font-renner)'],
        playball: ['var(--font-pb)'],
        alexBrush: ['var(--font-ab)'],
        raleWay: ['var(--font-raleway)'],

      },
      colors: {
        primarydblue: '#1A2433'
      },
    },
  },
  plugins: [],
};
export default config;
