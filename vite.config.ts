import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({      
      include: "src/assets/icons/**/*.svg",
      svgrOptions: {
        icon: true, // optional: scale to 1em, great for icons
      },
    })
  ],
  base: "./",
  css: {
    postcss: {
      plugins: [
        tailwind()
      ],
    },
  },
});
