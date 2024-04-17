/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts, tsx, js, jsx}", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontSize: {
        heading1: "92px",
        heading3: "42px",
        ctaFont: "18px",
        heading2: "42px",
        phoneHeading1: "36px",
      },
      height: {
        heroHeight: "850px",
      },
      colors: {
        brown: "#B68566",
        gray: "#E3E3E3",
      },
      backgroundImage: {
        heroImage: "url('./src/assets/images/hero-image.jpeg')",
        coupleImage: "url('./src/assets/images/image-5.jpeg')",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif", "sans"],
        meddons: ["Meddon", "cursive"],
        playFair: "Playfair Display",
        Lavishly: "Lavishly Yours",
      },
      backgroundColor: {
        tertiary: "#FEF0ED",
        brown: "#B68566",
      },
      borderColor: {
        brown: "#B68566",
      },
      container: {
        center: true,
        padding: "20px",
      },
    },
  },
  plugins: [],
};
