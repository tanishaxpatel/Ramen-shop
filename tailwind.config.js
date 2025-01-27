/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "tilt-up": "tiltUp 3s ease-in-out infinite alternate",
        "spin-slow": "spin 9s linear infinite",
      },
      keyframes: {
        spinSlow: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        tiltUp: {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
          },
          "100%": {
            transform: "translate(0, -10px) rotate(-10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
