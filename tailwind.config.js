/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        whitebg: "#FEFDF6",
        babyBlue: "#C3ECFC",
        orangeCream: "#fbe392",
        sweetPink: "#e4b6a3",
        primaryBlue: "#1d38eb",
        cream: "#f2eaad",
        accentBlue: "#6577EA",
        cyan: "#7ec9b0",
        graybaby: "#565554",
        gold: "#FFD700",
        textWhite: "#f4f4f6",
        background: "#070708",
        primary: "#51504a",
        secondary: "#0e110e",
        accent: "#7f7c6c",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blink: {
          "0%": { opacity: 0.2 },
          "20%": { opacity: 1 },
          "100% ": { opacity: 0.2 },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s ease-in-out",
        marquee: "marquee 60s linear infinite",
        marquee2: "marquee2 60s linear infinite",
        blink: "blink 1.4s both infinite",
      },
      transitionDuration: {
        1500: "1500ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};
