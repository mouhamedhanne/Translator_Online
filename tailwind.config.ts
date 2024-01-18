import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_button: "#4D42CD",
        hover_bg_button: "#0D21BC",
        bg_card: "#020817",
      },
    },
  },
  plugins: [],
};
export default config;
