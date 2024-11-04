import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        page2: "pages/all-projects.html", // Ajoute ici les autres pages
      },
    },
  },
});
