import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "background-shine": "backgroundShine 3s ease-in-out infinite",
      },
      keyframes: {
        backgroundShine: {
          from: {
            "background-position": "0 0",
          },
          to: {
            "background-position": "-200% 0",
          },
        },
      },
    },
  },
  plugins: [animations],
};
