/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "mobile-day": "url('/assets/mobile/bg-image-daytime.jpg')",
        "mobile-night": "url('/assets/mobile/bg-image-nighttime.jpg')",
        "desktop-day": "url('/assets/desktop/bg-image-daytime.jpg')",
        "desktop-night": "url('/assets/desktop/bg-image-nighttime.jpg')",
        "tablet-day": "url('/assets/tablet/bg-image-daytime.jpg')",
        "tablet-night": "url('/assets/tablet/bg-image-nighttime.jpg')",
      }
    },
  },
  plugins: [],
}
