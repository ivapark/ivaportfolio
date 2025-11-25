// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ivaportfolio/",   // 👈 important for GitHub Pages
  plugins: [react()],
});
