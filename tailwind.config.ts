import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          white: "F1F1FF",
          slate: "#141414",
          lightgray: "#666666",
          gray: "#454545",
          green: "#37C034",
          red: "#F75D5D",
        },
      },
      fontSize: {
        h1: [
          "6rem",
          {
            lineHeight: "6.75rem",
          },
        ],
        h2: [
          "4.75rem",
          {
            lineHeight: "5.25rem",
          },
        ],
        h3: [
          "3.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        h4: [
          "3.25rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        h5: [
          "2.875rem",
          {
            lineHeight: "3.2rem",
          },
        ],
        h6: [
          "2.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        p1: [
          "2.25rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p2: [
          "1.75rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p3: [
          "1.5rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p4: [
          "1.25rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p5: [
          "1rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p6: [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.015625rem",
          },
        ],
        p7: [
          "0.625rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.015625rem",
          },
        ],
      },
    },
    fontFamily: {},
  },

  plugins: [],
};
export default config;
