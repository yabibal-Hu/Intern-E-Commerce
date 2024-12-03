// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust the content paths as needed
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        white: "0 4px 6px rgba(255, 255, 255, 0.5)", 
      },
    },
  },
  plugins: [],
};
