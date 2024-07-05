// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@lexical/react": "node_modules/@lexical",
      // Adjust the path to match your actual project structure
    },
  },
});
