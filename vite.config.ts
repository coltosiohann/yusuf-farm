import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root-hosted deployments like Vercel and standard cPanel/Hostinger setups
  // should emit absolute asset paths so deep-link refreshes resolve correctly.
  base: "/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
