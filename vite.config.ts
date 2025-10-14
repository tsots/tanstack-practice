import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  base: "/tanstack-practice/", // 👈 very important
  plugins: [
    react(),
    tanstackRouter({
      routesDirectory: "src/routes",
    }),
  ],
});
