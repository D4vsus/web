import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: 'D4vsus-web',
  server: 
  {
    port: 80,
    strictPort: false
  },
});
