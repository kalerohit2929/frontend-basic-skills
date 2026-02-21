// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(9, 94%, 61%)",
        primaryAlt: "hsl(28, 72%, 83%)",
        second: "#3e537c",
        secondAlt: "hsla(220, 33%, 36%, 0.65)",
        third: "hsl(220, 36%, 28%)",
        dark: "hsl(300, 100%, 0%)",
      },
      fontSize: {
        "2.5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
