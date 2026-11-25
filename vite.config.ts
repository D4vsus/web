import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/web/',
  envDir: './env',
  server: 
  {
    port: 80,
    strictPort: false
  },
});
