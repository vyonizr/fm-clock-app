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
        "mobile-afternoon": "url('/assets/mobile/bg-image-afternoontime.jpg')",
        "mobile-night": "url('/assets/mobile/bg-image-nighttime.jpg')",
        "desktop-afternoon": "url('/assets/desktop/bg-image-afternoontime.jpg')",
        "desktop-day": "url('/assets/desktop/bg-image-daytime.jpg')",
        "desktop-night": "url('/assets/desktop/bg-image-nighttime.jpg')",
        "tablet-afternoon": "url('/assets/tablet/bg-image-afternoontime.jpg')",
        "tablet-day": "url('/assets/tablet/bg-image-daytime.jpg')",
        "tablet-night": "url('/assets/tablet/bg-image-nighttime.jpg')",
      }
    },
  },
  plugins: [],
}
